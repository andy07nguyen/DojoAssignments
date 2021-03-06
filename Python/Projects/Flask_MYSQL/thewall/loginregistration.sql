-- MySQL Script generated by MySQL Workbench
-- Mon Feb 13 22:04:35 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema loginregistrationdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema loginregistrationdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loginregistrationdb` DEFAULT CHARACTER SET utf8 ;
USE `loginregistrationdb` ;

-- -----------------------------------------------------
-- Table `loginregistrationdb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loginregistrationdb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `password` VARCHAR(255) NULL,
  `pw_confirm` VARCHAR(255) NULL,
  `session_id` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
