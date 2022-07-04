/*
  Warnings:

  - You are about to drop the column `email` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `Shop` DROP COLUMN `email`,
    ADD COLUMN `shopEmail` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `email`,
    ADD COLUMN `userEmail` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_userEmail_key` ON `User`(`userEmail`);
