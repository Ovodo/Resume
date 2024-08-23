import Link from "next/link";
import React from "react";

const Project = ({ projects }: { projects: any[] }) => {
  return (
    <div className='grid grid-cols-1 gap-y-4 place-items-center md:grid-cols-2'>
      {projects.map((item: any, index: number) => {
        return (
          <div
            key={index.toString()}
            className='text-binance_white p-4 rounded-md shadow-sm shadow-binance_brightash w-[550px] border-binance_ash border space-y-1'
          >
            <div className='grid grid-cols-[.2fr,1.2fr] '>
              <p className=''>Name : </p>
              <p className='text-binance_green  font-semibold text-lg'>
                {item.name}
              </p>
            </div>
            <div className='grid grid-cols-[.2fr,1.2fr] '>
              <p>About : </p>
              <p>{item.about}</p>
            </div>
            <div className='grid grid-cols-[.2fr,1.2fr] '>
              <p>Role : </p>
              <p>{item.role}</p>
            </div>
            <div className='grid grid-cols-[.2fr,1.2fr] '>
              <p>Stack : </p>
              <p className='italic text-binance_brightash'>{item.stack}</p>
            </div>
            {item.link && (
              <div className='grid grid-cols-[.2fr,1.2fr] '>
                <p>Link : </p>
                <Link
                  className='underline hover:left-2 relative duration-500 underline-offset-4'
                  href={item.link}
                >
                  {item.link}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Project;
