-- AlterTable
ALTER TABLE `Order` MODIFY `acceptedAt` DATETIME(3) NULL,
    MODIFY `canceledByUserAt` DATETIME(3) NULL,
    MODIFY `canceledByShopAt` DATETIME(3) NULL,
    MODIFY `canceledByAdminAt` DATETIME(3) NULL,
    MODIFY `soldAt` BOOLEAN NULL;
