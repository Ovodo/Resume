import Job from "@/components/Job";
import { Engineering } from "@mui/icons-material";

// interface Resume  {
//   Major :{
//     skills:string[],
//     summary?:string,
//     Work:{

//     }
//   }
// }

export const resume2 = {
  Major: {
    skills: [
      "Nodejs",
      "Nextjs",
      "JavaScript",
      "Typescript",
      "Analysis",
      "Tailwind CSS",
      "PostgreSQL",
      "Teamwork",
      "React Native",
      "Debugging",
      "Move",
      "Git",
    ],
    // summary:
    // "Dynamic, versatile and result-driven individual with over 8 years hands-on experience with 4+ in multinantional companies worth over 100 million naira. Proficient knowledge and use of a variety of computer software in the Tech and Engineering space thanks to a special ability to Comprehend and grasp really fast.",
    Work: {
      LAZARUS: {
        Name: "Lazarus Network",
        Location: "West Park, Florida",
        Years: "March 2024 - May 2024",
        Role: "Senior Front-End Engineer",
        Description: [
          "Develop premium user interfaces from the design team using Nextjs.",
          "Develop and manage a comprehensive Chrome extension encompassing a Web3 wallet and a review system.",
          "Tutor and help junior engineers on how to go about solving problems encountered",
        ],
      },
      TRICODE: {
        Name: "TRICODE Developers Network",
        Location: "Remote",
        Years: "April 2023- present",
        Role: "Technical Lead",
        Description: [
          "Collaborate with product managers and UX designers to implement innovative solutions that enhance user experiences.",
          "Utilize React, JavaScript, HTML, and CSS to create prototypes and wireframes for enterprise web applications.",
          "Create and manage API's for the backend structure of mobile applications and web platforms.",
        ],
      },

      projectTmax: {
        Name: "Project T-max",
        Location: "Benin, Nigeria",
        Years: "Jan 2023 - Mar 2023",
        Role: "Web Development Facilitator",
        Description: [
          "Designed and delivered web development training programs covering HTML, CSS, MongoDB, Node.js, JavaScript, and React.",
          "Advised management on the adoption of efficient development tools and technologies.",
        ],
      },
      Ovdizzle: {
        Name: "Ovdizzle Inc",
        Location: "Remote",
        Years: "2022 - present",
        Role: "Software Engineer",
        Description: [
          "React, Material UI, Redux, and Tailwind CSS were utilized to develop several responsive functional UI components.",
          ,
          "Enabled web3 authentication, stored 50+ users in global states using Context API concepts and wrote smart contracts for handling purchases and sales on the website",
          ,
          "Built Rest API to  effectively manage uploading, transmission, and downloading of content within client pages and servers.",
        ],
      },
      NITI: {
        Name: "NITI",
        Location: "Warri, Nigeria",
        Years: "Jan 2021 - Dec 2022",
        Role: "Full-Stack Developer",
        Description: [
          "Assisted in creating high-quality user interfaces based on designs provided by the UX team.",
          "Updated the development team on current industry tools and best practices.",
          "Supported the development of the brand applications,factoring in best practices for database management and API configuration",
        ],
      },

      Ruvena: {
        Name: "Ruvena Pharmacy and Stores ",
        Location: "Benin, Nigeria",
        Years: "Jan 2020 - Jan 2021",
        Role: "Growth Marketing Manager",
        Description: [
          "Collaborated with Sales Representatives, Pharmacies, and Medical Laboratories to increase the availability of products by 25% and benefit from Profit Sharing through referral bonuses.",
          "Training and motivating staff on emotional intelligence and customer-centricity to ensure customer retention.",
          "Using PostgreSQL to aggregate, design, and query data. Identification of trends and functional strategies on products helped improve turnover by over 60% in 2 years.",
        ],
      },
      NPDC: {
        Name: "NPDC - Opuama Flow Station(Oml40) ",
        Location: "Delta, Nigeria",
        Years: "2019",
        Role: "Mechanical Engineer",
        Description: [
          "Carried out maintenance, identification, and repairs on 10+ industrial equipment",
          ,
          "Measured curated readings and performed stress analysis on centrifugal pumps daily, produced about 6000bopd with combined team efforts.",
          ,
        ],
      },
      Leadway: {
        Name: "Leadway Assurance Limited ",
        Location: "Lagos, Nigeria",
        Years: "2017-2019",
        Role: "Financial Advisor",
        Description: [
          "Proposed strategies and financial advice to 100+ clients on best policies and investments product tailored to suit their financial needs",
          ,
          "Drafted and submitted proposal letters to over 10 top companies such as IBM, Siemens, Netco, Schlumberger, Babcock, etc.",
          ,
          "Recognized as the most pro-active salesman on the team, jointly spearheaded 15+ agents in an intra-city prospect, and sales improved by 20% from the rally",
        ],
      },
      Studio: {
        Name: "Lindapat Communication Studios",
        Location: "Abeokuta, Nigeria",
        Years: "2016-2017",
        Role: "Growth Manager | Software Engineer",
        Description: [
          "Created a 3-day awareness rally in the Moshood Abiola Polytechnic, received a 30% increase in new clients from the Polytechnic and its Surroundings.",
          ,
          "Oversaw the production, installation, and maintenance of various software and equipment needed for the audio and video production processes.",
          "Ran several campaigns using Facebook Ads Manager, and improved ROI by over 80%.",
          ,
        ],
      },
      RuvenaPharmacy: {
        Name: "Ruvena Pharmacy and Stores",
        Location: "Benin, Nigeria",
        Years: "2014-2016",
        Role: "Retail Sales Associate",
        Description: [
          "Attended to an average of 60 clients daily, dispensing drugs and resolving complaints from customers and employees.",
          ,
          " Increased average purchase per customer by 5% with attractive and strategic product displays",
          //   "Provided exceptional customer service. A handful of customers insist on meeting in person else they wont make a purchase",
        ],
      },
      Crestech: {
        Name: "Crestech Engineering Limited",
        Location: "Victoria Island Lagos, Nigeria",
        Years: "2013-2014",
        Role: "IT Piping Design Engineer",
        Description: [
          "Created 3D models  of isometric and graphical representations for pipeline routings using PDMS and AutoCAD software across the process, mechanical and civil departments.",
          ,
          "Outperformed every other IT personnel, obtained an award and also, overtime bonuses were added for  exceptional performance during the course of 1 year",
          ,
          "Reviewed over 60 P&ID drawings identifying and rectifying errors or changes made by clients",
        ],
      },
    },
    School: {
      Uniben: {
        Name: "University of Benin",
        Years: "2009-2014",
        Location: "Benin, Nigeria",
        Role: "B.Eng. Mechanical Engineering, 2014.",
        Description: [
          "Assistant Secretary General of the National Association of Mechanical Engineering Students,2012.",
          "Member of the parliament -Nigerian Union Of Engineering Students Association (NUESA), 2010.",
        ],
      },
      Iec: {
        Name: "America Window Space",
        Years: "",
        Location: "Benin, Nigeria",
        Role: "Kids Programming Instructor",
        Description: ["A 2 day bootcamp on computer programming for kids"],
      },
      Junior: {
        Name: "JPMORGAN CHASE & CO.",
        Years: "",
        Location: "Global",
        Role: "Software Engineering Job Simulation",
        Description: [
          "Interface with a stock price data feed",
          "Use JPMorgan Chase & Co. frameworks and tools",
          "Display data visually for traders",
        ],
      },
    },
  },
  junior_react_dev: {
    summary: "",
  },
};
