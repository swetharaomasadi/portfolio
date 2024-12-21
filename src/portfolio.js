/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import MyImage from './assets/images/image.jpg';  // Import the image

//import MyImage from './assets/images/image.jpg';  // Import the image

 const splashScreen = {
  //background: "#000000", // Background color for the splash screen
  image: "/image.jpg",   // Path relative to the public folder
  alt: "MyImage",
  displaySplash: true       // Alt text for accessibility
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};


const greeting = {
  
  title: "Hello, I'm Masadi Swetha",
  subTitle: emoji(
    "A passionate Software Developer and AI Engineer 🚀 with experience in building web applications and training models, possessing a deep understanding of machine learning and deep learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EfdcU6Ey5xKt6H5QmMgUtbQnwHqAZMXP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/swetharaomasadi",
    linkedin: "https://www.linkedin.com/in/swetha-masadi-8ba193267",
    gmail: "swetharaomasadi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Passionate Software Developer with Expertise in AI",
  skills: [
    emoji("⚡ Build highly interactive front-end and user interfaces for web and mobile applications"),
    emoji("⚡ Design and develop robust machine learning and deep learning models for real-world applications"),
    emoji("⚡ Create Progressive Web Applications (PWAs) and Single Page Applications (SPAs)"),
    emoji("⚡ Work on Machine Learning, Deep Learning, Generative AI, and Artificial Intelligence projects"),
  ],

   SoftwareSkills : [
    {
      skillName: "C Programming",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PLSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-cubes"
    },
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
      skillName: "Flask",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Generative AI",
      fontAwesomeClassname: "fas fa-magic"
    },
    {
      skillName: "Artificial Intelligence",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language"
    }
  ],
  
  display : true // Set false to hide this section, defaults to true
  
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SR University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Computer Science with a specialization in Artificial Intelligence and Machine Learning.",
      duration: "September 2022 - May 2026",
    },
    {
      schoolName: "Shivani Junior College",
      logo: require("./assets/images/shivani.png"),
      subHeader: "Intermediate College.",
      duration: "September 2020 - May 2022",
    },
    {
      schoolName: "New Kakathiya Model School",
      logo: require("./assets/images/newkakatiya.png"),
      subHeader: "School.",
      duration: "June 2007 - May 2020",
    },
  ]
};

// Your top 3 proficient stacks/tech experience
/*
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
*/

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Summer Intern",
      company: "National Institute of Technology and Science - Warangal",
      companylogo: require("./assets/images/nit.png"),
      date: "June 2024 – July 2024",
      /*
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
        */
    }
  ],

   projects : [
    {
      title: "Airlines Booking",
      description: "This is my first project in my B.Tech first year, and it is used for booking flight tickets. It was developed using the C language.",
      link: "https://github.com/swetharaomasadi/airlines-booking",
    },
    {
        title: "Liver Disorder Prediction",
        description: "Developed a liver disorder prediction system using Python, utilizing machine learning algorithms to analyze medical data and accurately identify potential liver disorders.",
        link: "https://github.com/swetharaomasadi/statml_complete_project.ipynb",
    },
    {
      title: "Animal Image Classification",
      description: "Designed and implemented an animal image classification system using Python, focusing on training machine learning models to accurately categorize images into specific animal classes.",
      link: "https://github.com/swetharaomasadi/animals_image_classification",
  },
  {
    title: "Heart Failure Prediction System with Web Interface",
    description: "Developed and implemented a heart failure prediction system using Python, leveraging machine learning techniques to analyze patient data and predict the likelihood of heart failure. Additionally, designed a user-friendly web interface using Flask to provide seamless access to predictions and insights for healthcare professionals and patients.",
    link: "https://github.com/swetharaomasadi/Heart-Failure-Prediction-System-with-Web-Interface",
},
  ],
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubUserName: "swetharaomasadi", // Just the username
  showGithubProfile: "true", // Keep it as "true" to display the profile card
  display: true // Leave this as true to show the section
};


// Some big projects you have worked on



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements, Accomplishments And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Academic Excellence Recognition",
      image: require("./assets/images/harvardLogo.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Accomplishment",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_academicexcellence-activity-7228037576979361793-AOyI?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "4th rank in the Artificial Intelligence competition organized by SRM University",
      image: require("./assets/images/srm.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Accomplishment",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_artificialintelligence-srmuniversity-activity-7219333463298994176-aJLV?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "EY Techathon",
      image: require("./assets/images/ey.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Accomplishment",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_ey-techathon-activity-7132374935326396416-abla?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "NPTEL Certified: Theory of Computation",
      image: require("./assets/images/nptel.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_theory-of-computation-activity-7255241864096751616-4xck?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "Unstop Talent Park - Tech",
      image: require("./assets/images/unstop.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_unstop-talent-park-tech-activity-7219327293272252416-CP4T?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "NPTEL Certified: Data Base Management System",
      image: require("./assets/images/nptel.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_data-base-management-system-activity-7186594662600642560--0CO?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "HackerRank Certified: SQL",
      image: require("./assets/images/hackerrank.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_sql-hackerrank-databaseskills-activity-7219335306540408833-He0r?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      image: require("./assets/images/aws.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_cloud-foundations-activity-7254487550612918272-3vgM?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "AICTE Virtual Internship - Cohort 9",
      image: require("./assets/images/aicte.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_aicte-activity-7238896853457457154-EkSb?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    
    
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      image: require("./assets/images/microsoft.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/swetha-masadi-8ba193267_azure-aifundamentals-microsoftcertification-activity-7219345353181970433-yKtF?utm_source=share&utm_medium=member_desktop"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

//Blogs Section
/*
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
*/

// Talks Sections


// Podcast Section



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎"),
  subtitle:
    "Discuss a project? My Inbox is open for all.",
  number: "+91-8555934693",
  email_address: "swetharaomasadi@gmail.com"
};

// Twitter Section


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  resumeSection
};
