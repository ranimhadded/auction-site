import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationsGateway } from './notifications.gateway';

@Module({
  imports: [ConfigModule],
  controllers: [NotificationController],
  providers: [NotificationService,NotificationsGateway],
})
export class NotificationModule {}