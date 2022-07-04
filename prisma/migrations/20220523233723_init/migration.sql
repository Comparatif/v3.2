/*
  Warnings:

  - You are about to drop the column `acceptedAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `canceledByAdminAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `canceledByShopAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `canceledByUserAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `soldAt` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `acceptedAt`,
    DROP COLUMN `canceledByAdminAt`,
    DROP COLUMN `canceledByShopAt`,
    DROP COLUMN `canceledByUserAt`,
    DROP COLUMN `soldAt`;
