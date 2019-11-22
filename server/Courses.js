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

// INSERT INTO`course`(`title`, `subtitle`, `icon`, `alt`, `href`,`description`, `course_image`)
// VALUES('Microsoft', 'Microsoft SQL Developer', 'microsoft.jpg', 'SQL Server Development', '/courses/microsofttechnologies/sqlserverdevelopment', 'Build and maintain SQL Server databases, and gain meaningful insight into enterprise data with Real World SQL Server Training Curriculum.', 'sqlDeveloper_TrainingHub.jpg')

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
];

module.exports = { Courses };
