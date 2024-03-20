/*
  Warnings:

  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `PlayerID` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `PlayerName` on the `Player` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `TeamID` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `TeamName` on the `Team` table. All the data in the column will be lost.
  - The primary key for the `Tournament` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `TournamentID` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `TournamentName` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the `TeamPlayerTournament` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `playerName` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tournamentId` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bowlingId` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TeamPlayerTournament" DROP CONSTRAINT "TeamPlayerTournament_PlayerID_fkey";

-- DropForeignKey
ALTER TABLE "TeamPlayerTournament" DROP CONSTRAINT "TeamPlayerTournament_TeamID_fkey";

-- DropForeignKey
ALTER TABLE "TeamPlayerTournament" DROP CONSTRAINT "TeamPlayerTournament_TournamentID_fkey";

-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
DROP COLUMN "PlayerID",
DROP COLUMN "PlayerName",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "playerName" TEXT NOT NULL,
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Team" DROP CONSTRAINT "Team_pkey",
DROP COLUMN "TeamID",
DROP COLUMN "TeamName",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "tournamentId" INTEGER NOT NULL,
ADD CONSTRAINT "Team_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_pkey",
DROP COLUMN "TournamentID",
DROP COLUMN "TournamentName",
ADD COLUMN     "bowlingId" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "TeamPlayerTournament";

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "tournamentId" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamPlayer" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "isReplacement" BOOLEAN NOT NULL,

    CONSTRAINT "TeamPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamPlayerSession" (
    "id" SERIAL NOT NULL,
    "teamPlayerId" INTEGER NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "line1" INTEGER NOT NULL,
    "line2" INTEGER NOT NULL,
    "line3" INTEGER NOT NULL,
    "payment" INTEGER NOT NULL,
    "handicap" INTEGER NOT NULL,
    "assistance" INTEGER NOT NULL,
    "laneId" INTEGER NOT NULL,

    CONSTRAINT "TeamPlayerSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bowling" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Bowling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lane" (
    "id" SERIAL NOT NULL,
    "laneId_opponent" INTEGER NOT NULL,

    CONSTRAINT "Lane_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_bowlingId_fkey" FOREIGN KEY ("bowlingId") REFERENCES "Bowling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayer" ADD CONSTRAINT "TeamPlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayer" ADD CONSTRAINT "TeamPlayer_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayerSession" ADD CONSTRAINT "TeamPlayerSession_teamPlayerId_fkey" FOREIGN KEY ("teamPlayerId") REFERENCES "TeamPlayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayerSession" ADD CONSTRAINT "TeamPlayerSession_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayerSession" ADD CONSTRAINT "TeamPlayerSession_laneId_fkey" FOREIGN KEY ("laneId") REFERENCES "Lane"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
