export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'current' | 'completed';
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface FeedItem {
  id: string;
  type: 'certificate' | 'linkedin';
  title: string;
  content: string;
  timeAgo: string;
  badge?: string;
  sourceUrl?: string;
  imageUrl?: string;
  likes?: number;
  comments?: number;
  author?: {
    name: string;
    headline: string;
    avatar?: string;
    connection?: string;
  };
}

export interface ArticleItem {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  snippet: string;
}

export interface ProcessItem {
  num: string;
  phase: string;
  name: string;
  description: string;
  meta: string;
}

export const portfolioData = {
  profile: {
    firstName: "Aniket",
    lastName: "Singh",
    role: "Software Engineer & Full-Stack Developer",
    tagline: "Innovative and detail-oriented Software Engineer with hands-on experience in Java, Python, and MERN stack development.",
    careerSummary: "Innovative and detail-oriented Software Engineer with hands-on experience in Java, Python, and MERN stack development. Strong understanding of OOPs, and System Design with a passion for building scalable, high-performance backend systems. Adept at designing RESTful APIs, optimizing databases.",
    phone: "+91 (947) 323 6395",
    location: "Odisha / Bihar, India",
    email: "aniket.singh07vs@gmail.com",
    timezone: "UTC+05:30 · Open to engineering opportunities & freelance",
    yearsExperience: "2+",
    resumePdfUrl: "/Aniket_Singh_Resume.pdf",
    githubUrl: "https://github.com/sin-07",
    linkedinUrl: "https://linkedin.com/in/aniket-singhh"
  },
  socials: [
    { name: "Github", url: "https://github.com/sin-07", icon: "github" as const },
    { name: "Linkedin", url: "https://linkedin.com/in/aniket-singhh", icon: "linkedin" as const },
    { name: "Email", url: "mailto:aniket.singh07vs@gmail.com", icon: "email" as const },
  ],
  skills: {
    frontend: "React.js  /  JavaScript (ES6+)  /  HTML5 & CSS3  /  Dynamic UI/UX  /  Responsive Web Design  /  State Management  /  Component Architecture",
    backend: "Node.js  /  Express.js  /  Java  /  Python  /  RESTful APIs  /  System Design  /  OOPs Architecture  /  JWT Authentication  /  Yahoo Finance API",
    styles: "Tailwind CSS  /  CSS3 Modern Flex & Grid  /  Responsive Layouts  /  Interactive UI Animations  /  Micro-interactions",
    also: "MongoDB & Cloudinary Integration  /  Database Optimization & Indexing  /  Ubuntu (Linux)  /  Visual Studio Code & Eclipse  /  Git & GitHub Version Control"
  },
  languages: [
    { language: "English", level: "professional / fluent", flag: "🇺🇸" }
  ],
  projects: [
    {
      id: "tradexpert",
      title: "TradeXpert — Multi-Asset Trading Platform",
      subtitle: "Full-Stack Trading Engine",
      description: "Developed a multi-asset trading platform supporting Indian, US, and cryptocurrency markets. Integrated Yahoo Finance API to fetch real-time stock data, live prices, and market analytics with buy/sell order functionality and portfolio tracking.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Yahoo Finance API", "JWT Authentication"],
      githubUrl: "https://github.com/sin-07",
      liveUrl: "https://github.com/sin-07",
      featured: true
    },
    {
      id: "rental-car",
      title: "Rental Car Booking & Fleet Management",
      subtitle: "Full-Stack Vehicle Platform",
      description: "Implemented vehicle listing with pickup/return locations, date & time selection, and real-time availability check. Built an authenticated admin panel to add, update, and remove cars, view bookings, and manage users.",
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Cloudinary", "RESTful API", "JWT Authentication"],
      githubUrl: "https://github.com/sin-07",
      liveUrl: "https://github.com/sin-07",
      featured: true
    },
    {
      id: "raven-tutorials",
      title: "Raven Tutorials — Institute Management",
      subtitle: "MERN Administrative Portal",
      description: "Engineered a full-stack MERN application to digitize student management and marketing for Raven Tutorials institute. Created secure admin dashboard for student records, attendance, and dynamic React student portal for course materials.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "RESTful API", "JavaScript"],
      githubUrl: "https://github.com/sin-07",
      featured: true
    },
    {
      id: "backend-system-design",
      title: "High-Performance Backend & RESTful APIs",
      subtitle: "Scalable Microservices & OOPs",
      description: "Engineered high-performance backend systems utilizing OOPs principles in Java and Python. Designed robust RESTful APIs, optimized MongoDB schemas and indexing, and implemented secure JWT-based authentication pipelines.",
      technologies: ["Java", "Python", "Node.js", "MongoDB", "OOPs", "System Design", "RESTful APIs"],
      githubUrl: "https://github.com/sin-07",
      featured: true
    }
  ],
  processes: [
    {
      num: "01",
      phase: "Architecture",
      name: "System Design & Schemas",
      description: "Analyze business constraints, design normalized/optimized MongoDB database schemas, and map out scalable RESTful API endpoints before writing production code.",
      meta: "OOPs Principles · System Design · Database Schema"
    },
    {
      num: "02",
      phase: "Backend",
      name: "RESTful APIs & Security",
      description: "Implement secure server controllers with Node.js/Express or Java/Python, enforcing JWT authentication, input validation, and optimized query indexing.",
      meta: "Node.js · Express.js · JWT · RESTful APIs"
    },
    {
      num: "03",
      phase: "Frontend",
      name: "Dynamic React.js UI/UX",
      description: "Craft responsive, component-driven client interfaces in React.js with real-time state synchronization, clean error boundaries, and accessible interactions.",
      meta: "React.js · Responsive UI · State Management · Cloudinary"
    },
    {
      num: "04",
      phase: "Deployment",
      name: "Optimization & CI/CD",
      description: "Deploy and optimize full-stack applications with environment security, media management via Cloudinary, and Git-driven version control.",
      meta: "Ubuntu Linux · Git & GitHub · Production Testing"
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "ITER, Siksha 'O' Anusandhan University",
      location: "Odisha, India",
      period: "2021 - 2025",
      status: "completed" as const,
      description: "Bachelor of Technology in Computer Science & Engineering. Strong focus on OOPs, System Design, Data Structures, Algorithms, and Full-Stack MERN development.",
      highlights: ["B.Tech CSE", "OOPs & System Design", "Data Structures & Algorithms", "Full-Stack Development"]
    },
    {
      degree: "12th (Senior Secondary)",
      institution: "National High School, BiharSharif",
      location: "Nalanda, Bihar",
      period: "2020",
      status: "completed" as const,
      description: "Completed Senior Secondary examination with a strong mathematical, computing, and analytical foundation.",
      highlights: ["Senior Secondary", "Mathematics & Science", "Academic Excellence"]
    },
    {
      degree: "10th (Secondary)",
      institution: "Himalyan Residential School",
      location: "Patna, Bihar",
      period: "2017",
      status: "completed" as const,
      description: "Completed secondary education with distinction in core sciences and foundational computing.",
      highlights: ["Secondary School", "Distinction in Science & Math", "Foundational Computing"]
    }
  ],
  experience: [
    {
      role: "Web Developer (Freelance)",
      company: "Raven Tutorials",
      location: "Remote / India",
      period: "Jan 2024 – Oct 2024",
      description: "Engineered a full-stack MERN application to digitize student management and marketing for the institute, improving administrative efficiency.",
      responsibilities: [
        "Developed a secure admin dashboard for staff to manage student records, track attendance, and update course information seamlessly.",
        "Built a dynamic student portal using React.js to access course materials, view grades, and communicate with instructors.",
        "Designed and implemented a RESTful API with Node.js and Express.js to ensure robust data handling between the front-end and MongoDB database.",
        "Integrated Cloudinary for media assets and course materials with optimized delivery pipelines."
      ],
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Cloudinary", "RESTful API", "JavaScript"]
    }
  ],
  feed: [
    {
      id: "cert-btech",
      type: "certificate" as const,
      timeAgo: "2021 - 2025",
      title: "B.Tech Degree in Computer Science & Engineering — ITER, Siksha 'O' Anusandhan",
      content: "Bachelor of Technology in Computer Science & Engineering. Strong academic and practical foundation in OOPs, System Design, Data Structures, Algorithms, and Full-Stack MERN development.",
      badge: "iter.ac.in",
      sourceUrl: "https://github.com/sin-07",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "linkedin-tradexpert",
      type: "linkedin" as const,
      author: {
        name: "Aniket Singh",
        headline: "Software Engineer | Java, Python & MERN Stack",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        connection: "1st"
      },
      timeAgo: "Recent",
      title: "Building TradeXpert: Real-time Multi-Asset Trading Platform 📈🚀",
      content: "Thrilled to share my latest full-stack project — TradeXpert! 📊\n\nI built a multi-asset trading platform supporting Indian, US, and cryptocurrency markets. By integrating the Yahoo Finance API, users get real-time stock data, interactive market analytics, and instant buy/sell order tracking with complete portfolio valuation.\n\nKey architectural pillars:\n🔹 Real-time price aggregation via Yahoo Finance API\n🔹 Secure authentication & portfolio persistence using JWT and MongoDB\n🔹 High-performance React.js responsive interface",
      likes: 142,
      comments: 19
    },
    {
      id: "linkedin-raven-tutorials",
      type: "linkedin" as const,
      author: {
        name: "Aniket Singh",
        headline: "Software Engineer | Java, Python & MERN Stack",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        connection: "1st"
      },
      timeAgo: "2mo",
      title: "Digitizing Institute Operations with MERN Stack at Raven Tutorials 🎓",
      content: "During my freelance work with Raven Tutorials, I led the full-stack engineering of their student management and marketing platform.\n\nFrom building a secure staff dashboard to a real-time student portal for course materials and grades, this project strengthened my expertise in RESTful API architecture, MongoDB database optimization, and Cloudinary asset management.",
      likes: 198,
      comments: 24
    },
    {
      id: "linkedin-car-rental",
      type: "linkedin" as const,
      author: {
        name: "Aniket Singh",
        headline: "Software Engineer | Java, Python & MERN Stack",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        connection: "1st"
      },
      timeAgo: "5mo",
      title: "Vehicle Booking & Fleet Management Architecture 🚗",
      content: "Engineered a Rental Car Web Platform featuring real-time availability scheduling, location-based pickup/return algorithms, and an intuitive admin management portal for vehicle fleets.\n\nFocused on clean architecture, JWT security, and responsive UI performance.",
      likes: 175,
      comments: 14
    }
  ],
  articles: [
    {
      title: "Building Real-Time Multi-Asset Trading Systems with React & Node.js",
      date: "Oct 2025",
      readTime: "6 min read",
      tags: ["React.js", "Node.js", "Finance API", "MongoDB"],
      snippet: "Architecture breakdown of integrating financial APIs, handling live market ticks, and building responsive portfolio trackers."
    },
    {
      title: "Designing Robust RESTful APIs & Optimized MongoDB Schemas",
      date: "Aug 2025",
      readTime: "7 min read",
      tags: ["Node.js", "Express.js", "MongoDB", "System Design"],
      snippet: "Best practices for schema design, indexing strategies, authentication layers, and scalable controllers."
    },
    {
      title: "Object-Oriented Programming & System Design Fundamentals in Java & Python",
      date: "May 2025",
      readTime: "5 min read",
      tags: ["Java", "Python", "OOPs", "System Design"],
      snippet: "Core design patterns, inheritance vs composition, and writing modular, high-performance backend systems."
    }
  ],
  footer: {
    years: "2021 - 2026",
    handcrafted: "Handcrafted by Aniket Singh /",
    designedBy: "Full-Stack Engineer /",
    poweredBy: "Next.js & MongoDB"
  }
};
