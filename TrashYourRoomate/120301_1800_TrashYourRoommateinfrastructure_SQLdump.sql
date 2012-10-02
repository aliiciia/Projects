# ************************************************************
# Sequel Pro SQL dump
# Version 3408
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.9)
# Database: TrashYourRoommate
# Generation Time: 2012-03-01 22:59:16 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table chainedComments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `chainedComments`;

CREATE TABLE `chainedComments` (
  `chainedCommentsId` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `commentId` int(4) unsigned DEFAULT NULL,
  `userId` int(4) unsigned DEFAULT NULL,
  `chainedComment` tinytext NOT NULL,
  PRIMARY KEY (`chainedCommentsId`),
  KEY `commentId` (`commentId`),
  KEY `userId` (`userId`),
  CONSTRAINT `chainedComments_ibfk_1` FOREIGN KEY (`commentId`) REFERENCES `comments` (`commentId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `chainedComments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table comments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `commentId` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `imageId` int(4) unsigned NOT NULL,
  `userId` int(4) unsigned NOT NULL,
  `comment` tinytext NOT NULL,
  PRIMARY KEY (`commentId`),
  KEY `userId` (`userId`),
  KEY `imageId` (`imageId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`imageId`) REFERENCES `images` (`imageId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table images
# ------------------------------------------------------------

DROP TABLE IF EXISTS `images`;

CREATE TABLE `images` (
  `imageId` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(4) unsigned NOT NULL,
  `title` varchar(75) DEFAULT NULL,
  `image` varchar(100) NOT NULL DEFAULT '',
  `caption` tinytext,
  PRIMARY KEY (`imageId`),
  KEY `userId` (`userId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table userEmail
# ------------------------------------------------------------

DROP TABLE IF EXISTS `userEmail`;

CREATE TABLE `userEmail` (
  `userEmailId` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(4) unsigned NOT NULL,
  `userEmail` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userEmailId`),
  KEY `userId` (`userId`),
  CONSTRAINT `userEmail_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `userId` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(25) NOT NULL DEFAULT '',
  `firstName` varchar(25) NOT NULL DEFAULT '',
  `lastName` varchar(25) NOT NULL DEFAULT '',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
