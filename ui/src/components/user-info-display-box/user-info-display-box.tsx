import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { GreyParagraphBox } from "../shared-components/grey-paragraph-box/grey-paragraph-box";

interface UserInfoDisplayBoxProps {
  backgroundSrc: string;
  profilePhotoSrc: string;
  des: string;
  name: string;
}

export const UserInfoDisplayBox = ({ backgroundSrc, profilePhotoSrc, des, name }: UserInfoDisplayBoxProps) => (
  <Box sx={{ position: 'relative' }}>
    <img src={backgroundSrc}
      alt="banner"
      style={{width: '100%', height: '200px'}} 
    />
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', top: '-100px', alignItems: 'center', flexDirection: 'column'}}>
      <Avatar
        alt="Remy Sharp"
        src={profilePhotoSrc}
        sx={{ width: 130, height: 130 }}
      />
      <Typography variant='h2'>
        {name}
      </Typography>
      <Box sx={{width: '70%', marginTop: '20px', textAlign: 'center'}}>
        <GreyParagraphBox des={des}/>
      </Box>
    </Box>
  </Box>

)