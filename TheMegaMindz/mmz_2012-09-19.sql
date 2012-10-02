# ************************************************************
# Sequel Pro SQL dump
# Version 3408
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.25)
# Database: mmz
# Generation Time: 2012-09-19 19:13:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table albums
# ------------------------------------------------------------

DROP TABLE IF EXISTS `albums`;

CREATE TABLE `albums` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT NULL,
  `description` text,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;

INSERT INTO `albums` (`id`, `title`, `description`, `created_at`, `updated_at`)
VALUES
	(1,'Late Night session, Early Moring Grind','4am Engineering, Mixing and Producing in the Studio With The Megamindz, Phats The Producer, Mac Glo and Chris.',NULL,NULL),
	(2,'Placements in Process','The Megamindz, Mac Glo, JayArUH and P.Butta\'s Studio session with Dj D-Strong and Wankaego.',NULL,NULL);

/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table events
# ------------------------------------------------------------

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `detail` varchar(250) NOT NULL DEFAULT '',
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;

INSERT INTO `events` (`id`, `detail`, `created_at`, `updated_at`)
VALUES
	(1,'Driven Music Conference October 5-7 2012 Atlanta, GA',NULL,NULL),
	(2,'IStandard Beast of the Beats December 2012 New York, NY.',NULL,NULL),
	(3,'ASCAP \"I Create Music\" EXPO April 18-20, 2013 in Los Angeles, CA ',NULL,NULL);

/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table messages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `comment` varchar(250) NOT NULL DEFAULT '',
  `created_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;

INSERT INTO `messages` (`id`, `name`, `email`, `comment`, `created_at`)
VALUES
	(1,'','','',1348034779);

/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table photos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `album_id` int(11) DEFAULT NULL,
  `path` varchar(128) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;

INSERT INTO `photos` (`id`, `album_id`, `path`, `title`, `created_at`, `updated_at`)
VALUES
	(1,1,'shawns.jpg','The MegaMindz making a hit.',NULL,NULL),
	(2,1,'album/pic1.jpg','The MegaMindz making a hit.',NULL,NULL),
	(3,1,'album/pic2.jpg','Mac Glo, The MegaMindz, Chris & Phatss',NULL,NULL),
	(4,1,'album/pic4.jpg','Phatss, The MegaMindz, Mac Glo & Chris',NULL,NULL),
	(5,1,'album/pic3.jpg','The MegaMindz hard at work',NULL,NULL),
	(6,1,'album/pic5.jpg','Mac Glo, The MegaMindz, Chris & Phatss.',NULL,NULL),
	(7,2,'smg.jpg','The MegaMindz and Mac Glo at Plush.',NULL,NULL),
	(8,2,'album/studio1.jpg','The MegaMindz and Mac Glo at Plush.',NULL,NULL),
	(9,2,'album/studio2.jpg','Session with The MegaMindz, Wankaego & Dj DStrong.',NULL,NULL),
	(10,2,'album/studio3.jpg','The MegaMindz, Wankaego, Germaine Martel & P.\'',NULL,NULL),
	(11,2,'album/studio4.jpg','The MegaMindz & Mac Glo at Plush.',NULL,NULL),
	(12,2,'album/studio5.jpg',' Wankaego, Germaine Martel & Dj DStrong at Plush.',NULL,NULL);

/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
