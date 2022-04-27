import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import React, { useState } from "react";

interface PhotoBoxProps {
  photosrcs: string[];
}

export const PhotoBox = ({ photosrcs }: PhotoBoxProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState(photosrcs[0]);

  return (
    <Box style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
      <Box >
        <img src={selectedPhoto} alt="image" style={{width: '530px', height: '380px'}} />
      </Box>
      <Stack spacing={2} direction='row'>
        {photosrcs.map(photosrc => (
          <img src={photosrc} alt="image" onClick={() => {setSelectedPhoto(photosrc)}}
            style={selectedPhoto === photosrc? 
              {width: '90px', height: '70px', border: 'solid '} 
              : 
              {width: '90px', height: '70px'}
            }
          />
        ))}
      </Stack>
    </Box>)
}