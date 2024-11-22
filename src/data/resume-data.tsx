import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Akash Bhaumik",
  initials: "AB",
  location: "Kolkata, India, IST",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "Cybersecurity enthusiast dedicated to building secure, scalable systems and sharing knowledge through public learning.",
  summary:
    "As a Cybersecurity student and aspiring ethical hacker, I specialize in network security, cloud computing, and system vulnerability assessment. I am committed to continuous learning, actively sharing my growth through public platforms, and working towards making the digital world safer.",
  avatarUrl: "https://via.placeholder.com/150", // Replace with a proper link
  personalWebsiteUrl: "https://linkedin.com/in/akash-bhaumik-213802259", // Replace if you have a personal website
  contact: {
    email: "your_email@example.com", // Replace with your email
    tel: "+91-XXXXXXXXXX", // Replace with your phone number
    social: [
      {
        name: "GitHub",
        url: "https://github.com/your_github_username", // Replace with your GitHub
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/akash-bhaumik-213802259",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/your_username", // Replace with your X/Twitter
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering and Management, Kolkata",
      degree: "BTech in Computer Science (Specialization in Cybersecurity)",
      start: "2023", // Adjust as per your timeline
      end: "2027", // Adjust as per your timeline
    },
  ],
  work: [
    {
      company: "AICTE - IBM SkillsBuild",
      link: "https://skillsbuild.org",
      badges: ["Internship"],
      title: "Cloud Computing and Chatbot Development Intern",
      logo: "", // Add the company logo URL if available
      start: "2024",
      end: "2024",
      description:
        "Gained experience in cloud computing, Docker, Kubernetes, and chatbot development using Watson Assistant and Twilio.",
    },
    {
      company: "Skill India - Tech Mahindra",
      link: "https://skillindia.nsdcindia.org/",
      badges: ["Certification"],
      title: "Cybersecurity Course Participant",
      logo: "", // Add the company logo URL if available
      start: "2024",
      end: "2024",
      description:
        "Focused on cyber laws in India and raised awareness about laws affecting women in cybersecurity contexts.",
    },
  ],
  skills: [
    "Cybersecurity",
    "Ethical Hacking",
    "Cloud Computing",
    "Networking Security",
    "Python",
    "Docker",
    "Kubernetes",
    "Watson Assistant",
    "Twilio",
  ],
  projects: [
    {
      title: "Phishing Email Detection System",
      techStack: ["Python", "Machine Learning", "AI"],
      description:
        "Developed a system to automatically detect and block phishing emails using AI and ML techniques.",
      logo: "", // Add project logo if available
      link: {
        label: "github.com",
        href: "https://github.com/your_project_repo", // Replace with the repo link
      },
    },
    {
      title: "Networking Notes Repository",
      techStack: ["Documentation", "Cisco Networking"],
      description:
        "Created and shared detailed notes on computer networking concepts, supporting fellow students and professionals in their cybersecurity journey.",
      logo: "", // Add project logo if available
      link: {
        label: "github.com",
        href: "https://github.com/your_notes_repo", // Replace with the repo link
      },
    },
    {
      title: "Chatbot for Communication",
      techStack: ["Watson Assistant", "Twilio", "Python"],
      description:
        "Designed and implemented a chatbot to enhance customer interactions and automate responses.",
      logo: "", // Add project logo if available
      link: {
        label: "github.com",
        href: "https://github.com/your_chatbot_repo", // Replace with the repo link
      },
    },
  ],
} as const;

