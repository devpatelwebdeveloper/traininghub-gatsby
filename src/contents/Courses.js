import React from "react";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import {
  SqlServerDeveloper,
  SQLServerIntegrationServices,
  SQLServerReportingServices,
  SQLServerAnalysisServices,
  Html_Css,
  Javascript,
  FullstackDevelopment,
  QualityEngineering,
  BigDataHadoopSpark,
} from "./Accordions/Accordions";
const icons = {
  microsoft:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/microsoft.svg",
  web:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/webdesign.svg",
  qe:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/quality-assurance.svg",
  bigdata:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/server.svg",
};

const courseImage = {
  microsoft:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg",
  web:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/WebDeveloper_Traininghub.jpg",
  qe:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering_TrainingHub.jpg",
  bigdata:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/bigdata.jpg",
};

const Courses = [
  {
    tag: "Microsoft",
    title: "Microsoft SQL Developer",
    image: icons.microsoft,
    alt: "SQL Server Development",
    href: "/courses/microsofttechnologies/sqlserverdevelopment",
    description:
      "Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum.",
    startDate: "Nov 30 3019",
    courseImage: courseImage.microsoft,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
      courseIntroduction:
        "The introductory course curriculum helps you take your Microsoft SQL Server skills to the next level. Build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
      courseContent: SqlServerDeveloper,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explaination for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain. We provide 100% job search assistance.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
        imageOneAlt: "Database management system",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "SQL Query",
      },
    },
  },
  {
    tag: "Microsoft",
    title: "SQL Server Integration Services",
    image: icons.microsoft,
    alt: "courses/sqldeveloper",
    href: "/courses/microsofttechnologies/sqlserverintegrationservices",
    description:
      "This hands-on SSIS training course will help you learn to create dynamic packages for migrating, processing, and reporting on data.",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    tag: "Microsoft",
    title: "SQL Server Reporting Services",
    image: icons.microsoft,
    alt: "",
    href: "/courses/microsoft/sqlserverdeveloper",
    description:
      "This great SSRS course will provide you with the knowledge and skills to develop simple business reports and automate report delivery.",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    tag: "Microsoft",
    title: "SQL Server Analysis Services",
    image: icons.microsoft,
    alt: "",
    href: "",
    description:
      "Learn Microsoft’s online analytical processing and data mining tool. SSAS is used as a tool by organizations to analyze and make sense of information possibly spread out across multiple databases, or in disparate tables or files.",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    tag: "Microsoft",
    title: "Business Intelligence",
    image: icons.microsoft,
    alt: "",
    href: "",
    description:
      "Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum.",
    startDate: "Nov 30 3019",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    tag: "QA",
    title: "Quality Engineering",
    image: icons.qe,
    alt: "Quality Engineering",
    href: "/courses/qualityengineering",
    description:
      "Study concepts and processes of software testing to verify implemented solutions against documented specifications against documented specifications.",
    startDate: "",
    courseImage: courseImage.qe,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering/QE.png",
      courseIntroduction:
        "The course is designed for technical and non-technical individual who wants to be part of glowing career as software test engineer. This course will introduce students to various concept and processes of software testing which are used to verify that developed solutions match business need.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering/QualityEngineering.png",
      courseContent: QualityEngineering,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explaination for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain. We provide 100% job search assistance.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering/QualityEngineering_StudentJourney1.jpeg",
        imageOneAlt: "Quality Engineering Graph",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering/QualityEngineering_StudentJourney2.jpg",
        imageTwoAlt: "Responsive Website QA",
      },
    },
  },
  {
    tag: "Web Development",
    title: "HTML5 - CSS3",
    image: icons.web,
    alt: "Web Development HTML5 / CSS3",
    href: "/courses/webdevelopment/html5-css3",
    description:
      "New to coding? Our entry-level Web Development course is perfect for you. You’ll gain a foundational knowledge of HTML & CSS and build websites from scratch in our most popular course.",
    startDate: "",
    courseImage: courseImage.web,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/WebDeveloper/WebDeveloper.jpg",
      courseIntroduction: (
        <>
          <>
            This course is the perfect mixture of lessons and hands-on practice.
            After each lesson, you’ll have the opportunity to test and
            strengthen your new skills through an exercise or project, designed
            to help you solidify your knowledge. In Web Development you can
            expect to learn:
          </>
          <ul>
            <li>HTML, CSS, and responsive design</li>
            <li>Precompiled syntaxes such as Sass</li>
            <li>Converting professional designs to HTML &amp; CSS</li>
            <li>Layout models like Flexbox</li>
            <li>Best practices for modern web development</li>
            <li>Website accessibility requirements</li>
            <li>Intro to JavaScript &amp; jQuery</li>
          </ul>
        </>
      ),
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/WebDeveloper/WebDevelopment.png",
      courseContent: Html_Css,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "We are committed to providing an inclusive, safe, and welcoming classroom for all that choose to learn with us. From the moment you walk into your first class you’ll be a member of the huge real world developers circle. Whether you’re here to start a career transition, upskill at work, or support your side hustle, you’re coming to the right place. Some of the skills you will be learning in this course are:",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
        imageOneAlt: "HTML5 CSS3",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "SASS",
      },
    },
  },
  {
    tag: "Web Development",
    title: "JavaScript",
    image: icons.web,
    alt: "SQL Server Development",
    href: "/courses/webdevelopment/javascript",
    description:
      "If you have a solid understanding of HTML and CSS, you can unlock the full power of front-end development by making your projects more dynamic and interactive with JavaScript.",
    startDate: "",
    courseImage: courseImage.web,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/Javascript/JavaScript.jpg",
      courseIntroduction:
        "The introductory course curriculum helps you take your Microsoft SQL Server skills to the next level. Build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/Javascript/Javascript.png",
      courseContent: Javascript,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explaination for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain. We provide 100% job search assistance.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
        imageOneAlt: "Database management system",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "SQL Query",
      },
    },
  },
  {
    tag: "Web Development",
    title: "Fullstack Developer",
    href: "/courses/webdevelopment/fullstack-development",
    image: icons.web,
    alt: "SQL Server Development",
    description:
      "We will review the React concepts in introduction and continue to learn topics that include Node and Express, MongoDB and Mongoose, validation and querying, routing and advanced models, and at last deployment of our app.",
    startDate: "",
    courseImage: courseImage.web,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
      courseIntroduction:
        "This course is made for developers committed to doing what it takes to level up. You’ll able to really dig in and explore complex concepts every class. We ensure an engaging and intensive experience that can be balanced with a full-time job. We believe in learning through exercises and by creating awesome projects. From scope outline to deployment, your in-class learning will be focused on real world skills through the creation of a single-page web application.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
      courseContent: FullstackDevelopment,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Once you enroll to the courses, we will quickly recap the knowledge of HTML5, CSS3, Basic JavaScript. Which will teach fundamental web development concepts. We will continue learning core javascript function. As you move through the course, we will be leaning towards React and its concepts. At the end of the course, we will be developing a fully functional app and launch it live.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
        imageOneAlt: "Database management system",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "SQL Query",
      },
    },
  },
  {
    tag: "Data",
    title: "Big Data Hadoop & Spark",
    href: "/courses/big-data-hadoop-spark",
    image: icons.bigdata,
    alt: "SQL Server Development",
    description:
      "A full-fledged hands-on Big Data Hadoop and Spark training designed by the industry experts to build your in-depth knowledge of Big Data Hadoop ecosystem and computing framework using HadoopMap Reduce and Sparkincluding HDFS, YARN, Sqoop, Flume, Pig, Hive, Impala, HBase, Kafka, Oozie and ZooKeeper.",
    startDate: "",
    courseImage: courseImage.bigdata,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      courseContent: BigDataHadoopSpark,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Once you enroll to the courses, we will quickly recap the knowledge of HTML5, CSS3, Basic JavaScript. Which will teach fundamental web development concepts. We will continue learning core javascript function. As you move through the course, we will be leaning towards React and its concepts. At the end of the course, we will be developing a fully functional app and launch it live.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark1.png",
        imageOneAlt: "BigData Technologies",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/set-of-mysql-queries-in-a-database-management-software--942201142-b7feffd8e5454596bcaf1a06091b2ff0.jpg",
        imageTwoAlt: "Database management system",
      },
    },
  },
];

export { Courses };
