/*
  Warnings:

  - You are about to drop the column `username` on the `team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[owner]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "team_username_key";

-- AlterTable
ALTER TABLE "team" DROP COLUMN "username",
ADD COLUMN     "owner" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "team_owner_key" ON "team"("owner");
