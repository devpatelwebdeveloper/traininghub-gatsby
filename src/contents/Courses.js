import React from "react";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import {
  SqlServerDeveloper,
  SQLServerIntegrationServices,
  SQLServerReportingServices,
  SQLServerAnalysisServices,
  MicrosoftBI,
  Html_Css,
  Javascript,
  ReactRedux,
  FullstackDevelopment,
  Mern,
  QualityEngineering,
  BigDataHadoopSpark,
  Python,
  DWH,
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
  python:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/python-file.svg",
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
  python:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/python/pythonTrainingHub_io.jpg",
};

const Courses = [
  //Microsoft SQL Developer
  {
    tag: "Microsoft",
    title: "Microsoft SQL Developer",
    image: icons.microsoft,
    alt: "SQL Server Development",
    href: "/courses/microsofttechnologies/sqlserverdevelopment",
    description:
      "Learn how to build, develop, and maintain a SQL Server database by focusing on original features and tools of the SQL server. And how to alter tables using T-SQL, SELECT statements,indexes, queries, transaction types, and triggers. Database management skills like disaster recovery, data storage, replication, and data mirroring. Build and maintain SQL Server DB, and gain insights into enterprise data with real-world SQL Server Development Training.",
    // startDate: "Nov 30 3019",
    courseImage: courseImage.microsoft,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
      courseIntroduction:
        "During this course, you will be able to learn what is SQL architecture, server/client relation,stored procedures, functions, SELECT statement, data types, views. how to modify data by using T-SQL, How to develop different operators and functions to design RDBMS, How to create and manage triggers, How to search, index, sort, and group by using records. (How to transactions - using isolation level and locking - preventing deadlocks.) How to implement optimized/efficient, scalable database, scripts/programs/queries for executions. How to recover,replicate, mirror, and store the data in the database. How to implement actions like installation,configure, planning, designing database, troubleshooting, and security, data recovering techniques. How to use advanced query techniques, advanced views, complex queries, user-defined functions, work with XML. You will also be able to monitor and control user access in optimizing the performance of the database.How to insert, update, and delete data, How to work on joins and sub-queries",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
      courseContent: SqlServerDeveloper,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Soon after enrolling in the course, you will get trained by professionals experienced with 10+ of experience. (The course is designed for software developers, BI Professionals, SQL andDatabase administrators, Big data and Hadoop professionals, BA, and Managers, Individuals looking for a career in SQL development.) There are no pre-requisites to enroll for the course.Hence anyone can gain in-depth knowledge of the content. Instructors conduct assignments and doubt clarifications for better understandings. After successful completion of the course, the expert’s advice will be provided based on individuals performance.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
        imageOneAlt: "Database management system",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "SQL Query",
      },
    },
  },

  //SQL Server Integration Services
  // {
  //   tag: "Microsoft",
  //   title: "SQL Server Integration Services",
  //   image: icons.microsoft,
  //   alt: "SQL Server Integration Services",
  //   href: "/courses/microsofttechnologies/sqlserverintegrationservices",
  //   description:
  //     "This hands-on SSIS training course will help you learn to create dynamic packages for migrating, processing, and reporting on data.",
  //   startDate: "",
  //   courseImage: courseImage.microsoft,
  //   coursePage: {
  //     courseImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
  //     courseIntroduction:
  //       "The introductory course curriculum helps you take your Microsoft SQL Server skills to the next level. Build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions.",
  //     courseIntroductionImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
  //     courseContent: SQLServerIntegrationServices,
  //     studentJourney: {
  //       heading: "Student Journey",
  //       paragraphContent:
  //         "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of each context. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explanation for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain.",
  //       imageOne:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
  //       imageOneAlt: "Database management system",
  //       imageTwo:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
  //       imageTwoAlt: "SQL Query",
  //     },
  //   },
  // },
  //SQL Server Reporting Services
  // {
  //   tag: "Microsoft",
  //   title: "SQL Server Reporting Services",
  //   image: icons.microsoft,
  //   alt: "SQL Server Reporting Services",
  //   href: "/courses/microsofttechnologies/sqlserverreportingservices",
  //   description:
  //     "This great SSRS course will provide you with the knowledge and skills to develop simple business reports and automate report delivery.",
  //   startDate: "",
  //   courseImage: courseImage.microsoft,
  //   coursePage: {
  //     courseImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
  //     courseIntroduction:
  //       "The introductory course curriculum helps you take your Microsoft SQL Server skills to the next level. Build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions.",
  //     courseIntroductionImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
  //     courseContent: SQLServerReportingServices,
  //     studentJourney: {
  //       heading: "Student Journey",
  //       paragraphContent:
  //         "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of each context. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explanation for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain.",
  //       imageOne:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
  //       imageOneAlt: "Database management system",
  //       imageTwo:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
  //       imageTwoAlt: "SQL Query",
  //     },
  //   },
  // },
  // SQL Server Analysis Services
  // {
  //   tag: "Microsoft",
  //   title: "SQL Server Analysis Services",
  //   image: icons.microsoft,
  //   alt: "SQL Server Analysis Services",
  //   href: "/courses/microsofttechnologies/sqlserveranalysisservices",
  //   description:
  //     "Learn Microsoft’s online analytical processing and data mining tool. SSAS is used as a tool by organizations to analyze and make sense of information possibly spread out across multiple databases, or in disparate tables or files.",
  //   startDate: "",
  //   courseImage: courseImage.microsoft,
  //   coursePage: {
  //     courseImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
  //     courseIntroduction:
  //       "The introductory course curriculum helps you take your Microsoft SQL Server skills to the next level. Build robust databases, develop scalable Transact-SQL applications, learn data warehousing concepts and build custom Business Intelligence solutions for greater insight into data to make smarter business decisions.",
  //     courseIntroductionImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
  //     courseContent: SQLServerAnalysisServices,
  //     studentJourney: {
  //       heading: "Student Journey",
  //       paragraphContent:
  //         "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explanation for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain.",
  //       imageOne:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
  //       imageOneAlt: "Database management system",
  //       imageTwo:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
  //       imageTwoAlt: "SQL Query",
  //     },
  //   },
  // },
  //Business Intelligence
  {
    tag: "Microsoft",
    title: "Business Intelligence (MSBI)",
    image: icons.microsoft,
    alt: "SQL Server Development",
    href: "/courses/microsofttechnologies/businessintelligence",
    description:
      "Learn how to work on SSIS, SSAS, and SSRS, This course will lead you to master the MicrosoftBI platform. You can acquire hands-on expertise in data analysis and data integration, creating dashboards, data warehouses, data mining helps you become proficient with MSBI.",
    startDate: "",
    courseImage: courseImage.microsoft,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
      courseIntroduction:
        "During this course tenure, you will learn how to analyze, integrate, and report to the SQL server.MSBI training will help you master Data Mining and Business Intelligence tools, you will also learn how to import, export wizards, data flow, and control flow tasks. The training injects you on how to work on ETL solutions, packages, OLAP, OLTP and configure with MSBI Tools. How to integrate various BI Tools to achieve a complete BI Solution. You can also learn about data migration techniques, data flow transformations, and control flow tasks, Multi-dimensional data modeling, representation, and data sources. You will be provided with access to learn about BI reports, dashboards, charts, Microsoft power view, and report building, Ad-hoc reporting, andData Visualization.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
      courseContent: MicrosoftBI,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Soon after enrolling in the course, you will be trained by professionals experienced with 15+ of experience. MSBI stands top among the BI tools available in today’s market, which leads to a wide range of opportunities. The training is designed for Data analysts, Software architects, BIProfessionals, ETL developers, and individuals looking to up-skill their knowledge in MSBI.Having a basic knowledge of SQL, DMDB(Data Modelling and Data Warehousing), RDBMS would be fetching in getting training with MSBI. (There are no specific pre-requisites for this training, anyone can get this course and get trained in MSBI).",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
        imageOneAlt: "Database management system",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "SQL Query",
      },
    },
  },
  //Python
  {
    tag: "Python",
    title: "Python",
    href: "/courses/python",
    image: icons.python,
    alt: "Python",
    description:
      "Learn the optimal way to get exposure for python programming, python scripting, python for test automation, python for big data, and data analysis.",
    startDate: "",
    courseImage: courseImage.python,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/python/python_TrainingHub_io_Intro.jpg",
      courseIntroduction:
        "During this course, you will learn more about python programming from the basics. You will gain in-depth knowledge of essential concepts like conditional statements, third-party modules, web scraping, shell scripting, error handling, Python web framework Django, etc. You will learn basic and advanced concepts of python programming, a comprehensive understanding of MasterObject-Oriented Programming concepts, Implement loops and conditional statements, expertise in creating python functions, Get familiar with IDEs, and python editors, string manipulations.Gain knowledge in advanced analytics and data visualization concept work by developing algorithms and build real-life applications. Get expertise in file handling.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/python/pythonTrainingHub_io.jpg",
      courseContent: Python,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent: `Soon after enrolling in the course, you will get trained by professionals experienced with 10+ of experience. This course got designed for freshers, software developers, professionals with programming experience, testing professionals, project managers, Aspirants who desire to learn python programming, and Individuals looking for career growth in bigdata and python. There are no specific requirements to learn python. Anyone with basic programming knowledge is eligible to take python training. Instructors conduct assignments and doubt clarifications for better understandings. After successful completion of the course, the expert’s advice will be provided based on individuals performance.
          `,
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/python/DataScience_Training_Hub_io.jpeg",
        imageOneAlt: "Data Science",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/python/python_TrainingHub_io.jpg",
        imageTwoAlt: "Python Programming",
      },
    },
  },
  //Big Data Hadoop & Spark
  {
    tag: "Data",
    title: "Big Data Hadoop & Spark",
    href: "/courses/data/big-data-hadoop-spark",
    image: icons.bigdata,
    alt: "Big Data Hadoop & Spark",
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
          "Soon after enrolling in the course, you will be trained by professionals experienced with 10+ of experience. By the end of the course, you will be able to... Big data and Hadoop architecture,Understanding of Hadoop clusters and important configurations, Complete setup of the Hadoop ecosystem, Hadoop distributed file system, MapReduce framework and application execution flow, data ingestion tools, Hive SQL, and Pig Latin Language. This course is designed forDevelopers, Project Managers, and architects. ETL, BI Professionals. There are no specific prerequisites for this training, anyone can get training on this course.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark1.png",
        imageOneAlt: "BigData Technologies",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/set-of-mysql-queries-in-a-database-management-software--942201142-b7feffd8e5454596bcaf1a06091b2ff0.jpg",
        imageTwoAlt: "Database management system",
      },
    },
  },
  //Quality Engineering
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
          "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explanation for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering/QualityEngineering_StudentJourney1.jpeg",
        imageOneAlt: "Quality Engineering Graph",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering/QualityEngineering_StudentJourney2.jpg",
        imageTwoAlt: "Responsive Website QA",
      },
    },
  },
  //HTML5 CSS3
  // {
  //   tag: "Web Development",
  //   title: "HTML5 - CSS3",
  //   image: icons.web,
  //   alt: "Web Development HTML5 / CSS3",
  //   href: "/courses/webdevelopment/html5-css3",
  //   description:
  //     "New to coding? Our entry-level Web Development course is perfect for you. You’ll gain a foundational knowledge of HTML & CSS and build websites from scratch in our most popular course.",
  //   startDate: "",
  //   courseImage: courseImage.web,
  //   coursePage: {
  //     courseImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/WebDeveloper/WebDeveloper.jpg",
  //     courseIntroduction: (
  //       <>
  //         <>
  //           This course is the perfect mixture of lessons and hands-on practice.
  //           After each lesson, you’ll have the opportunity to test and
  //           strengthen your new skills through an exercise or project, designed
  //           to help you solidify your knowledge. In Web Development you can
  //           expect to learn:
  //         </>
  //         <ul>
  //           <li>HTML, CSS, and responsive design</li>
  //           <li>Precompiled syntaxes such as Sass</li>
  //           <li>Converting professional designs to HTML &amp; CSS</li>
  //           <li>Layout models like Flexbox</li>
  //           <li>Best practices for modern web development</li>
  //           <li>Website accessibility requirements</li>
  //           <li>Intro to JavaScript &amp; jQuery</li>
  //         </ul>
  //       </>
  //     ),
  //     courseIntroductionImage:
  //       "https://devashish-lms.s3.ca-central-1.amazonaws.com/WebDeveloper/WebDevelopment.png",
  //     courseContent: Html_Css,
  //     studentJourney: {
  //       heading: "Student Journey",
  //       paragraphContent:
  //         "We are committed to providing an inclusive, safe, and welcoming classroom for all that choose to learn with us. From the moment you walk into your first class you’ll be a member of the huge real world developers circle. Whether you’re here to start a career transition, upskill at work, or support your side hustle, you’re coming to the right place. Some of the skills you will be learning in this course are:",
  //       imageOne:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
  //       imageOneAlt: "HTML5 CSS3",
  //       imageTwo:
  //         "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
  //       imageTwoAlt: "SASS",
  //     },
  //   },
  // },
  //JavaScript
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
          "Upon enrolling the course, you will get training by professional with over 20 years of experience. The course is designed in a way that no or minimum prior knowledge is required for enrolment. The topics are covered in a way that student can achieve in-depth knowledge of eachcontext. You will also be the part of our wide network of Slack. Assignments will be marked by instructor with explanation for better understanding. Upon successfully completion of the course, pathway to next step will be discussed based on individual's knowledge gain.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/Fullstack+copy.png",
        imageOneAlt: "Technology stack",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "IDE",
      },
    },
  },

  //React-Redux
  {
    tag: "Web Development",
    title: "React Redux",
    href: "/courses/webdevelopment/react-redux",
    image: icons.web,
    alt: "React Redux",
    description:
      "Learn how to upskill your JavaScript skill set to improve workflows. This course will lead you to master with Reactjs architecture and components, Fundamentals of React with Redux, Async flow of redux, Redux testing and routing, Async actions, Data flow usage with react.",
    startDate: "",
    courseImage: courseImage.web,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
      courseIntroduction:
        "During this course tenure, you will learn how to upskill and become a successful client-side application developer. This training enables you to gain knowledge of Webpack, React Router,Async flow, and Async action, and build single-page applications easily & effectively. You will learn each concept and have practical executions with real-time examples. To upgrade yourself from junior level to senior and executive, this is the course of your choice. You will become a modern asset to the coding teams.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/FullstackDeveloper.png",
      courseContent: ReactRedux,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Soon after enrolling in the course, you will be trained by professionals experienced with 14+ of experience.  This course is designed for Web developers, UI developers, and Front end developers. If you have prior knowledge of Reactjs, HTML, CSS, Javascript it would be fetching,Now get ready to take a deep dive into the advanced concepts with this course. Finally, this course will lead you to an opportunity to become a senior developer. At the end of the course,you will gain knowledge in building web applications, react compositional models, Managing your data with Redux, Building interactive web pages with components.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/Fullstack+copy.png",
        imageOneAlt: "Fullstack",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/Fullstack1.png",
        imageTwoAlt: "Technology stack",
      },
    },
  },
  //Fullstack Developer
  {
    tag: "Web Development",
    title: "Fullstack Developer",
    href: "/courses/webdevelopment/fullstack-development",
    image: icons.web,
    alt: "Fullstack Development",
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
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/FullstackDeveloper.png",
      courseContent: FullstackDevelopment,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Once you enroll to the courses, we will quickly recap the knowledge of HTML5, CSS3, Basic JavaScript. Which will teach fundamental web development concepts. We will continue learning core javascript function. As you move through the course, we will be leaning towards React and its concepts. At the end of the course, we will be developing a fully functional app and launch it live.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/Fullstack+copy.png",
        imageOneAlt: "Fullstack",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/Fullstack1.png",
        imageTwoAlt: "Technology stack",
      },
    },
  },
  //MERN
  {
    tag: "Web Development",
    title: "MERN Stack",
    href: "/courses/webdevelopment/mern-stack",
    image: icons.web,
    alt: "MERN",
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
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/FullstackDeveloper.png",
      courseContent: Mern,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Once you enroll to the courses, we will quickly recap the knowledge of HTML5, CSS3, Basic JavaScript. Which will teach fundamental web development concepts. We will continue learning core javascript function. As you move through the course, we will be leaning towards React and its concepts. At the end of the course, we will be developing a fully functional app and launch it live.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/Fullstack+copy.png",
        imageOneAlt: "Fullstack",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/FullstackDeveloper/Fullstack1.png",
        imageTwoAlt: "Technology stack",
      },
    },
  },

  //DWH
  {
    tag: "Data",
    title: "Microsoft DWH",
    image: icons.microsoft,
    alt: "Microsoft DWH",
    href: "/courses/data/data-warehousing",
    description:
      "Industry-designed combo training course that includes the Microsoft Business Intelligence tool and its components like SSRS, SSIS, and SSAS that use the SQL Server. This training will provide you with full proficiency in working with MSBI, ETL tasks, analytics, data integration, and reporting.",
    startDate: "",
    courseImage: courseImage.microsoft,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SQLServer.jpg",
      courseIntroduction:
        "Our DWH program lets you gain proficiency in Microsoft Business Intelligence. You will work on real-world industry projects pertaining to the three components of MSBI, SSIS for ETL, SSAS for analysis, and SSRS for reporting along with data mining queries, Visual Studio, SQL Server, OLAP, generating Cubes, data sources, and converting raw data into business insights. As part of this training, you will also receive the official course material issued by Microsoft for Analyzing Data with SQL Server Reporting Services and Querying Data with Transact-SQL.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/SqlServerDevelopment.png",
      courseContent: DWH,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "After this course student will gain in Depth Knowledge of DW Concepts including ETL and Multidimensional Modelling Data modeling, transformation, and representation. Various steps of ETL process. SSRS architecture and components. Install and Configure MSBI System and implement end to end ETL system using SSIS. Create cube and administer them in SSAS. Create Multiple types of reports, Charts, Dashboard and visualization using SSRS/Power view etc.. Understanding the concept and need of ad-hoc reporting. Integrate various BI tools to build a complete BI solution.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/database-management.png",
        imageOneAlt: "Database management system",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/SQL+Server+Development/sqlquery.jpg",
        imageTwoAlt: "SQL Query",
      },
    },
  },
];

export { Courses };
