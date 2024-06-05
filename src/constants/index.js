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
  bungeeJump,
  mediaan,
  azure,
  azureFunctions,
  skillseeker,
  peterKraus
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
    title: "Fitness Enthusiast",
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
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AzureFunctions",
    icon: azureFunctions,
  }
];

const experiences = [
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
  {
    title: "Software Developer/Cloud Architect",
    company_name: "Mediaan",
    icon: mediaan,
    iconBg: "#FFFFFF",
    date: "Februari 2024 - June 2024",
    points: [
      "Developing a Spring Boot Java backend.",
      "Setting up a Azure cloud infrastructure.",
      "Working with an Agile methodology.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "During his internship, he has properly executed his software development skills and made a positive contribution to our project. Over time, he has also become more open on an interpersonal level, which has benefited his collaboration with colleagues. Although he still has much to learn, I am convinced that with the necessary work experience, he will become a promising software consultant.",
    name: "Peter Kraus",
    designation: "Sales manager",
    company: "Mediaan",
    image: peterKraus,
  },
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
  {
    name: "SkillSeeker",
    description:
      "We used a graph database and Dijkstra's Algorithm to create an advanced filtering system that allows better employee selection for projects.",
    tags: [
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: skillseeker,
    source_code_link: "https://github.com/",
  },
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
