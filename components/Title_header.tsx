"use client";
import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { SvgIconComponent } from "@mui/icons-material";

const Title_header = ({
  Heading,
  Icon,
}: {
  Heading: string;
  Icon: ReactNode;
}) => {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: [-500, 0] }}
      transition={{ delay: 1.2, duration: 2 }}
      className='w-full animate-pulse flex justify-center'
    >
      <div className='flex justify-start w-[20vw] items-center  mb-3'>
        <div className=''>{Icon}</div>
        <Typography className='' ml={1} pb={2} variant='h4'>
          {Heading}
          <hr />
        </Typography>
      </div>
    </motion.div>
  );
};

export default Title_header;
