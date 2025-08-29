import { BackendCubeCanvas, CloudPyramidCanvas, FrontendPrismCanvas, MSPOctagonCanvas } from "../components/canvas"

import {
  csorc,
  pitchPlease,
  mediaan,
  cegeka,
  madict,
  deca,

  skillseeker,
  peterKraus,
  C_Right_Side,
  API_Back_Side,
  Java_left_Side,
  NET_Core_Front_Side,
  Python_Bottom_Side,
  Spring_Boot_Top_Side,
  StockTracker_Thumbnail,
  Portfolio_Thumbnail,
  Workout_App,
  Server_Room_Cleanup,

  linkedIn,
  github,
  Download,

  solid_principles,

  Angular,
  Azure,
  AzureBlobStorage,
  AzureFunctions,
  Blender,
  Csharp,
  Java,
  Python,
  React,
  ThreeJS,
  Vue,
  AzureContainerApps,
  Teamwork,
  SpringBoot,
  Flutter,
  GCP,
  Firebase,
  Gemini
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
    object: BackendCubeCanvas,
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
    object: CloudPyramidCanvas,
  },
  {
    title: "Service Provider",
    object: MSPOctagonCanvas,
  }
]

const experiences = [
  {
    title: "Backend Software Developer",
    company_name: "Cegeka | School Collaboration Project",
    icon: cegeka,
    iconBg: "#FFFFFF",
    date: "October 2023 - December 2023",
    points: [
      "Developing the CSORC backend in Java Spring Boot.",
      "Creating a user-friendly interface using Vue.js.",
      "Applying Agile principles for a streamlined development process.",
    ],
  },
  {
    title: "Software Developer | Cloud Architect",
    company_name: "Mediaan | Internship",
    icon: mediaan,
    iconBg: "#FFFFFF",
    date: "February 2024 - June 2024",
    points: [
      "Developing the SkillSeeker backend using Java Spring Boot.",
      "Allowing SkillSeeker to be used around the world by setting up an Azure Cloud Infrastructure.",
      "Creating pipelines for seamless deployment to the cloud.",
      "Leading a team of developers and meeting with customers to deliver the best possible result."
    ],
  },
  {
    title: "IT System Engineer",
    company_name: "MaDict",
    icon: madict,
    iconBg: "#FFFFFF",
    date: "July 2024 - Februari 2025",
    points: [
      "Configuring and maintaining network infrastructure using Fortinet firewalls and a variety of switches.",
      "Setting up O365 tenants for clients and solving a wide variety of Office related issues.",
      "Creating and maintaining Windows Servers for medium and small businesses.",
      "Using a wide variety of MSP tools to provide the customer with the best IT experience."
    ],
  },
    {
    title: "Fullstack Developer and Systems Admin",
    company_name: "DECA",
    icon: deca,
    iconBg: "#1a3d8f",
    date: "March 2025 - August 2025",
    points: [
      "Developed a Machine Learning algorithm using Constraint Programming to automate and optimize the production planning.",
      "Creating full stack internal applications to improve operational efficiency.",
      "Administrating the local servers and firewall and maintaing infrastructure.",
    ],
  }
];

const projects = [
    {
    name: "LLM powered workout app",
    description:
      "As a gym enthusiast I started a small project to make it easier for me to track my meals and workouts. \n However my mind started racing and this quickly became a full LLM powered project using Google Cloud Functions/Tasks and the Gemini API.",
    skills: [
      {
        name: "Flutter",
        url: Flutter,
      },
      {
        name: "Firebase",
        url: Firebase,
      },
      {
        name: "Google Cloud",
        url: GCP,
      },
      {
        name: "Gemini",
        url: Gemini,
      },
    ],
    image: Workout_App,
    link: false,
    download: false,
  },
  {
    name: "Server Room Restructure",
    description:
      "I am extremely proud of the restructuring job I did on 2 serverrooms that had been neglected for over 10 years, so I wanted to share it as a project.",
    skills: [
    ],
    image: Server_Room_Cleanup,
    link: false,
    download: false,
  },
  {
    name: "StockTracker",
    description:
      "Combining my knowledge of Python and Azure Functions I designed my own newsletter that keeps track of the most popular stocks on Reddit. \n Click the download button to see the inner workings.",
    skills: [
      {
        name: "Python",
        url: Python,
      },
      {
        name: "Azure",
        url: Azure,
      },
      {
        name: "AzureFunctions",
        url: AzureFunctions,
      },
      {
        name: "AzureBlobStorage",
        url: AzureBlobStorage,
      },
    ],
    image: StockTracker_Thumbnail,
    imageLink: Download,
    link: true,
    download: true,
    imageColor: "download",
    downloadFile: "StockTracker_Documentation.pdf"
  },
  {
    name: "Portfolio Website",
    description:
      "I wanted to create a unique portfolio that stands out, to achieve this I decided to learn blender and React-Three-Fiber from scratch. \n Check out the code and an in depth overview of my Three.js journey on the github page.",
    skills: [
      {
        name: "React",
        url: React
      },
      {
        name: "Three.js",
        url: ThreeJS
      },
      {
        name: "Blender",
        url: Blender
      }
    ],
    image: Portfolio_Thumbnail,
    source_code_link: "https://github.com/SamuelW2002/Portfolio2",
    link: true,
    imageLink: github,
    imageColor: "github"
  },
  {
    name: "SkillSeeker",
    description:
      "During my internship we used a graph database and Dijkstra's Algorithm to create an advanced filtering system that allows better employee selection for projects. \n For my thesis I studied all the different ways to utilize a database in the cloud and find the optimal solution for SkillSeeker. Click the download button below to read my thesis.",
    skills: [
      {
        name: "Angular",
        url: Angular,
      },
      {
        name: "Azure",
        url: Azure,
      },
      {
        name: "Spring Boot",
        url: SpringBoot,
      },
      {
        name: "Azure Container Apps",
        url: AzureContainerApps,
      }
    ],
    image: skillseeker,
    imageLink: Download,
    link: true,
    download: true,
    imageColor: "download",
    downloadFile: "Eindwerk_Wouters_Samuel.docx"
  },
  {
    name: "SOLID principles in .NET",
    description:
      "Designing maintainable and understandable code is very important to me so I made a small console project in .NET highlighting SOLID principles and a Layered Architecture. On the github page you can find an description of why I implemented certain design choices.",
    skills: [
      {
        name: ".NET",
        url: Csharp,
      }
    ],
    image: solid_principles,
    source_code_link: "https://github.com/SamuelW2002/RestaurantReservationApp",
    imageLink: github,
    link: true,
    imageColor: "github"
  },
  {
    name: "CSOR²C Portal",
    description:
      "Together with my team and mentors at Cegeka we developed a single pane of glass application where we integrated multiple services in single application. These integrations included technology like Entra ID (Azure Active Directory) and PowerBI.",
    skills: [
      {
        name: "java",
        url: Java,
      },
      {
        name: "vue",
        url: Vue,
      },
      {
        name: "Spring Boot",
        url: SpringBoot,
      }
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
      "With the help of my team I won the Cegeka Pitch Please Hackathon where we learned how to quickly come up with a solution for a problem and pitch it.\n\nClick the LinkedIn symbol in the bottom right to view the video 😀",
    skills: [
      {
        name: "Teamwork",
        url: Teamwork,
      }
    ],
    image: pitchPlease,
    source_code_link: "https://www.linkedin.com/search/results/content/?keywords=cegeka%20pitch%20please&sid=kFZ&update=urn%3Ali%3Afs_updateV2%3A(urn%3Ali%3Aactivity%3A7157688163765731328%2CBLENDED_SEARCH_FEED%2CEMPTY%2CDEFAULT%2Cfalse)",
    link: true,
    imageLink: linkedIn,
    imageColor: "linkedIn"
  },
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

export { skillsModelsThreeJS, skillsModelsFromBlender, backendTechnologies, experiences, testimonials, projects };
