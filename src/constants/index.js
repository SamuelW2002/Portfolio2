import {
  fitness,
  backend,
  gamer,
  web,
  java,
  c,
  sql,
  angular,
  vue,
  javascript,
  html,
  css,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mcdonalds,
  donutello,
  sparkx,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fitness Enthousiast",
    icon: fitness,
  },
  {
    title: "Gamer",
    icon: gamer,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: c,
  },
  {
    name: "SQL",
    icon: sql,
  },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
];

const experiences = [
  {
    title: "Kitchen help",
    company_name: "McDonald's",
    icon: mcdonalds,
    iconBg: "#ea0000",
    date: "July 2021 - August 2021",
    points: [
      "Preparing food and assembling orders.",
      "Handling transactions.",
      "Cleaning the lobby.",
      "Operating the drive-thru.",
    ],
  },
  {
    title: "Salesman",
    company_name: "Donutello",
    icon: donutello,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Preparing donuts, waffles and milkshakes.",
      "Handling transactions.",
      "Making sure the costumers have a pleasent experience.",
    ],
  },
  {
    title: "Kitchen help",
    company_name: "McDonald's",
    icon: mcdonalds,
    iconBg: "#ea0000",
    date: "July 2022 - August 2022",
    points: [
      "Preparing food and assembling orders.",
      "Handling transactions.",
      "Cleaning the lobby.",
      "Operating the drive-thru.",
    ],
  },
  {
    title: "Entertainer",
    company_name: "Sparkx",
    icon: sparkx,
    iconBg: "#003249",
    date: "July 2023 - August 2023",
    points: [
      "Entertaining costumers and maintaining a happy atmosphere.",
      "Starting, maintaining and shutting down various entertainment machines.",
      "Supporting customers when help is needed.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
