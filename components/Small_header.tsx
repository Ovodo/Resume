import { SvgIconComponent } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { ReactNode } from "react";

const Small_header = ({ Text, Icon }: { Text: string; Icon: ReactNode }) => {
  return (
    <div className='flex space-x-3 my-3'>
      <Typography
        className='flex gap-x-2 items-center'
        variant='subtitle2'
        // fontSize={10}
      >
        {Icon}
        {Text}
      </Typography>
    </div>
  );
};

export default Small_header;
