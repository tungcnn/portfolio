/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tom Nguyen's Portfolio",
  description:
    "",
  og: {
    title: "Tom Nguyen Portfolio",
    type: "website",
    url: "http://tungcnn.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Tung Nguyen",
  logo_name: "Tung Nguyen",
  nickname: "Tom",
  subTitle:
    "A highly motivated developer with 3 years of experience in full stack software engineering, and a fast learner with a passion for continuous improvement and delivering impactful solutions.",
  resumeLink:
    "https://docs.google.com/document/d/1oEn_dbi-AFy553T1ljwxwj2Tqw7sASFv/edit?usp=drive_link&ouid=101773053058798547443&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/tungcnn/portfolio",
  githubProfile: "https://github.com/tungcnn",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/tungcnn",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tom210198/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sontung.cnn@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular, React, JavaScript, and TypeScript",
        "⚡ Creating application backend in Java, Spring, C#, .Net, and Node",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "CSharp",
          fontAwesomeClassname: "devicon:csharp",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "DotNet",
          fontAwesomeClassname: "logos:dotnet",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        }
      ],
    },
    {
      title: "Cloud and DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Has worked with some cloud platforms like Azure, Heroku, but mostly AWS",
        "⚡ Highly familiar with software development cycle, from implementation, SIT/UAT testings, to automated CI/CD with tools like Jenkins or CircleCI",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {
            color: "#CB3837",
          },
        }
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/tomnugent/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/sontung_cnn",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Deakin University",
      subtitle: "B.sc of Software Engineering (Honours)",
      logo_path: "deakin_logo.png",
      alt_name: "Deakin University",
      duration: "2018 - 2024",
      descriptions: [
        "⚡ Mastered core software engineering subjects like OOP, Data Structure, Algorithms, DBMS.",
        "⚡ Done courses and projects on Machine Learning, IoT, VR, and Full Stack Development",
        "⚡ Took a 2-year break during Covid (2020-2022) thus allowing me to work full time for valuable experience"
      ],
      website_link: "https://www.deakin.edu.au",
    }
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  // subtitle: "Work, Internship and Volunteership",
  description:
    "My full stack developer career starts early thanks to my 2-year break from study during Covid, which earned me invaluable experience for both my remaining studies and my future career.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Analyst Programmer",
          company: "Mazda Australia",
          company_url: "https://www.mazda.com.au",
          logo_path: "mazda_logo.png",
          duration: "Mar 2022 - Jan 2024",
          location: "Mulgrave, Melbourne, VIC, Australia",
          description:
            "Developed core features of Connected Vehicle projects, including a pub-sub model with Kafka, REST API with Spring Boot and Angular, SFTP file transfer, and Jenkins CI/CD. Migration from monolithic structure to microservice, Ant to Gradle, Spring MVC to Spring Boot, and more prior to that. Also trained external personels to handle maintenance and customer supports", 
          color: "#000000",
        },
        {
          title: "Software Developer (Contractor)",
          company: "Thoughtworks",
          company_url: "https://www.thoughtworks.com/en-au",
          logo_path: "tw_logo.jpg",
          duration: "June 2021 - Jan 2022",
          location: " Wuhan, China (Remote)",
          description:
            "Developed internal staff management system with Ruby, React, and AWS. Integrated Elastic Search and standard SQL queries. Optimised staff information cron jobs.", 
          color: "#000000",
        },
        {
          title: "Software Developer",
          company: "CMC Global",
          company_url: "https://cmcglobal.com.vn",
          logo_path: "cmc_logo.png",
          duration: "November 2020 - Jan 2022",
          location: "Hanoi, Vietnam",
          description:
            "Worked as full stack developer with clients across multiple industries and tech stacks, such as Java, C#, JS, TS, Angular, React, Ruby. ", 
          color: "#000000",
        }
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I learned full stack development through various personal projects with responsive frontend, complete REST API backend. Also dabble with game development in my final thesis and other fun light browser games",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic3.png",
    description:
      "Feel free to message me on LinkedIn, Email, or call me on +61472560893",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
