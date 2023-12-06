import Link from "next/link";
import React from "react";

const Project = ({ projects }: { projects: any[] }) => {
  return (
    <div>
      {projects.map((item: any, index: number) => {
        return (
          <div key={index.toString()} className='text-binance_white space-y-1'>
            <h3 className='w-full border-b border-opacity-30 border-white pb-2 my-3 text-center'>{`${(
              index + 1
            ).toString()}.`}</h3>
            <div className='grid grid-cols-[1fr,2fr] space-x-3'>
              <p>Name : </p>
              <p className='text-binance_green font-semibold text-lg'>
                {item.name}
              </p>
            </div>
            <div className='grid grid-cols-[1fr,2fr] space-x-3'>
              <p>About : </p>
              <p>{item.about}</p>
            </div>
            <div className='grid grid-cols-[1fr,2fr] space-x-3'>
              <p>Role : </p>
              <p>{item.role}</p>
            </div>
            <div className='grid grid-cols-[1fr,2fr] space-x-3'>
              <p>Stack : </p>
              <p className='italic text-binance_brightash'>{item.stack}</p>
            </div>
            {item.link && (
              <div className='grid grid-cols-[1fr,2fr] space-x-3'>
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
