const mobile = '/assets/mobile.png'
const backend = '/assets/backend.png'
const creator = '/assets/creator.png'
const web = '/assets/web.png'
const javascript = '/assets/tech/javascript.png'
const typescript = '/assets/tech/typescript.png'
const html = '/assets/tech/html.png'
const css = '/assets/tech/css.png'
const reactjs = '/assets/tech/reactjs.png'
const redux = '/assets/tech/redux.png'
const tailwind = '/assets/tech/tailwind.png'
const nodejs = '/assets/tech/nodejs.png'
const mongodb = '/assets/tech/mongodb.png'
const git = '/assets/tech/git.png'
const figma = '/assets/tech/figma.png'
const docker = '/assets/tech/docker.png'
const kodingnext = '/assets/company/Kodingnext.png'
const blank = '/assets/company/blank.png'
const baone = '/assets/ba-one.png'
const threejs = '/assets/tech/threejs.svg'

export const USER_NAME = 'Martin';
export const USER_EXPERIENCE = 6;
export const USER_DOMAIN = `localhost:3000`;

export const GITHUB_LINK = 'https://github.com/m001108'
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/m001108'
export const TWITTER_LINK = 'https://twitter.com/'
export const FACEBOOK_LINK = 'https://www.facebook.com/m001108';
export const INSTAGRAM_LINK = 'https://www.instagram.com/rodrigoalis001/';

export const navLinks = [
  // {
  //   id: "home",
  //   title: "Home",
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "blog",
    title: "Blog",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN stack Developer",
    company_name: "ZelaSoftware Co Ltd",
    icon: blank,
    iconBg: "#383E56",
    date: "June 2019 - Mar 2021",
    points: [
      "I've grown my skills with many projects.",
      "Code using HTML, SCSS, and ReactJS to develop reusable component features for mobile responsive and desktop. ",
      "Followed SDLC best practices within an Agile environment to produce rapid iterations for clients.",
    ],
  },
  {
    title: "Senior Fullstack Developer",
    company_name: "ZelaSoftware Co Ltd",
    icon: blank,
    iconBg: "#383E56",
    date: "Apr 2021 - Present",
    points: [
      "I have been working there as a Full Stack developer and have developed several Full Stack Solutions using C#, .NET Core, .NET Framework, ASP.NET MVC, Blazor, SQL Database, Entity Framework, CI/CD Pipelines, React js, Azure, AWS, JavaScript, Bootstrap, jQuery, Entity framework, React Native, Microservices, etc.",
    ],
  },
  {
    title: "Senior .Net Developer",
    company_name: "Freelance",
    icon: kodingnext,
    iconBg: "#383E56",
    date: "August 2022 - June 2023",
    points: [
      "Developed and maintained enterprise-level solution (Human Resource Management Solution) using ASP.NET MVC, C#, and SQL Server.",
      "Integrated Azure services such as Azure Storage and Azure SQL Database for data storage and retrieval.",
      "Implemented authentication and authorization mechanisms using Azure Active Directory and OAuth.",
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
];

const project1 = '/assets/project/1.png'
const project2 = '/assets/project/2.png'
const project3 = '/assets/project/3.png'
const project4 = '/assets/project/4.png'
const project5 = '/assets/project/5.png'
const project6 = '/assets/project/6.png'
const project7 = '/assets/project/7.jpg'
const project8 = '/assets/project/8.png'
const project9 = '/assets/project/9.png'
const project10 = '/assets/project/10.png'
const project11 = '/assets/project/11.png'
const project12 = '/assets/project/12.png'
const project13 = '/assets/project/13.png'
const project14 = '/assets/project/14.jpg'

const projects = [
  {
    name: "Kitchen Visualizer",
    description:
      "This is the project visualizing the kitchen for the users' satisfy",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "violet-text-gradient"
      }
    ],
    image: project1,
    source_code_link: "https://www.fabuwood.com/visualizer/",
  },
  {
    name: "最後の晩餐",
    description:
      "Leonardo da Vinci's 'The Last Supper'. The users thumb up the food or restaurant they taste or visit so that providing the popularity",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://lastsupper.com",
  },
  {
    name: "Website for Bairror",
    description:
      "Responsible for the front end of the mobile app. Backend by top specialist of Lamoda, Yandex, Sber, CTO is ex-CTO of Lamoda and Delivery Club.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://bairro.pt/en",
  },
  {
    name: "Tenzies Lottery Game",
    description:
      "Roll and dice emulation game by PC. I have made this game to have a fun for me and to contribute to all of you. Please have a try.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "Sass",
        color: "violet-text-gradient",
      },
    ],
    image: project14,
    source_code_link: "https://tenzien-game-by-adi.netlify.app/",
  },
  {
    name: "Lever - student loan negotiation app, USA",
    description:
      "App uses the programs the Department of Education USA offers to give you federal loan repayment plans that will get you debt free smarter and faster",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      }
    ],
    image: project5,
    source_code_link: "https://white-digital.com/lever",
  },
  {
    name: "Online Food ordering App",
    description:
      "Fimeal is a Polish online food ordering and delivery platform. The challenging issue was to synchronizing the website and mobile application.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      }
    ],
    image: project6,
    source_code_link: "https://fimeal.com/",
  },
  {
    name: "GPS Bus Tracking System",
    description:
      "I have expertise in creating Vehicle management system from scratch using .net and php. Developed a GPS tracker for school bus tracking system.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "GPS tracker",
        color: "blue-text-gradient",
      },
      {
        name: "Server API",
        color: "orange-text-gradient",
      }
    ],
    image: project7,
    source_code_link: "http://ontracksystem.in",
  },
  {
    name: "Website Design and Development",
    description:
      "My client hired me to design and develop this website from scratch. I have used the Elementor page builder to complete this website.",
    tags: [
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "orange-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://digitaledgemedia.ca/",
  },
  {
    name: "IDEX Enterprise innovation & project management",
    description:
      "It Engage your entire workforce in ideation. Break down barriers in department, language, or geography.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
      {
        name: "Express",
        color: "violet-text-gradient",
      }
    ],
    image: project13,
    source_code_link: "https://idexinnovation.com/",
  },
  {
    name: "Responsive Design for Bapassociates",
    description:
      "The client was looking for a new design that better represented their brand and to give them a cleaner more professional online presence.",
    tags: [
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "orange-text-gradient",
      }
    ],
    image: project9,
    source_code_link: "https://bapassociates.com/",
  },
  {
    name: "Auto Parts Way",
    description:
      "At Auto Parts WAY Canada, it is our goal to provide you discount auto parts and auto accessories fast. I was responsible for login and register page. This can help make sense of ASP.NET.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient"
      }
    ],
    image: project4,
    source_code_link: "https://www.autopartsway.ca/secure/register.cfm",
  },
  {
    name: "WordPress Divi with API and AI Integration",
    description:
      "Created a Divi-based website for a Business Consulting company with API and AI Integration.",
    tags: [
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "orange-text-gradient",
      }
    ],
    image: project10,
    source_code_link: "https://gznite.com/",
  },
  {
    name: "Travel Blog website on WordPress",
    description:
      "I have worked on from scratch. The client is a Travelling enthusiastic person so she wanted a website where she can display her travelling blogs.",
    tags: [
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "Google Map",
        color: "pink-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "orange-text-gradient",
      }
    ],
    image: project11,
    source_code_link: "https://travelandstyle.ca/",
  },
  {
    name: "Real estate marketing Wordpress website",
    description:
      "My client hired my to re-design this website from scratch to end using WordPress. During these days, I've attracted to wordpress development.",
    tags: [
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "Plugins Add-in",
        color: "blue-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "orange-text-gradient",
      }
    ],
    image: project12,
    source_code_link: "https://creativeartpartners.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
