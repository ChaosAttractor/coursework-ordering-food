import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Public } from './roles/public';
import { Request, Response } from 'express';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  signin(@Body() data: AuthDto, @Res({ passthrough: true }) res: Response) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    return this.authService.signIn(data, res);
  }

  @Public()
  @Post('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    this.authService.logout(req.cookies.userId, res);
  }
}
