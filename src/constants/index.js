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
  mongodb,
  docker,
  mcdonalds,
  donutello,
  sparkx,
  threejs,
  csorc,
  pitchPlease,
  linkedIn,
  github,
  B120,
  S150,
  bungeeJump
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
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
];

const projects = [
  {
    name: "CSOR²C Portal",
    description:
      "Together with my team we developed a single pane of glass application for Cegeka where we integrated multiple services in single application. These integrations included technology like Entra ID (Azure Active Directory) and PowerBI.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
    ],
    image: csorc,
    //source_code_link: "https://github.com/",
    //imageLink: github,
    link: false,
    //imageColor: "github"
  },
  {
    name: "Pitch Please Hackathon",
    description:
      "With the help of my team I won the Cegeka Pitch Please Hackathon where we learned how to quickly come up with a solution for a problem and pitch it.\n\nClick the LinkedIn symbol in the top right to view the video 😀",
    tags: [
    ],
    image: pitchPlease,
    source_code_link: "https://www.linkedin.com/search/results/content/?keywords=cegeka%20pitch%20please&sid=kFZ&update=urn%3Ali%3Afs_updateV2%3A(urn%3Ali%3Aactivity%3A7157688163765731328%2CBLENDED_SEARCH_FEED%2CEMPTY%2CDEFAULT%2Cfalse)",
    link: true,
    imageLink: linkedIn,
    imageColor: "linkedIn"
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

const achievements = [
  {
    name: "Almost benching 120 kg",
    video: B120
  },
  {
    name: "Squatting 150 kg",
    video: S150
  },
  {
    name: "Overcomming my fear of heights",
    video: bungeeJump
  }
]

export { services, technologies, experiences, testimonials, projects, achievements };
