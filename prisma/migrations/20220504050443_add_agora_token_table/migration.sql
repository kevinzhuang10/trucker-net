-- CreateTable
CREATE TABLE "AgoraToken" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AgoraToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AgoraToken" ADD CONSTRAINT "AgoraToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
