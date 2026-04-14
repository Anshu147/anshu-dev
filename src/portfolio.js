/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anshu Vishwakarma",
  title: "Hi all, I'm Anshu",
  subTitle: emoji(
    "A Results-driven Full Stack Developer 🚀 with 1+ year of experience building scalable MERN stack applications, AI-powered solutions, and automation systems. Specialized in RAG-based AI chatbots, real-time communication systems, and SaaS platforms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Anshu147",
  linkedin: "https://www.linkedin.com/in/anshu147/",
  gmail: "anshuv.dev@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER SPECIALIZING IN MERN STACK, AI-POWERED SOLUTIONS & AUTOMATION",
  skills: [
    emoji(
      "⚡ Build production-ready SaaS platforms with RAG-based AI chatbots using LangChain.js, Groq (Llama 3), and Pinecone"
    ),
    emoji(
      "⚡ Develop scalable RESTful APIs with JWT authentication, role-based access control, and real-time chat via Socket.io"
    ),
    emoji(
      "⚡ Automate business workflows using n8n with webhook integrations, API orchestration, and event-driven automation"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KESSC College, University of Mumbai",
      logo: require("./assets/images/mumbai_university.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2021 – 2024",
      desc: "Graduated with a strong academic record from the University of Mumbai.",
      descBullets: [
        "CGPA: 9.1 / 10.0",
        "Specialized in software engineering, web development, and database systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React.js, Tailwind CSS, Redux)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (Node.js, Express.js, REST APIs)",
      progressPercentage: "90%"
    },
    {
      Stack: "AI & Automation (RAG, LangChain, n8n)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Qorex",
      companylogo: require("./assets/images/qorex.png"),
      date: "January 2025 – Present",
      desc: "Building and deploying full-stack SaaS applications and AI-powered platforms for production users.",
      descBullets: [
        "Developed a full-stack SaaS platform using React.js, Node.js, Express.js, and MongoDB at chatbot.qorex.in",
        "Built an AI-powered chatbot builder with RAG pipeline using LangChain.js, Groq (Llama 3), HuggingFace embeddings, and Pinecone vector DB",
        "Architected RESTful APIs with JWT authentication, role-based access control, and real-time chat via Socket.io with streaming AI responses",
        "Integrated document processing pipelines supporting PDF, DOCX, and TXT files with automated text extraction, chunking, and vector embeddings",
        "Automated business workflows using n8n with webhook integrations, reducing manual operations by 40%",
        "Designed analytics dashboards for conversation tracking, performance metrics, and data visualization"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PRODUCTION SAAS PLATFORMS AND FULL-STACK APPLICATIONS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/chatbot.webp"),
      projectName: "AI-Powered Chatbot Builder SaaS",
      projectDesc:
        "A production-ready SaaS platform enabling businesses to create AI chatbots trained on their own documents using RAG, LangChain.js, Groq (Llama 3), and Pinecone vector database.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chatbot.qorex.in"
        }
      ]
    },
    {
      image: require("./assets/images/job.webp"),
      projectName: "Scalable Job Portal Platform",
      projectDesc:
        "Full-stack job portal with candidate and recruiter dashboards, Redis caching, JWT auth, Cloudinary file uploads, and load-tested for 1000+ concurrent users.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://job-portal-rho-wine.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and key accomplishments in Full Stack Development and AI Engineering.",

  achievementsCards: [
    {
      title: "MERN Stack Developer Certification",
      subtitle:
        "Completed an intensive MERN Stack Developer program with hands-on projects covering React.js, Node.js, Express.js, and MongoDB.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "TryCatch Classes Logo",
      footerLink: [
        {
          name: "TryCatch Classes",
          url: ""
        }
      ]
    },
    {
      title: "Production SaaS Deployment",
      subtitle:
        "Successfully designed, developed, and deployed a production-ready AI-powered SaaS chatbot platform serving real business users at chatbot.qorex.in.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Chatbot SaaS Platform",
      footerLink: [
        {
          name: "Visit Platform",
          url: "https://chatbot.qorex.in"
        }
      ]
    },
    {
      title: "RAG Pipeline Implementation",
      subtitle:
        "Built an end-to-end Retrieval-Augmented Generation pipeline using LangChain.js, Groq (Llama 3), HuggingFace Embeddings, and Pinecone for intelligent document Q&A.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "RAG Pipeline",
      footerLink: [
        {
          name: "Learn More",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With a passion for building AI-powered solutions, I love sharing what I learn about Full Stack Development and AI.",
//   displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://github.com/Anshu147",
//       title: "Building RAG-Based AI Chatbots with LangChain.js and Groq",
//       description:
//         "A deep dive into building production-ready AI chatbots using Retrieval-Augmented Generation, LangChain.js, and Groq (Llama 3) with Pinecone vector search."
//     },
//     {
//       url: "https://github.com/Anshu147",
//       title: "Scaling Node.js APIs with Redis Caching and MongoDB Indexing",
//       description:
//         "Learn how to dramatically reduce database load and improve response times by combining Redis caching with smart MongoDB indexing strategies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE ABOUT FULL STACK DEVELOPMENT AND AI 😄"
  ),

  talks: [
    {
      title: "Building AI Chatbots with RAG and LangChain.js",
      subtitle: "Tech talk on production AI chatbot development",
      slides_url: "https://github.com/Anshu147",
      event_url: "https://chatbot.qorex.in"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY AND SOFTWARE DEVELOPMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 96532 49071",
  email_address: "anshuv.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
