-- MySQL dump 10.13  Distrib 5.7.22, for osx10.13 (x86_64)
--
-- Host: localhost    Database: global_apply
-- ------------------------------------------------------
-- Server version	5.7.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `global_apply`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `global_apply` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `global_apply`;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2018_05_31_144549_create_transfer_courses_table',1),(3,'2018_05_31_150441_create_transfer_applications',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transfer_applications`
--

DROP TABLE IF EXISTS `transfer_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transfer_applications` (
  `applicationID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sjtuID` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `evaluationID` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `courseID` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `appComment` text COLLATE utf8_unicode_ci NOT NULL,
  `tcafFile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sjtuTransferFormFile` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `syllabusFile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `additionalMaterialsFile` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `evaluationProgress` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `evaluationResult` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `evaluationInfo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`applicationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transfer_applications`
--

LOCK TABLES `transfer_applications` WRITE;
/*!40000 ALTER TABLE `transfer_applications` DISABLE KEYS */;
/*!40000 ALTER TABLE `transfer_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transfer_courses`
--

DROP TABLE IF EXISTS `transfer_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transfer_courses` (
  `courseID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `university` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `courseCode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `courseName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `applicationID` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `jiCourseCode` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `jiCourseName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `activeTime` date DEFAULT NULL,
  `expireTime` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transfer_courses`
--

LOCK TABLES `transfer_courses` WRITE;
/*!40000 ALTER TABLE `transfer_courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `transfer_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `sjtuID` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `class` int(11) DEFAULT NULL,
  `instituteRole` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthDate` int(11) NOT NULL,
  `birthMonth` int(11) NOT NULL,
  `birthYear` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idCardType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idCardNo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `passportNo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `passportIssueDate` date DEFAULT NULL,
  `passportExpireDate` date DEFAULT NULL,
  `userType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`sjtuID`),
  UNIQUE KEY `users_sjtuid_unique` (`sjtuID`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('5143709199','戚培源',2018,'Local',2,9,1995,'1995-09-02','Male','berrieqi@sjtu.edu.cn','15857202877','PRC ID','330501199509029414','',NULL,NULL,'admin','6qotp7MhOUkZXgsxy2eHSrrzzpjme5QyGVw7C6qN9cu5UvZbft5dhrPbPfUY','2018-05-28 04:28:52','2018-05-28 05:10:35'),('515370910103','陈俞翰',2019,'Local',16,12,1996,'1996-12-16','Male','1025098066@qq.com','15705791667','PRC ID','330782199612160217','',NULL,NULL,'student','2Nt8wAtMefogkQ28dK3vHm8SLljChztXFh8KmKMi1sTsLBzRgSeQhpISuPpW','2018-05-28 02:50:01','2018-05-31 07:43:37'),('60906','杜燕',NULL,'IPO',18,3,1981,'1981-03-18','Female','viva.du@sjtu.edu.cn','13917456823','PRC ID','310115198103188624',NULL,NULL,NULL,'admin','F23kuXOjVELzWRkiWfy2lYpXp8Iv0yJNJN3O3Jc1AeVaekzXW7RgucLxwob0','2018-05-28 02:45:14','2018-05-28 05:50:07'),('63046','熊静怡',NULL,'IPO',27,12,1992,'1992-12-27','Female','jingyi.xiong@sjtu.edu.cn','17621375774','PRC ID','360103199212274124','',NULL,NULL,'admin','NmNbBEg0AJpavNkvdtMQIkkmpY6cXbRMkCsin6Emnsf6sWudBBtQaQhT0qL8','2018-05-29 08:43:55','2018-05-29 08:45:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-07  0:24:37
