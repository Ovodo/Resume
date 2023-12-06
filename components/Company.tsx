import React, { ReactNode } from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Icon, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { SvgIconComponent } from "@mui/icons-material";
const Company = ({
  Company,
  bp,
  Icon,
  Typo,
  animationDelay,
}: {
  Company: any;
  bp: any;
  Icon?: ReactNode;
  Typo?: string;
  animationDelay?: string;
}) => {
  const { Name, Years, Role, Location, Description } = Company;
  return (
    <div>
      <div className='flex  mb-5 w-full md:w-[95vw] items-center md:items-center justify-beween pb-5 '>
        <div className='years flex flex-col items-start  text-left w-full md:w-[35%]'>
          <div className='header flex items-center gap-2 '>
            {Icon}
            <Typography variant='h5'>{Name}</Typography>
          </div>
          {Years && (
            <Typography className='pl-7 text-binance-white' variant='subtitle1'>
              <AccessTimeIcon className='mr-1' fontSize='small' />
              {Years}
            </Typography>
          )}
          <Typography className='pl-7 text-binance-white' variant='subtitle1'>
            <PlaceIcon className='text-red-800' fontSize='small' />
            {Location}
          </Typography>
        </div>
        <div className='items-start company_description w-full md:w-[60%]    flex flex-col'>
          <div className='company pb-2'>
            <Typography
              style={{ animationDelay: animationDelay }}
              variant='h5'
              className='text-binance_green text-left animatedText
            '
            >
              {Role}
            </Typography>
          </div>
          <div className='Job description'>
            <ul>
              {Description.map((job: any, index: number) => (
                <li key={index.toString()} className='flex items-center pb-2'>
                  {bp(8)}
                  <Typography
                    className='flex flex-wrap text-left'
                    variant='body2'
                  >
                    {job}
                  </Typography>
                </li>
              ))}
              {Typo && (
                <li className='flex items-center pb-2'>
                  {bp(8)}
                  <Typography
                    className='flex flex-wrap text-left'
                    variant='body2'
                  >
                    {Typo}
                  </Typography>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
