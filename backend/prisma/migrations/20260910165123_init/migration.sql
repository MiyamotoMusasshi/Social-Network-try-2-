-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `info` TEXT NULL,
    `avatar` TEXT NULL,
    `email` VARCHAR(191) NOT NULL,
    `friends_count` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
