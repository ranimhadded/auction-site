import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MessagingGateway } from './messaging.gateway';

@Module({
  imports: [ConfigModule],
  controllers: [MessagingController],
  providers: [MessagingService, JwtAuthGuard,MessagingGateway,],
})
export class MessagingModule {}
