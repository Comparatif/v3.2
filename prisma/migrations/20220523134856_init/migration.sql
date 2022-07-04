/*
  Warnings:

  - A unique constraint covering the columns `[vendeurName]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Product_vendeurName_key` ON `Product`(`vendeurName`);
