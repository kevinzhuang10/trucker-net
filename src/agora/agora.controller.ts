import { Body, Controller, Post } from '@nestjs/common';
import { AgoraService } from './agora.service';

@Controller('agora')
export class AgoraController {
  constructor(private agoraService: AgoraService) {}

  @Post('token')
  async createTokenForUser(@Body() createTokenPayload: { uid: number }) {
    return this.agoraService.generateTokenForUser(createTokenPayload.uid);
  }
}
