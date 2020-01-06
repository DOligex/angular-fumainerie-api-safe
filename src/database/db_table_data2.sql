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
  CONSTRAINT `accept_ibfk_2` FOREIGN KEY (`draining_request_id`) REFERENCES `draining_request` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `document`;
CREATE TABLE `document` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `type` varchar(100) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `title_index` (`title`),
  CONSTRAINT `document_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `document` (`id`, `createAt`, `updateAt`, `deleteAt`, `type`, `title`, `description`, `link`, `user_id`) VALUES
(1,	'2019-12-09 15:20:19',	'2019-12-11 13:45:50',	NULL,	'rayonnement',	'Présentation association : La fumainerie',	'Objet de l\'association : mettre en place et pérenniser de manière citoyenne des réseaux d\'assainissement écologiques, alternatifs et complémentaires aux systèmes d\'assainissement traditionnels et basés sur une charte de valeurs construites collectivement.',	'https://www.gralon.net/mairies-france/gironde/association-la-fumainerie-bordeaux_W332027688.html',	NULL),
(2,	'2019-12-10 09:31:43',	'2019-12-11 13:49:01',	NULL,	'texte',	'Une situation privilégiée',	'La ville de Bordeaux a construit sa richesse grâce à sa situation géographique privilégiée. Non seulement elle tire de son sol et de son climat certains des meilleurs vins du monde, mais elle s’est également dotée, dès 1750, du premier port de France.',	'https://www.gralon.net/tourisme/tourisme-bordeaux-13438.html',	NULL),
(4,	'2019-12-10 15:14:29',	'2019-12-11 13:52:42',	NULL,	'déclaration',	'Mon premier romant à l\'eau de rose',	'Nouveau sur World of Warcraft ? Bénéficiez d’une offre exceptionnelle sur votre premier mois d’abonnement à World of Warcraft. Rejoignez des millions de joueurs et découvrez un monde de mythes, de magie et d’aventures à n’en plus finir.',	'https://worldofwarcraft.com/fr-fr/guild/eu/elune/grim-reaper-s-s%C3%B8ns',	NULL),
(7,	'2019-12-11 13:28:14',	'2019-12-11 13:28:14',	NULL,	'',	'Statuts social',	'Les différents status social de la fumainerie',	'https://www.service-public.fr/associations/vosdroits/R2631',	1),
(8,	'2019-12-13 08:25:17',	'2019-12-13 08:27:30',	NULL,	'angular',	'documentation officielle',	'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',	'https://angular.io',	NULL),
(9,	'2019-12-13 08:27:00',	'2019-12-13 08:27:00',	NULL,	'Javascript',	'documentation officielle',	'JavaScript (qui est souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. ',	'https://developer.mozilla.org/fr/docs/Web/JavaScript',	NULL),
(10,	'2019-12-13 08:29:12',	'2019-12-13 08:29:12',	NULL,	'Python',	'documentation officielle',	'Python is a programming language that lets you work quickly and integrate systems more effectively.',	'https://www.python.org/',	NULL),
(11,	'2019-12-13 08:33:55',	'2019-12-13 08:33:55',	NULL,	'React',	'Tutoriel',	'Grâce à React, il est facile de créer des interfaces utilisateurs interactives.',	'https://fr.reactjs.org',	NULL);

DROP TABLE IF EXISTS `draining`;
CREATE TABLE `draining` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `validationAt` timestamp NULL DEFAULT NULL,
  `cancellationAt` timestamp NULL DEFAULT NULL,
  `site_arrival_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `site_leave_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `check_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `comments` varchar(255) NOT NULL,
  `weight` varchar(30) NOT NULL,
  `sawdust_delivery` varchar(10) DEFAULT NULL,
  `sawdust_weight` varchar(30) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `home_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `home_id` (`home_id`),
  CONSTRAINT `draining_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `draining_ibfk_2` FOREIGN KEY (`home_id`) REFERENCES `home` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `draining_request`;
CREATE TABLE `draining_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `session_date` timestamp NULL DEFAULT NULL,
  `draining_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `slot_id` int(11) DEFAULT NULL,
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
  `author` varchar(50) NOT NULL,
  `date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
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
  `startAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
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
  `type` varchar(100) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `occupant`;
CREATE TABLE `occupant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `type` varchar(20) NOT NULL,
  `frequency` varchar(20) NOT NULL,
  `total_product` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


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


DROP TABLE IF EXISTS `slot`;
CREATE TABLE `slot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `birth_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `phone` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'uncomplete',
  `account_status` varchar(100) NOT NULL DEFAULT 'uncomplete',
  `function` varchar(100) NOT NULL DEFAULT 'uncomplete',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `witness`;
CREATE TABLE `witness` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `note` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `witness_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2019-12-13 08:56:25
