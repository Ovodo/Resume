"use client";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import { resume2 } from "../data/resume2";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { IoExtensionPuzzle } from "react-icons/io5";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import { bp } from "../components/Job";
import { FcBusinessman } from "react-icons/fc";
import Job from "../components/Job";
import Company from "../components/Company";
import Small_header from "../components/Small_header";
import { LinkedIn } from "@mui/icons-material";
import Title_header from "../components/Title_header";
import { motion } from "framer-motion";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Project from "@/components/Project";
import { project } from "@/data/project";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Binance = () => {
  const { Uniben, Iec, Junior } = resume2.Major.School;

  return (
    <Paper
      sx={{ width: "100%", backgroundColor: "var(--binance_black)" }}
      className='w-full border-2 h-full flex flex-col p-5  items-center '
      elevation={7}
    >
      <hr className='animate-bounce w-[90vw] mb-1' />

      {/* Header Div */}

      <motion.header
        animate={{ y: [200, 0] }}
        transition={{
          type: "spring",
          stiffness: 500,
          duration: 1,
          // delay: 0.5,
        }}
        className='HeaderBox flex flex-col mb-4 items-center'
      >
        <Typography
          fontWeight={600}
          className='text-binance_white'
          variant='h4'
          mb={2}
        >
          Ovodo Ohwovoriole
        </Typography>
        <Typography
          className='text-binance_ash animate-pulse flex shadow-sm shadow-binance_yellow items-center gap-x-1 pr-3 bg-binance_yellow rounded-[4px] mt-2 p-1'
          variant='h5'
          // fontWeight={400}
        >
          <FcBusinessman />
          Software Engineer
        </Typography>
      </motion.header>

      {/* Summary Div */}
      {/* <div className='summary text-left'>
        <Typography
          variant='body2'
          sx={{ ml: 1, letterSpacing: 0, wordSpacing: 1 }}
        >
          {resume2.Major.summary}
        </Typography>
      </div> */}

      {/* Contact info Box */}
      <Box className='flex md:flex-row items-center px-2 md:px-10 bg-binance_ash shadow-sm shadow-binance_brightash  text-binance_white rounded-t-md pb-3 pt-1 justify-between w-full my-3'>
        <motion.div
          animate={{ x: [500, 0] }}
          transition={{ type: "spring", stiffness: 500, duration: 1 }}
          className='max-w-max self-end '
        >
          <Small_header
            Icon={<MailIcon className='text-binance_brightash' />}
            Text={"ohwovoriole@gmail.com"}
          />
          <Small_header
            Icon={<PhoneAndroidIcon className='text-binance_brightash' />}
            Text={"+234818983519"}
          />
          <a href='https://ovdizzle.com'>
            <Small_header
              Icon={<LanguageTwoToneIcon className='text-binance_brightash' />}
              Text={"ovdizzle.com"}
            />
          </a>
        </motion.div>
        <motion.div
          animate={{ x: [-500, 0] }}
          transition={{ type: "spring", stiffness: 500, duration: 1 }}
          className='max-w-max self-end '
        >
          <a href='http://linkedin.com/in/ovodo/'>
            <Small_header
              Icon={<LinkedIn className='text-binance_brightash' />}
              Text={"linkedin.com/ovodo"}
            />
          </a>
          <a href='http://twitter.com/ovdizzle'>
            <Small_header
              Icon={<TwitterIcon className='text-binance_brightash' />}
              Text={"@ovdizzle"}
            />
          </a>
          <a href=''>
            <Small_header
              Icon={<PlaceIcon className='text-binance_brightash' />}
              Text={"Edo, Nigeria."}
            />
          </a>
        </motion.div>
      </Box>

      {/* Skills */}
      <div className='work w-full   mt-4'>
        <Title_header
          Icon={<IoExtensionPuzzle size={23} className='text-cyan-700 ' />}
          Heading={"Skills"}
        />
        <div className='grid grid-cols-3 sm:grid-cols-4 w-full md:grid-cols-5 gap-x-3 md:gap-x-32'>
          {resume2 &&
            resume2.Major.skills
              .sort((a, b) => (a < b ? -1 : 1))
              .map((item, index) => (
                <Typography
                  key={index.toString()}
                  // className={
                  //   item.includes("js") ||
                  //   item.includes("ss") ||
                  //   item.includes("ml") ||
                  //   item.includes("script") ||
                  //   item.includes("DB") ||
                  //   item.includes("SQ") ||
                  //   item.includes("Fig") ||
                  //   item.includes("UI")
                  //     ? "text-binance_yellow"
                  //     : item.includes("Auto") || item.includes("PDMS")
                  //     ? "text-binance_green"
                  //     : "text-cyan-500"
                  // }
                  variant='body2'
                  textAlign={"left"}
                >
                  {bp(8)}
                  {item}
                </Typography>
              ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className='work py-2 w-full pl-5 shadow-sm shadow-binance_brightash   mt-7 bg-binance_ash'>
        <Title_header
          Icon={<TipsAndUpdatesIcon className='text-binance_yellow ' />}
          Heading={"Projects"}
        />
        <Project projects={project} />
      </div>
      {/* WORK HISTORY */}
      <div className='work pt-2 w-full  pl-5 shadow-sm shadow-binance_brightash   mt-7 bg-binance_ash'>
        <Title_header
          Icon={<WorkHistoryIcon className='text-cyan-700' />}
          Heading={"Work Experience"}
        />
        <Job resume={resume2} />
      </div>

      {/* Education */}

      <div className='work mt-9'>
        <Title_header
          Icon={<SchoolIcon className='text-cyan-700' />}
          Heading={"Education"}
        />
        <div className=''>
          <Company Company={Uniben} bp={bp} />
        </div>
      </div>
      {/* Volunteer */}

      <div className='work mt-9'>
        <Title_header
          Icon={<VolunteerActivismIcon className='text-lovelypink' />}
          Heading={"Volunteer"}
        />
        <div className=''>
          <Company Company={Iec} bp={bp} />
        </div>
      </div>
      {/* Certifications*/}

      <div className='work mt-9'>
        <Title_header
          Icon={<SchoolIcon className='text-amber-500' />}
          Heading={"Certifications"}
        />
        <div className=''>
          <Company Company={Junior} bp={bp} />
        </div>
      </div>

      <hr className='w-[90vw]' />
    </Paper>
  );
};

export default Binance;
