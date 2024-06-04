import React from "react";

let pint3d = 2;
let lsl = ++pint3d;

const Page = () => {
  return (
    <div className='w-screen h-screen'>
      <embed src='/morgan.pdf' width='100%' height='100%' />
    </div>
  );
};

export default Page;
