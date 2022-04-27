import Typography from "@mui/material/Typography/Typography";
import React from "react";

interface TitleBoxProps {
  title: string;
}

export const TitleBox = ({ title }: TitleBoxProps) => (
  <Typography variant="h5" sx={{marginBottom: '30px'}}>
    {title}
  </Typography>
)