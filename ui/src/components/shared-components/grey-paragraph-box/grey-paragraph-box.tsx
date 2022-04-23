import React from "react";

import Typography from "@mui/material/Typography/Typography";

interface GreyParagraphBoxProps {
  des: string;
}

export const GreyParagraphBox = ({des }: GreyParagraphBoxProps) => (
  <Typography variant='body1' color="text.first" className="paragraph" >
    {des} 
  </Typography>
)