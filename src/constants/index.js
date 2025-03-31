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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node js Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SS ITS Solutions",
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEgOKxgZJMlFQ/company-logo_200_200/company-logo_200_200/0/1722495340837/ss_it_solutions555_logo?e=1748476800&v=beta&t=pW7NnDpKoBQLiQYrm-Ab2FB7KcR3vDgAHufdidEjH60",
    iconBg: "#383E56",
    date: "May 2024 - Persent",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "DWS Digital Solutions",
    icon: "https://www.digitalwebsolutions.com/wp-content/uploads/2018/03/favicon-1.png",
    iconBg: "#E6DEDD",
    date: "Aug 2023 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company_name: "SDK ITS Solutions",
    icon: "https://www.itssolutions.in/assets/img/sdk.png",
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Hotel Wild osis",
    description:
      "The Wild Oasis is a serene hotel offering luxurious accommodations surrounded by nature, featuring stunning views, modern amenities, and a tranquil atmosphere for relaxation and adventure.",
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
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQGkJhKXLqa1pg/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1730121151425?e=1743872400&v=beta&t=VQjSCotQHOqWTvD15Qrv4bdPKkjuzp69qBUReddy_gA",
    source_code_link: "https://katariad.github.io",
  },
  {
    name: "Perfect Dry",
    description:
      "its react based home landing page with responsive and reddish design.",
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
    image:
      "https://media.licdn.com/dms/image/v2/D4D2DAQFREnmcjFKurw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1694670842988?e=1743872400&v=beta&t=MMT1P3d2LSJP0fxBGW3y3yDde8dFvnuI3eqafw6oHsU",
    source_code_link: "https://katariad.github.io",
  },
  {
    name: "TextWorld-Text manipulating Web based application",
    description:
      "textworld is react based application which provide user to manipulate text with some excisting feature.",
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
    image:
      "https://media.licdn.com/dms/image/v2/D4E2DAQFqVe_Fu-onXQ/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1686845144914?e=1743872400&v=beta&t=taTLMcpNNCfTszp5hqaDPu1gBG0g6zVlTo_j_M9MSdY",
    source_code_link: "https://katariad.github.io",
  },
];

export { services, technologies, experiences, testimonials, projects };
