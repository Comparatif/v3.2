-- AlterTable
ALTER TABLE `Order` ADD COLUMN `acceptedAt` VARCHAR(191) NULL,
    ADD COLUMN `canceledByAdminAt` VARCHAR(191) NULL,
    ADD COLUMN `canceledByShopAt` VARCHAR(191) NULL,
    ADD COLUMN `canceledByUserAt` VARCHAR(191) NULL,
    ADD COLUMN `soldAt` VARCHAR(191) NULL;
