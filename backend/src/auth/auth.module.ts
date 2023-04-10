import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { RoleModule } from 'src/role/role.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, PassportModule, JwtStrategy],
  imports: [
    UserModule,
    RoleModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [AuthService, JwtModule, RoleModule],
  controllers: [AuthController],
})
export class AuthModule {}
