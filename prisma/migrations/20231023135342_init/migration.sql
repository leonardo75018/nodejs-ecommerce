-- DropForeignKey
ALTER TABLE `Cart` DROP FOREIGN KEY `Cart_cartProduct_fkey`;

-- DropIndex
DROP INDEX `CartProduct_cartId_fkey` ON `CartProduct`;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Cart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
