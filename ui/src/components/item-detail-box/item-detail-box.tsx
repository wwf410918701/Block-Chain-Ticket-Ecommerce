import React from "react";

import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import { TitleBox } from "../shared-components/title-box/title-box";


interface ItemDetailBoxProps {
  overview: {[index:string]: string}
  des: string,
  title: string,
}

export const ItemDetailBox = ({ overview, des, title }: ItemDetailBoxProps) => {

  return(
    <Stack direction='column' spacing={2}>
      <TitleBox title="Product Details"/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Stack spacing={2}>
          { Object.keys(overview).map(key => (
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography >
                  {key}
                </Typography>
                <Typography variant='subtitle2'>
                  {overview[key]}
                </Typography>
              </Stack>
          ))}
        </Stack>
        <Box sx={{width: '700px'}}>
          <Typography>
            {des}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}