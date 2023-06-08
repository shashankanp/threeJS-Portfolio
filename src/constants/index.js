import {
  mobile,
  backend,
  creator,
  web,
  kaamik,
  bhive,
  nte,
  sentinal,
  fullstack,
  ananya,
  jobportal,
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
    title: "React Native Developer (Expo)",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Service",
    icon: creator,
  },
];

const experiences = [
  {
    title: "FullStack Dev Intern",
    company_name: "BHive",
    icon: bhive,
    iconBg: "white",
    date: "March 2023 - Present",
    points: [
      "Engineered a comprehensive full-stack web application utilizing NextJS, MongoDB, and TailwindCSS, coupled with a secure authentication layer from Firebase",
      "Spearheaded the development of a highly efficient mobile application built on React Expo, MongoDB, and TailwindCSS, prioritizing user experience and retention through reliable authentication mechanisms",
      "Initiated a company-wide project aimed at monitoring and measuring tasks completed and time expended by each team member",
    ],
  },
  {
    title: "Software Intern",
    company_name: "Kaamik",
    icon: kaamik,
    iconBg: "#383E56",
    date: " 2021 -  2022",
    points: [
      "Conceptualized and built the Kaamik Website, successfully showcasing over 300 unique SKUs",
      "Developed 'The Silent Entrepreneurs' Podcast Website, incorporating contemporary styling for enhanced user experience",
      "Contributed significantly to AR projects, crafting 3D models of real-world objects, with capabilities to scale, position, animate, and interchange between models, aiding in the construction of the Kaamik Metaverse POC",
      "Ventured into Digital Marketing and Content Creation, enhancing the brand's online presence and engagement",
    ],
  },
  {
    title: "Technical Consultant",
    company_name: "Not The End (NGO - USA)",
    icon: nte,
    iconBg: "white",
    date: "2021 -  Present",
    points: [
      "Developed a comprehensive website from scratch, utilizing HTML, CSS, JS, and Bootstrap for seamless user experience",
      "The website is currently being utilized by a diverse user base including professionals, parents, and students",
      "Established the benchmarks for the brand design, reflecting consistency and uniqueness across various platforms",
    ],
  },
  {
    title: "Hackathon Organizer",
    company_name: "KSIT",
    icon: sentinal,
    iconBg: "#383E56",
    date: "2022 & 2023 ",
    points: [
      "Served as a Hackathon Organizer for Sentinal Hack 3.0 during 2022 and 2023, overseeing crucial technical components",
      "Managed the infrastructure, ensuring smooth operations and consistent availability throughout the event",
      "Demonstrated creative skills by designing the event posters, enhancing visual appeal and brand recognition",
      "Created engaging digital content for the hackathon, boosting participation and user interaction",
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
    name: "Full Stack Web App",
    description:
      "A comprehensive full-stack web application utilizing NextJS, MongoDB, and TailwindCSS, coupled with authentication  from Firebase",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
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
    image: fullstack,
    source_code_link: "https://github.com/shashankanp/Next13-Bhive_Task",
    live_page_link: "https://next13-bhive-task-v1.vercel.app/",
  },
  {
    name: "Ananya Website",
    description:
      "A fast and fully responsive website which was used for introducing and showcasing our college fest. Built using NextJS .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: ananya,
    source_code_link: "https://github.com/shashankanp/ananya2k23_shash",
    live_page_link: "https://ananya2k23-shash.vercel.app/",
  },
  {
    name: "Job Portal",
    description:
      "A complete job portal app having multiple features which is responsive and has real time information for searching and applying to, built using Expo.",
    tags: [
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobportal,
    source_code_link:
      "https://github.com/shashankanp/React_Expo-Job_Portal_App",
    live_page_link: "https://github.com/shashankanp/React_Expo-Job_Portal_App",
  },
];

export { services, technologies, experiences, testimonials, projects };
