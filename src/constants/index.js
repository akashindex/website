import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  node,
  aws,
  todo,
  netflix,
  rasoi,
  nitkkr,
  cdlogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "IT Undergrad",
    company_name: "NIT Kurukshetra",
    icon: nitkkr,
    iconBg: "#383E56",
    date: "Dec 2020 - Jun 2024",
    points: [
      "Completed my bachelors in technology (B.Tech) fromt he prestigious NIT Kurukshetra.",
      "Pursued the technical journey through the Information Technology stream.",
      "Got to learn about OS, DBMS, CN, Languages, Development and much more throughout the course.",
    ],
  },
  {
    title: "Part Time Frontend Developer",
    company_name: "Concept Dash",
    icon: cdlogo,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jun 2024",
    points: [
      "Joined in as a part time frontend developer to work on the in-house product of the company.",
      "Built the website from scratch workiing on complex designs.",
      "Some of the features includes user authentication, tables, forms, maps, calenders along with inter-dependent functionalities.",
      "Tech Stack: ReactJS, Tailwind CSS, Typescript, NextJS.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Concept Dash",
    icon: cdlogo,
    iconBg: "#383E56",
    date: "Jun 2024 - Present",
    points: [
      "Leading the backend in building a flexible Customer Relationship Management(CRM) web app that provides a complete approach with adjustable adaptability.",
      "Handled deployment, automation, maintenance, and management on AWS for all company softwares.",
      "Tech Stacks and AWS features: NodeJS, NextJS, Tailwind CSS, ReactJS, PostgreSQL, Prisma, AWS Amplify, Elasic Beanstalk, RDS, Codepipeline, S3, EC2 Virtual Servers, automation using Jenkins."
    ],
  }
];

const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
];

const projects = [
  {
    name: "What-To-Do",
    description:
      "What-To-Do is task manager app, which can manage your daily tasks you plan to do, you can update tasks any time and cut them after completion and start over next day. It is built using reactjs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/sagarsehrawat/WhatToDo",
  },
  {
    name: "Netflix Landing Page",
    description:
      "It is a clone of netflix landing page built using reactjs with the purpose of show casing the frontend development skills with extensive use of CSS along with responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/sagarsehrawat/Netflix-Landing-Page-Clone",
  },
  {
    name: "Desi-Rasoi",
    description:
      "A react app consisting of a user interface which shows recipes of cuisines form all over the world filtered according to their timings and full details about the dishes. Data being fetched from external API.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "rest apis",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "prop drilling",
        color: "pink-text-gradient",
      },
    ],
    image: rasoi,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
