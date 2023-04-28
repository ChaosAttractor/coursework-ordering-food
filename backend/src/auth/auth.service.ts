import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { AuthDto } from './dto/auth.dto';
import { jwtConstants } from './constants';
import { Response } from 'express';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private roleService: RoleService,
  ) {}

  async signIn(data: AuthDto, res: Response) {
    // Check if user exists
    const user = await this.userService.findOneByLogin(data.username);
    if (!user) throw new BadRequestException('Неправильно введен логин!');
    const {
      password,
      username,
      refreshToken,
      id,
      role,
      createdAt,
      updatedAt,
      ...userData
    } = user;
    const passwordMatches = await bcrypt.compare(data.password, password);
    if (!passwordMatches)
      throw new BadRequestException('Неправильно введен пароль!');
    const roleName = await this.roleService.findOne(user.role);
    const tokens = await this.getTokens(user.id, user.username);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: false,
    });
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
    });
    res.cookie('role', roleName.role_name, { httpOnly: true, secure: false });
    res.cookie('userId', user.id, { httpOnly: true, secure: false });
    return userData;
  }

  async logout(userId: number, res: Response) {
    res.cookie('accessToken', null, { httpOnly: true, secure: false });
    res.cookie('refreshToken', null, { httpOnly: true, secure: false });
    res.cookie('role', null, { httpOnly: true, secure: false });
    res.cookie('userId', null, { httpOnly: true, secure: false });
    return this.userService.update(userId, { refreshToken: null });
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.userService.updateRefreshToken(userId, hashedRefreshToken);
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: jwtConstants.secret,
          expiresIn: '30d',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: jwtConstants.secret,
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
