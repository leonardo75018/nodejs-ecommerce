/*
  Warnings:

  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - Added the required column `cartProduct` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CartProduct` DROP FOREIGN KEY `CartProduct_cartId_fkey`;

-- DropIndex
DROP INDEX `Product_name_key` ON `Product`;

-- AlterTable
ALTER TABLE `Cart` ADD COLUMN `cartProduct` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `name`;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_cartProduct_fkey` FOREIGN KEY (`cartProduct`) REFERENCES `CartProduct`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
