-- CreateTable
CREATE TABLE `Order` (
    `Number` INTEGER NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `pending` BOOLEAN NOT NULL DEFAULT false,
    `accepted` BOOLEAN NOT NULL DEFAULT false,
    `canceledByUser` BOOLEAN NOT NULL DEFAULT false,
    `canceledByShop` BOOLEAN NOT NULL DEFAULT false,
    `canceledByAdmin` BOOLEAN NOT NULL DEFAULT false,
    `sold` BOOLEAN NOT NULL DEFAULT false,
    `pendingAt` DATETIME(3) NOT NULL,
    `acceptedAt` DATETIME(3) NOT NULL,
    `canceledByUserAt` DATETIME(3) NOT NULL,
    `canceledByShopAt` DATETIME(3) NOT NULL,
    `canceledByAdminAt` DATETIME(3) NOT NULL,
    `soldAt` BOOLEAN NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `productId` INTEGER NOT NULL,
    `shopId` INTEGER NOT NULL,

    UNIQUE INDEX `Order_id_key`(`id`),
    PRIMARY KEY (`Number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `legendary` BOOLEAN NOT NULL DEFAULT false,
    `epic` BOOLEAN NOT NULL DEFAULT false,
    `basic` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Subscription_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `countryName` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `user_commune` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `company` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vendeurs` VARCHAR(191) NOT NULL,
    `villes1` VARCHAR(191) NULL,
    `adresses` VARCHAR(191) NULL,
    `telephone1` VARCHAR(191) NULL,
    `telephone2` VARCHAR(191) NULL,
    `fix1` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `horaires` VARCHAR(191) NULL,
    `localisation` VARCHAR(191) NULL,
    `shop_website` VARCHAR(191) NULL,
    `shop_commune` VARCHAR(191) NULL,
    `livraison` VARCHAR(191) NULL,
    `paiement` VARCHAR(191) NULL,
    `vendeurs_image` VARCHAR(191) NULL,

    UNIQUE INDEX `Shop_vendeurs_key`(`vendeurs`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_names` VARCHAR(255) NOT NULL,
    `product_imagelinks` VARCHAR(191) NULL,
    `marques` VARCHAR(191) NULL,
    `categories` VARCHAR(191) NULL,
    `product_links` VARCHAR(191) NULL,
    `product_prices` VARCHAR(191) NULL,
    `stocks` VARCHAR(191) NULL,
    `product_country` VARCHAR(191) NULL,
    `product_commune` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `vendeurId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
