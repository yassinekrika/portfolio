import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yassine KRIKA",
  initials: "YK",
  url: "https://yassg4mer.space",
  location: "Jijel, Algeria",
  locationLink: "",
  description:
    "Software Engineer who loves building innovative solutions and empowering others through technology.",
  summary:
    "[Computer science engineer](/#education) specializing in full-stack web development, with expertise in API development using [Node Js and Express Js](/#skills). Skilled in crafting interactive, data-driven dashboards with [Angular and Next Js](/#skills), dedicated to delivering impactful solutions and enhancing user engagement.",
  avatarUrl: "/me.jpeg",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Solidity",
    "HTML5",
    "CSS3",
    "SCSS",
    "Git",
    "Tailwind Css",
    "Angular",
    "React",
    "Next Js",
    "Hardhat",
    "Node Js",
    "Express Js",
    "MySql",
    "Mongodb",
    "Postgresql",
    "Firebase",
    "Oracle",
    "Linux",
    "Github",
    "GCP",
    "Figma",
    "Ui Design",
    "Problem Solving",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yassinekrika2016@gmail.com",
    tel: "+213790703663",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yassinekrika",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yassinekrika",
        icon: Icons.linkedin,
        navbar: true,
      },

      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/yassinekrika_/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "WeeWee Delivery",
      badges: [],
      href: "https://landing.weeweedelivery.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/weewee-logo.svg",
      start: "October 2023",
      end: "Present",
      description:
        `As a web developer in my role, i specialize in crafting interactive and data-driven dashboards using Angular and Firebase. my mission is to transform complex data into intuitive user experiences, leveraging real-time updates for dynamic content. i am dedicated to pushing the boundaries of web development to create impactful solutions that drive results and elevate user engagement, currently i am working on :\n
          , Helping in developing new logistics solution\n
          , Developing web solution for logistics i helped in launching two of our main services this year (Grand Public + WeePicks)
          , Developing the WeeWee dashboard using Angular framework and it's core features
          , Developing the web version of the WeeWee client applications\n
          , Working on developing WeeWee API and leveraging other companies APIs using Node.js and Express.js server with Typescript and Swagger for documentation`,
    },
    {
      company: "Self Employed",
      badges: ["Freelance"],
      href: "/",
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "/freelance.jpeg",
      start: "Jun 2023",
      end: "Present",
      description:
        "Developed and maintained a variety of websites, APIs using Express Js, and applications using React and Next Js according to client needs. Improved performance, security, and user engagement for multiple projects.",
    },
    {
      company: "Private Schools",
      badges: ["Ellabs", "Skill House School"],
      href: "/",
      location: "Remote",
      title: "Course Instructor",
      logoUrl: "/course-instructor.jpeg",
      start: "March 2023",
      end: "Fabrury 2024",
      description: `
      Course instructor at ELLabs teaching the basic fundamental of linux and Git and Github, with 90% students improved in team contribution to projects.
      Course instructor at Skill House in Fullstack web development , teaching basic fundamental of front-end web development Html, Css, JavaSript, as well as back-end using Node Js, Express Js, Mysql, in database.`,
    },
  ],
  education: [
    {
      school: "University of Jijel ",
      href: "http://univ-jijel.dz/",
      degree: "Master's Degree of Computer Forensics and Multimedia",
      logoUrl: "/university-jijel.jpg",
      start: "2022",
      end: "2024",
    },
    {
      school: "University of Jijel",
      href: "http://univ-jijel.dz/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/university-jijel.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "WeeWee Admin Control",
      href: "/",
      dates: "October 2023 - Present",
      active: true,
      description:
        "I developed an admin dashboard using Nebular and Firebase at WeeWee Delivery. The project involved creating a responsive UI for seamless data management and real-time analytics. Firebase was used for data storage, real-time updates, and authentication, ensuring a scalable and user-friendly solution for the company's operational needs.",
      technologies: [
        "Angular",
        "Typescript",
        "Html",
        "Scss",
        "Nebular Ui Library",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://akveo.github.io/nebular/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/akveo/nebular",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/weewee.mp4",
    },
    {
      title: "Blockchain based system for healthcare management",
      href: "/",
      dates: "January 2024 - Jun 2024",
      active: true,
      description:
        "Excited that we have developed a Blockchain-based system for healthcare management on Ethereum platform using both blockchain development technologies and web development technologies, as a tech stack we used Hardhart as a development environment for creating, testing, deploying Solidity smart contract and Next Js for frontend of the application, paving the way for innovative solutions in the industry.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Solidity",
        "HardHat",
        "Remix",
        "Shadcn Ui",
      ],
      links: [],
      image: "",
      video: "/video/web3.mp4",
    },
    {
      title: "Image To Base64 Plus",
      href: "https://www.imagetobase64-plus.com/",
      dates: "August 2023",
      active: true,
      description:
        "Designed, developed a web tools that contains a collection of handy web tools that can simplify various tasks for you. Below, you'll find information about each tool and how to use them..",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Html",
        "Css",
        "JavaScript",
      ],
      links: [
        {
          type: "Figma",
          href:
            "https://www.figma.com/design/UyTe8OBlIbN2209VPdrjEv/Blogger-Tool?m=auto&t=RroTdGHXFZavE3u1-6",
          icon: <Icons.figma className="size-3" />,
        },
        {
          type: "Website",
          href: "https://www.imagetobase64-plus.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yassg4mer/Web-Tools",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/web-tools.mp4",
    },
    {
      title: "Summarize Articles OpenAI GPT 4",
      href: "https://main--vermillion-praline-4b0207.netlify.app/",
      dates: "Jun 2023",
      active: true,
      description:
        "Siplify your reading with Summzie, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
      technologies: [
        "React",
        "Vite",
        "Html",
        "Css",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://main--vermillion-praline-4b0207.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yassinekrika/ai-summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/summarizer.mp4",
    },
    {
      title: "Ecommerce Website Design",
      href: "https://ecommerce-three-tan.vercel.app/",
      dates: "Jun 2023",
      active: true,
      description: "Design, developed a ecommerce website clone",
      technologies: [
        "Next.js",
        "JavaScript",
        "Html",
        "Css",
        "Prisma",
        "MySql",
      ],
      links: [
        {
          type: "Figma",
          href:
            "https://www.figma.com/design/KXcFnAHMNCdZlfMAxZPIjV/e-commerce-wesite?m=auto&t=RroTdGHXFZavE3u1-6",
          icon: <Icons.figma className="size-3" />,
        },
        {
          type: "Website",
          href: "https://ecommerce-three-tan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yassinekrika/ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/ecommerce.mp4",
    },
    {
      title: "International Space Station Tracker 3D",
      href: "/",
      dates: "October 2022",
      active: true,
      description:
        "We developed an open-source online application that tracks the space station and accurately represents the Earth, the orbit of the station, and the station itself in three dimensions.",
      technologies: [
        "Web Pack",
        "JavaScript",
        "Html",
        "Css",
        "Three.Js",
      ],
      links: [
        {
          type: "Youtube",
          href: "https://www.youtube.com/watch?v=i2-8PUHjtaU",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yassinekrika/iss-nasa-track",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video/nasa.mp4",
    },
    {
      title: "KYO UI Design",
      href: "/",
      dates: "October 2022",
      active: true,
      description:
        "We developed an Android application and a chrome extension powered with Chat gpt Api to response automatically for emails and a voice chatbot to let users ineract with the Ai.",
      technologies: [
        "Flutter",
        "Html",
        "Css",
        "JavaScript",
        "Chrome Extension",
        "Figma",
      ],
      links: [
        {
          type: "Figma",
          href:
            "https://www.figma.com/design/q9oAiowFNE29ml6r3M7664/junction-app?m=auto&t=RroTdGHXFZavE3u1-6",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "",
      video: "/video/junction.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackWave Hackathon",
      dates: "September, 2023",
      location: "Alger, Algeria",
      description: `
          We developed a school management dashboard that manages student and courses they take also a calendar management.`,
      image: "/hackwave-hackathon.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yassinekrika/hack-wave-dashboard",
        },
      ],
    },
    {
      title: "Junction Algeria Hackathon",
      dates: "March, 2023",
      location: "Alger, Algeria",
      description: `
          We developed an Android application and a chrome extension powered with Chat gpt Api to response automatically for emails and a voice chatbot to let users ineract with the Ai.`,
      image: "/junction-hackathon.png",
      links: [
        {
          title: "Figma",
          icon: <Icons.figma className="h-4 w-4" />,
          href:
            "https://www.figma.com/design/q9oAiowFNE29ml6r3M7664/junction-app?m=auto&t=RroTdGHXFZavE3u1-6",
        },
      ],
    },
    {
      title: "Nasa Space App Challenge Hackathon ",
      dates: "October, 2022",
      location: "Alger, Algeria",
      description: `
          We developed an open-source online application that tracks the space station and accurately represents the Earth, the orbit of the station, and the station itself in three dimensions.`,
      image: "/nasa-hackathon.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/yassinekrika/iss-nasa-track",
        },
      ],
    },
  ],
} as const;
