/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Number` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderEmail` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shopId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Connections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[orderId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_names` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendeurs` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Order_id_key` ON `Order`;

-- AlterTable
ALTER TABLE `Order` DROP PRIMARY KEY,
    DROP COLUMN `Number`,
    DROP COLUMN `authorId`,
    DROP COLUMN `orderEmail`,
    DROP COLUMN `productId`,
    DROP COLUMN `shopId`,
    ADD COLUMN `adresses` VARCHAR(191) NULL,
    ADD COLUMN `categories` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `countryName` VARCHAR(191) NULL,
    ADD COLUMN `emailVerified` DATETIME(3) NULL,
    ADD COLUMN `facebook` VARCHAR(191) NULL,
    ADD COLUMN `firstName` VARCHAR(191) NULL,
    ADD COLUMN `fix1` VARCHAR(191) NULL,
    ADD COLUMN `horaires` VARCHAR(191) NULL,
    ADD COLUMN `instagram` VARCHAR(191) NULL,
    ADD COLUMN `lastName` VARCHAR(191) NULL,
    ADD COLUMN `livraison` VARCHAR(191) NULL,
    ADD COLUMN `localisation` VARCHAR(191) NULL,
    ADD COLUMN `marques` VARCHAR(191) NULL,
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `paiement` VARCHAR(191) NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NULL,
    ADD COLUMN `product_commune` VARCHAR(191) NULL,
    ADD COLUMN `product_country` VARCHAR(191) NULL,
    ADD COLUMN `product_imagelinks` VARCHAR(191) NULL,
    ADD COLUMN `product_links` VARCHAR(191) NULL,
    ADD COLUMN `product_names` VARCHAR(255) NOT NULL,
    ADD COLUMN `product_prices` VARCHAR(191) NULL,
    ADD COLUMN `shopEmail` VARCHAR(191) NULL,
    ADD COLUMN `shop_commune` VARCHAR(191) NULL,
    ADD COLUMN `shop_website` VARCHAR(191) NULL,
    ADD COLUMN `stocks` VARCHAR(191) NULL,
    ADD COLUMN `telephone1` VARCHAR(191) NULL,
    ADD COLUMN `telephone2` VARCHAR(191) NULL,
    ADD COLUMN `type` VARCHAR(191) NULL,
    ADD COLUMN `userEmail` VARCHAR(191) NULL,
    ADD COLUMN `user_commune` VARCHAR(191) NULL,
    ADD COLUMN `vendeurs` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendeurs_image` VARCHAR(191) NULL,
    ADD COLUMN `villes1` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Connections`;

-- DropTable
DROP TABLE `Product`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `Shop`;

-- DropTable
DROP TABLE `Subscription`;

-- DropTable
DROP TABLE `User`;

-- CreateIndex
CREATE UNIQUE INDEX `Order_orderId_key` ON `Order`(`orderId`);
