import { Injectable } from '@nestjs/common';
import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AgoraService {
  constructor(private prismaService: PrismaService) {}

  generateToken(uid: number): string {
    const appID = process.env.APP_ID;
    const appCertificate = process.env.APP_CERTIFICATE;
    const channelName = process.env.CHANNEL_NAME;

    const role = RtcRole.PUBLISHER;

    const expirationTimeInSeconds = 3600; // 1 hour exp

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    return RtcTokenBuilder.buildTokenWithUid(
      appID,
      appCertificate,
      channelName,
      uid,
      role,
      privilegeExpiredTs,
    );
  }

  async generateTokenForUser(uid: number): Promise<string> {
    const generatedToken = this.generateToken(uid);

    const agoraTokenInstance = await this.prismaService.agoraToken.create({
      data: {
        id: generatedToken,
        userId: uid,
      },
    });

    return agoraTokenInstance.id;
  }
}
