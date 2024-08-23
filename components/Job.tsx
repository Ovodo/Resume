import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Company from "./Company";
import { Engineering } from "@mui/icons-material";
import { FaPrescription } from "react-icons/fa";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MovieIcon from "@mui/icons-material/Movie";
import LaptopIcon from "@mui/icons-material/Laptop";
//{ VARIABLES }
const variables = {
  bp: "bulletpoint",
};
// {ICONS;}
const icons = {};
export const bp = (size: number) => {
  return (
    <CircleIcon
      className='mr-2 animate-spin'
      sx={{ color: "var(--binance_white)", fontSize: size }}
    />
  );
};

const Job = ({ resume }: { resume: any }) => {
  const { Ruvena, projectTmax, NITI, TRICODE, LAZARUS, Overmind } =
    resume.Major.Work;

  const companies = [
    {
      data: TRICODE,
      icon: <LaptopIcon className='text-blue-600' fontSize='medium' />,
    },
    {
      data: LAZARUS,
      icon: <LaptopIcon className='text-blue-600' fontSize='medium' />,
    },
    {
      data: Overmind,
      icon: <LaptopIcon className='text-blue-600' fontSize='medium' />,
    },
    {
      data: projectTmax,
      icon: <LaptopIcon className='text-blue-600' fontSize='medium' />,
    },
    // {
    //   data: Ovdizzle,
    //   icon: <LaptopIcon className='text-blue-600' fontSize='medium' />,
    // },
    {
      data: NITI,
      icon: <LaptopIcon className='text-blue-600' fontSize='medium' />,
    },

    {
      data: Ruvena,
      icon: <FaPrescription className='text-red-600 ' size={23} />,
    },
    // {
    //   data: NPDC,
    //   icon: <Engineering className='text-blue-600' fontSize='medium' />,
    // },
    // {
    //   data: Leadway,
    //   icon: <AccountBalanceIcon className='text-green-600' fontSize='medium' />,
    // },
    // {
    //   data: Studio,
    //   icon: <MovieIcon className='text-amber-600' fontSize='medium' />,
    // },
    // {
    //   data: RuvenaPharmacy,
    //   icon: <FaPrescription className='text-red-600' size={23} />,
    // },
    // {
    //   data: Crestech,
    //   icon: <Engineering className='text-blue-600' fontSize='medium' />,
    // },
  ];

  return (
    <>
      {companies.map((company: any, index) => (
        <Company
          key={index.toString()}
          Company={company.data}
          bp={bp}
          Icon={company.icon}
          animationDelay={`${index * 3}s`}
        />
      ))}
    </>
  );
};

export default Job;
