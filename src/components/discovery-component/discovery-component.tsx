import React from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Box from "@mui/material/Box/Box";
import { Container, Typography } from "@mui/material";

import './discovery-component.scss';
import { DiscoveryAdvertisements } from "../../mock-data/mock-data";

interface DiscoveryComponentProps {
  discoveryAdvertisements: DiscoveryAdvertisements
}

export const DiscoveryComponent = ({ discoveryAdvertisements }: DiscoveryComponentProps) =>{
  return (
    <Box sx={{justifyContent: 'center', margin: '50px'}}>
      <Stack direction="row" spacing={2} justifyContent='center'>
        <Stack direction="row" spacing={2}>
          <AdCard src={discoveryAdvertisements[0].src} des={discoveryAdvertisements[0].description} mainCard/>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={2}>
            <AdCard src={discoveryAdvertisements[1].src} des={discoveryAdvertisements[1].description}/>
            <AdCard src={discoveryAdvertisements[2].src} des={discoveryAdvertisements[2].description}/>
          </Stack>
          <Stack direction="column" spacing={2}>
            <AdCard src={discoveryAdvertisements[3].src} des={discoveryAdvertisements[3].description}/>
            <AdCard src={discoveryAdvertisements[4].src} des={discoveryAdvertisements[4].description}/>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

interface AdCardProps {
  src: string,
  des: string,
  mainCard?: boolean,
}

const AdCard = ({ src, des, mainCard }: AdCardProps) => {
  let classstr = 'adCard';
  if(mainCard) {
    classstr = 'adCard mainCard'
  }

  return (
    <Box sx={{position: 'relative', width: '100%', height: '100%'}}>
      {mainCard?
        (<img src={src} alt={`image of ${des}`} className={classstr}/>)
        :
        (<img src={src} alt={`image of ${des}`} className={classstr}/>)
      }
      <Box sx={{position: 'absolute', bottom: '40px', left: '20px', color: 'white'}}>
        <Typography variant="h5" >
          {des}
        </Typography>
      </Box>
    </Box>
)}