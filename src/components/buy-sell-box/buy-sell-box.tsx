import React from "react";

import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Button from "@mui/material/Button/Button";
import EuroIcon from '@mui/icons-material/Euro';
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography/Typography";

import { BlackButton } from "../shared-components/buttons/black-button";
import { PriceBox } from "./price-box";

interface BuySellBoxProps {
  lowestPrice: number,
  popularPrice: number,
}

//TODO 将货币符号转换为依据全局设置的
export const BuySellBox = ({ lowestPrice, popularPrice}: BuySellBoxProps) => {


  return (
    <Stack direction='column' alignItems={'center'} spacing={2}>
      <Box style={{minWidth: '460px', height: '220px', 
                  border: 'solid 1px', display: 'flex', 
                  flexDirection: 'column', justifyContent: 'space-evenly',
                  paddingLeft: '20px', borderColor: 'rgba(0, 0, 0, 0.332)',
                  borderRadius: '5px'}}>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Button variant="contained" 
            color="success" 
            className="defaultButton"
            sx={{width: '130px', height: '52px'}}
          >
            Buy
          </Button>
          <PriceBox title='最低价' number={lowestPrice} currencyIcon={<EuroIcon />}/>
        </Stack>
        <Divider variant="middle"/>
        <Stack direction='row' alignItems='center' spacing={2}>
          <BlackButton className="defaultButton"
            sx={{width: '130px', height: '52px'}}
          >
            Sell
          </BlackButton>
          <PriceBox title='预计可获得' number={popularPrice} currencyIcon={<EuroIcon />}/>
        </Stack>
      </Box>
      <Stack direction='row' alignItems='center' spacing={2}>
        <Typography >Last sale: </Typography>
        <Stack direction='row' spacing={2} alignItems='center'>
          <EuroIcon/>
          <Typography variant="h5">320</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}