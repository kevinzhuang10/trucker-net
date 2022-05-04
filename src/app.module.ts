import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AgoraModule } from './agora/agora.module';

@Module({
  imports: [UsersModule, PrismaModule, AgoraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
