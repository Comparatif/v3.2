/*
  Warnings:

  - You are about to drop the column `vendeurId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `vendeurName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `vendeurId`,
    ADD COLUMN `vendeurName` VARCHAR(191) NOT NULL;
