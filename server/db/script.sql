-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2019 at 03:22 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.2.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `training_hub`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `subtitle` varchar(100) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `href` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `course_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;


INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Microsoft', 'Microsoft SQL Developer', 'microsoft.svg', 'SQL Server Development', '/courses/microsofttechnologies/sqlserverdevelopment', 'Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum.', 'sqlDeveloper_TrainingHub.jpg')

INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Microsoft', 'SQL Server Integration Services', 'microsoft.svg', 'SQL Server Integration Services', '/courses/microsofttechnologies/sqlserverintegrationservices', "This hands-on SSIS training course will help you learn to create dynamic packages for migrating, processing, and reporting on data.", 'sqlDeveloper_TrainingHub.jpg');

INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Microsoft', 'SQL Server Reporting Services', 'microsoft.svg', 'SQL Server Reporting Services', '/courses/microsoft/sqlserverdeveloper', "This great SSRS course will provide you with the knowledge and skills to develop simple business reports and automate report delivery.", 'sqlDeveloper_TrainingHub.jpg');


INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Microsoft', 'SQL Server Analysis Services', 'microsoft.svg', 'SQL Server Analysis Services', '', "Learn Microsoft’s online analytical processing and data mining tool. SSAS is used as a tool by organizations to analyze and make sense of information possibly spread out across multiple databases, or in disparate tables or files.", 'sqlDeveloper_TrainingHub.jpg');

INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Microsoft', 'Business Intelligence', 'microsoft.svg', 'Business Intelligence', '', "Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum.", 'sqlDeveloper_TrainingHub.jpg');

INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('QA', 'Quality Engineering', 'quality-assurance.svg', 'Quality Engineering', '', "Quality Engineering is designed for technical and non-technical individual who wants to be part of glowing career as software test engineer. This course will introduce students to various concept and processes of software testing which are used to verify that developed solutions match business need.", 'QualityEngineering_TrainingHub.jpg');

INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Web Development', 'HTML5 / CSS3', 'webdesign.svg', 'HTML5 / CSS3', '', "New to coding? Our entry-level Web Development course is perfect for you. You’ll gain a foundational knowledge of HTML & CSS and build websites from scratch in our most popular course.", 'WebDeveloper_Traininghub.jpg');

INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Web Development', 'JavaScript', 'webdesign.svg', 'JavaScript', '', "If you have a solid understanding of HTML and CSS, you can unlock the full power of front-end development by making your projects more dynamic and interactive with JavaScript.", 'WebDeveloper_Traininghub.jpg');

INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
VALUES('Web Development', 'Fullstack Developer', 'webdesign.svg', 'Fullstack Developer', '', "We will review the React concepts in introduction and continue to learn topics that include Node and Express, MongoDB and Mongoose, validation and querying, routing and advanced models, and at last deployment of our app.", 'WebDeveloper_Traininghub.jpg');

