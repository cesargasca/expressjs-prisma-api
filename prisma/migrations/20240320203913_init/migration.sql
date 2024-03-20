/*
  Warnings:

  - You are about to drop the column `playerName` on the `Player` table. All the data in the column will be lost.
  - Added the required column `name` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "playerName",
ADD COLUMN     "name" TEXT NOT NULL;
