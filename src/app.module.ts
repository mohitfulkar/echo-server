import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }), // Loads .env and makes ConfigService available globally
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
