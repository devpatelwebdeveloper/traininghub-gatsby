import { SqlServerDeveloper, Javascript } from "./Accordions/Accordions";
const icons = {
  microsoft:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/microsoft.svg",
  web:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/webdesign.svg",
  qe:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/quality-assurance.svg",
};

const courseImage = {
  microsoft:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg",
  web:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/WebDeveloper_Traininghub.jpg",
  qe:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering_TrainingHub.jpg",
};

const Courses = [
  {
    title: "Microsoft",
    subtitle: "Microsoft SQL Developer",
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
    title: "Microsoft",
    subtitle: "SQL Server Integration Services",
    image: icons.microsoft,
    alt: "courses/sqldeveloper",
    href: "/courses/microsofttechnologies/sqlserverintegrationservices",
    description:
      "This hands-on SSIS training course will help you learn to create dynamic packages for migrating, processing, and reporting on data.",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    title: "Microsoft",
    subtitle: "SQL Server Reporting Services",
    image: icons.microsoft,
    alt: "",
    href: "/courses/microsoft/sqlserverdeveloper",
    description:
      "This great SSRS course will provide you with the knowledge and skills to develop simple business reports and automate report delivery.",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    title: "Microsoft",
    subtitle: "SQL Server Analysis Services",
    image: icons.microsoft,
    alt: "",
    description:
      "Learn Microsoft’s online analytical processing and data mining tool. SSAS is used as a tool by organizations to analyze and make sense of information possibly spread out across multiple databases, or in disparate tables or files.",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    title: "Microsoft",
    subtitle: "Business Intelligence",
    image: icons.microsoft,
    alt: "",
    description:
      "Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum.",
    startDate: "Nov 30 3019",
    startDate: "",
    courseImage: courseImage.microsoft,
  },
  {
    title: "QA",
    subtitle: "Quality Engineering",
    image: icons.qe,
    alt: "",
    description:
      "Quality Engineering is designed for technical and non-technical individual who wants to be part of glowing career as software test engineer. This course will introduce students to various concept and processes of software testing which are used to verify that developed solutions match business need.",
    startDate: "",
    courseImage: courseImage.qe,
  },
  {
    title: "Web Development",
    subtitle: "HTML5 / CSS3",
    image: icons.web,
    alt: "",
    description:
      "New to coding? Our entry-level Web Development course is perfect for you. You’ll gain a foundational knowledge of HTML & CSS and build websites from scratch in our most popular course.",
    startDate: "",
    courseImage: courseImage.web,
  },
  {
    title: "Web Development",
    subtitle: "JavaScript",
    image: icons.web,
    alt: "",
    description:
      "If you have a solid understanding of HTML and CSS, you can unlock the full power of front-end development by making your projects more dynamic and interactive with JavaScript.",
    startDate: "",
    courseImage: courseImage.web,
    courseContent: Javascript,
  },

  {
    title: "Web Development",
    subtitle: "Fullstack Developer",
    image: icons.web,
    alt: "",
    description:
      "We will review the React concepts in introduction and continue to learn topics that include Node and Express, MongoDB and Mongoose, validation and querying, routing and advanced models, and at last deployment of our app.",
    startDate: "",
    courseImage: courseImage.web,
  },
  {
    title: "Data",
    subtitle: "Big Data Hadoop & Spark",
    image: icons.web,
    alt: "",
    description:
      "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
    startDate: "",
    courseImage: courseImage.web,
  },
];

export { Courses };
