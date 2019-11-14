const icons = {
  microsoft:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/microsoft.svg",
  web:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/webdesign.svg",
  qe:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/quality-assurance.svg",
};

const Courses = [
  {
    title: "Microsoft",
    subtitle: "Microsoft SQL Developer",
    image: icons.microsoft,
    alt: "SQL Server Development",
    href: "courses",
  },
  {
    title: "Microsoft",
    subtitle: "SQL Server Integration Services",
    image: icons.microsoft,
    alt: "courses/sqldeveloper",
    href: "/courses/microsoft",
  },
  {
    title: "Microsoft",
    subtitle: "SQL Server Reporting Services",
    image: icons.microsoft,
    alt: "",
    href: "/courses/microsoft/sqlserverdeveloper",
  },
  {
    title: "Microsoft",
    subtitle: "SQL Server Analysis Services",
    image: icons.microsoft,
    alt: "",
  },
  {
    title: "Microsoft",
    subtitle: "Business Intelligence",
    image: icons.microsoft,
    alt: "",
  },
  {
    title: "QA",
    subtitle: "Quality Engineering",
    image: icons.qe,
    alt: "",
  },
  {
    title: "Web Development",
    subtitle: "HTML5 / CSS3",
    image: icons.web,
    alt: "",
  },
  {
    title: "Web Development",
    subtitle: "JavaScript",
    image: icons.web,
    alt: "",
  },
  {
    title: "Web Development",
    subtitle: "Fullstack Developer",
    image: icons.web,
    alt: "",
  },
];

export { Courses };
