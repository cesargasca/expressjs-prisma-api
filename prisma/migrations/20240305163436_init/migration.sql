/*
  Warnings:

  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `playerid` on the `Player` table. All the data in the column will be lost.
  - Added the required column `PlayerName` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
DROP COLUMN "name",
DROP COLUMN "playerid",
ADD COLUMN     "PlayerID" SERIAL NOT NULL,
ADD COLUMN     "PlayerName" TEXT NOT NULL,
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("PlayerID");

-- CreateTable
CREATE TABLE "Tournament" (
    "TournamentID" SERIAL NOT NULL,
    "TournamentName" TEXT,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("TournamentID")
);

-- CreateTable
CREATE TABLE "Team" (
    "TeamID" SERIAL NOT NULL,
    "TeamName" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("TeamID")
);

-- CreateTable
CREATE TABLE "TeamPlayerTournament" (
    "TeamPlayerTournamentID" SERIAL NOT NULL,
    "TeamID" INTEGER NOT NULL,
    "PlayerID" INTEGER NOT NULL,
    "TournamentID" INTEGER NOT NULL,
    "Handicap" INTEGER NOT NULL,

    CONSTRAINT "TeamPlayerTournament_pkey" PRIMARY KEY ("TeamPlayerTournamentID")
);

-- AddForeignKey
ALTER TABLE "TeamPlayerTournament" ADD CONSTRAINT "TeamPlayerTournament_TeamID_fkey" FOREIGN KEY ("TeamID") REFERENCES "Team"("TeamID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayerTournament" ADD CONSTRAINT "TeamPlayerTournament_PlayerID_fkey" FOREIGN KEY ("PlayerID") REFERENCES "Player"("PlayerID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPlayerTournament" ADD CONSTRAINT "TeamPlayerTournament_TournamentID_fkey" FOREIGN KEY ("TournamentID") REFERENCES "Tournament"("TournamentID") ON DELETE RESTRICT ON UPDATE CASCADE;
