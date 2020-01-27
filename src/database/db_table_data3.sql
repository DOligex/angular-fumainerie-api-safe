-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `accept`;
CREATE TABLE `accept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `draining_request_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `draining_request_id` (`draining_request_id`),
  CONSTRAINT `accept_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `accept_ibfk_2` FOREIGN KEY (`draining_request_id`) REFERENCES `draining_request` (`id`),
  CONSTRAINT `accept_ibfk_4` FOREIGN KEY (`id`) REFERENCES `draining` (`vidangeur_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `document`;
CREATE TABLE `document` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `title` varchar(150) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `title_index` (`title`),
  CONSTRAINT `document_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `draining`;
CREATE TABLE `draining` (
  `vidangeur_id` int(11) DEFAULT NULL,
  `done_draining` tinyint(4) NOT NULL DEFAULT '0',
  `check_date` date DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `cancellationAt` timestamp NULL DEFAULT NULL,
  `site_arrival_time` time DEFAULT NULL,
  `site_leave_time` time DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `weight` varchar(30) DEFAULT NULL,
  `sawdust_delivery` varchar(10) DEFAULT NULL,
  `sawdust_weight` varchar(30) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `home_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `home_id` (`home_id`),
  KEY `vidangeur_id` (`vidangeur_id`),
  CONSTRAINT `draining_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `draining_ibfk_2` FOREIGN KEY (`home_id`) REFERENCES `home` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `draining_request`;
CREATE TABLE `draining_request` (
  `emergency` tinyint(4) NOT NULL DEFAULT '0',
  `accepted` tinyint(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `session_date` datetime DEFAULT NULL,
  `draining_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `slot_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `draining_id` (`draining_id`),
  KEY `user_id` (`user_id`),
  KEY `slot_id` (`slot_id`),
  CONSTRAINT `draining_request_ibfk_1` FOREIGN KEY (`draining_id`) REFERENCES `draining` (`id`),
  CONSTRAINT `draining_request_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `draining_request_ibfk_3` FOREIGN KEY (`slot_id`) REFERENCES `slot` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `event`;
CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `author` varchar(50) NOT NULL DEFAULT 'La Collégiale',
  `date` date NOT NULL,
  `time` time NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `event_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `phone` varchar(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `address_plus` varchar(255) NOT NULL,
  `zip` varchar(30) NOT NULL,
  `city` varchar(40) NOT NULL,
  `emptying_story` timestamp NULL DEFAULT NULL,
  `startAt` timestamp NULL DEFAULT NULL,
  `people` varchar(10) NOT NULL,
  `adult_nbr` int(11) NOT NULL,
  `child_nbr` int(11) DEFAULT NULL,
  `rapport` varchar(40) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `home_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `title` varchar(150) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `production`;
CREATE TABLE `production` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `quantity` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `topic` varchar(100) NOT NULL,
  `question` varchar(255) NOT NULL,
  `traited` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `slot`;
CREATE TABLE `slot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `startAt` time(6) DEFAULT NULL,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `endAt` time(6) DEFAULT NULL,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `token`;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `value` varchar(250) CHARACTER SET utf8mb4 NOT NULL,
  `expiration` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `token_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `function` varchar(200) DEFAULT 'producteur',
  `firstname` varchar(200) DEFAULT NULL,
  `lastname` varchar(200) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(150) NOT NULL,
  `email_active` tinyint(1) NOT NULL DEFAULT '1',
  `account_status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `witness`;
CREATE TABLE `witness` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `description` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `witness_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2020-01-15 14:43:38
