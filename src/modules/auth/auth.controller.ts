import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { type User } from './auth.models';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() payload: User) {
    return this.authService.create(payload);
  }
}
