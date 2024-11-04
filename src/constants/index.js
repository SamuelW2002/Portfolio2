import { CubeCanvas, FrontendPrismCanvas, PyramidCanvas } from "../components/canvas"

import {
  csorc,
  pitchPlease,
  linkedIn,
  B120,
  S150,
  bungeeJump,
  mediaan,
  cegeka,
  madict,
  skillseeker,
  peterKraus,
  C_Right_Side,
  API_Back_Side,
  Java_left_Side,
  NET_Core_Front_Side,
  Python_Bottom_Side,
  Spring_Boot_Top_Side
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

const backendTechnologies = [
  {
    name: "Java",
    icon: API_Back_Side,
  },
  {
    name: "C#",
    icon: NET_Core_Front_Side,
  },
  {
    name: "SQL",
    icon: Spring_Boot_Top_Side,
  },
  {
    name: "HTML 5",
    icon: Python_Bottom_Side,
  },
  {
    name: "CSS 3",
    icon: Java_left_Side,
  },
  {
    name: "JavaScript",
    icon: C_Right_Side,
  }
]

const skillsModelsThreeJS = [
  {
    title: "Backend Developer",
    object: CubeCanvas,
    props: { icons: backendTechnologies } 
  }
];

const skillsModelsFromBlender = [
  {
    title: "Web Developer",
    object: FrontendPrismCanvas,
  },
  {
    title: "Cloud Developer",
    object: PyramidCanvas,
  },
  {
    title: "MSP Provider",
    object: PyramidCanvas,
  }
]

const experiences = [
  {
    title: "Backend Software Developer",
    company_name: "Cegeka",
    icon: cegeka,
    iconBg: "#FFFFFF",
    date: "Oktober 2023 - December 2023",
    points: [
      "Developing the CSORC backend in Java Spring Boot",
      "Creating an user friendly interface using Vue.js",
      "Applying Agile principles for a streamlined development process",
    ],
  },
  {
    title: "Software Developer/Cloud Architect",
    company_name: "Mediaan",
    icon: mediaan,
    iconBg: "#FFFFFF",
    date: "Februari 2024 - June 2024",
    points: [
      "Developing the SkillSeeker backend using Java Spring Boot",
      "Allowing SkillSeeker to be used around the world by setting up an Azure Cloud Infrastructure",
      "Creating pipelines for seamless deployment to the cloud",
      "Leading a team of developers and meeting with customers to deliver the best possible result"
    ],
  },
  {
    title: "IT Support Engineer",
    company_name: "MaDict",
    icon: madict,
    iconBg: "#FFFFFF",
    date: "Juli 2024 - Present",
    points: [
      "Configuring and maintaining network infrastructure using Fortinet firewalls and a variety of switches",
      "Setting up O365 tenants for clients and solving a wide variety of Office related issues",
      "Creating and maintaining Windows Servers for medium and small businesses",
      "Using a wide variety of MSP tools to provide the customer with the best IT experience"
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

export { skillsModelsThreeJS, skillsModelsFromBlender, backendTechnologies, experiences, testimonials, projects, achievements };
