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
  username: "Gael",
  title: "Hi all, I'm Gael",
  subTitle: emoji(
    "I am a bilingual Technical Support Specialist and Customer Success Analyst with over 4 years of experience driving solutions in the fast-paced Fintech and Telematics industries. I thrive in high-stress environments, bridging the gap between complex technical issues and seamless customer experiences. Passionate about infrastructure, troubleshooting, and continuous technical growth."
  ),
  resumeLink: "", // Cuando subas tu CV a Google Drive, pega el enlace aquí
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jesusgaelgs",
  linkedin: "https://www.linkedin.com/in/gael-jggs/", 
  gmail: "gael.jggs@gmail.com", 
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BILINGUAL TECHNICAL SUPPORT SPECIALIST EXPLORING NETWORK ENGINEERING AND CLOUD ADMINISTRATION",
  skills: [
    emoji(
      "⚡ Domains: Fintech, Telematics, SaaS, Fleet Management"
    ),
    emoji("⚡ Technical Skills: Advanced Software/Hardware Troubleshooting, Fraud Analysis, FMCSA/HOS Regulations, Linux Environment (Arch/Fedora/CachyOS)"),
    emoji(
      "⚡ Soft Skills: High-stress Incident Management, B2B/B2C Customer Success, Cross-functional Communication"
    ),
    emoji(
      "⚡ Languages: English (High Proficiency / Bilingual), Spanish (Native)"
    )
  ],

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Network Infrastructure",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Database / SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Cloud / Azure AD",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Terminal / Bash",
      fontAwesomeClassname: "fas fa-terminal"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, 
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Technical Support & Troubleshooting", 
      progressPercentage: "95%" 
    },
    {
      Stack: "Customer Success / Escalation Management",
      progressPercentage: "90%"
    },
    {
      Stack: "Network Engineering & Infrastructure",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Customer Success & Operations Specialist",
      company: "Binance",
      companylogo: require("./assets/images/facebookLogo.png"), // Estos logos los podemos cambiar después
      date: "Nov 2023 – Sep 2024", 
      desc: "Investigated and resolved complex user escalations related to platform operations, security protocols, and fraud analysis. Delivered high-fidelity technical support for global users in a fast-paced cryptocurrency ecosystem.",
      descBullets: [
        "Maintained strict adherence to compliance standards and executed thorough KYC verifications.",
        "Managed high-stress incident resolution and arbitrated customer P2P disputes."
      ]
    },
    {
      role: "Technical Support Analyst (Telematics)",
      company: "Samsara / Omnitracs",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Oct 2024 – Apr 2025 (Samsara) | Oct 2021 – Jul 2022 (Omnitracs)", 
      desc: "Provided advanced software and hardware troubleshooting for telematics devices and fleet management platforms. Specialized in resolving compliance issues related to FMCSA and HOS regulations.",
      descBullets: [
        "Managed high-stress technical calls entirely in English.",
        "Ensured uninterrupted operations for logistics clients and coached non-technical demographics."
      ]
    },
    {
      role: "IT Support / Helpdesk Specialist",
      company: "UST / Tech Mahindra / Compucom",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Feb 2019 – Jun 2024 (Combined Experience)", 
      desc: "Diagnosed and resolved multi-tier hardware and software issues, ensuring minimal downtime for end-users across hospital systems and retail infrastructure. Maintained detailed tracking of technical escalations and handled Active Directory management."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  display: false 
};

// Achievement Section

const achievementSection = {
  display: false 
};

// Blogs Section

const blogSection = {
  display: false 
};

// Talks Sections

const talkSection = {
  display: false 
};

// Podcast Section

const podcastSection = {
  display: false 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss an opportunity or just want to say hi? My Inbox is open for all.",
  number: "+52 55 2817 7705", 
  email_address: "gael.jggs@gmail.com" 
};

// Twitter Section

const twitterDetails = {
  display: false 
};

const isHireable = true; 

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
