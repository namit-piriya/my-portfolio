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
  username: "Namit Piriya",
  title: "Hi, I'm Namit",
  subTitle: emoji(
    "3+ Years Experienced Full Stack Software Engineer with expertise in MERN, Java. Proficient in MongoDB, PostgreSQL, and Python. Curious and passionate about continuous learning. Ready to contribute effectively to dynamic projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OI7qBxR6KAfOhEjSvLDMPqtKbKYIi2SF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/namit-piriya",
  linkedin: "https://www.linkedin.com/in/namit-piriya/",
  gmail: "namitpiriya945@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/9228808/namit-piriya",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Software Engineer, Passion for solving complex problems on scale",
  skills: [
    emoji(
      "⚡ Solve complex problems using Engineering Best practices"
    ),
    emoji(
      "⚡ Design system for scale."
    ),
    emoji(
        "⚡ Believer, Solve the problem, Code will come"
    )
  ],
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java fa-beat"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js fa-beat"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react fa-beat"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node fa-beat"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database fa-beat"
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "fa-solid fa-leaf fa-beat"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws fa-beat"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker fa-beat"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Institute Of Technology, RGTU",
      logo: require("./assets/images/rgpv-logo.jpg"),
      subHeader: "Bachelor of Engineering CS",
      duration: "July 2016 - Sept 2020",
      desc: "Major in computer science and fundamentals of CS engineering",
      descBullets: [
        "Data Structures and algorithms",
        "Smart Mirror, Smart Parking project"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Bimaplan",
      companylogo: require("./assets/images/bimaplan.jpeg"),
      date: "Aug 2021 – Present",
      desc: "Experienced Full Stack Engineer at Bimaplan, integrating insurers for growth. Proficient in JavaScript, Node.js, AWS, and backend development.",
      descBullets: [
        "Integrated insurers on backend system, driving B2C growth.\n",
        "Modernized outdated systems for efficiency.",
      ]
    },
    {
      role: "Backend Developer",
      company: "CardSe",
      date: "Dec 2020 – Aug 2021",
      companylogo: require("./assets/images/cardse.jpeg"),
      desc: "Backend Developer at CardSe, crafting secure payment solutions. Skilled in Node.js, Java, ElasticSearch, MongoDB, and AWS.",
      descBullets: [
        "Engineered secure payment systems.",
        "Migrated legacy code to typescript"
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Cognera",
      companylogo: require("./assets/images/cognera.jpeg"),
      date: "Aug 2019 – Oct 2019 ",
      desc: "Interned as Backend Developer at Cognera, achieving full code coverage. Proficient in Docker, Python, Node.js, and Linux.",
      descBullets: [
        "Achieved full code coverage during internship.",
        "Developed software components using Docker, Python, and Node.js."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

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

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7566257811",
  email_address: "namitpiriya945@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Namitpy", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
