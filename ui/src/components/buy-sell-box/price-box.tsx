import React from "react";

import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";

interface PriceBoxProps {
  title: string,
  number: number,
  currencyIcon: JSX.Element,
}

export const PriceBox = ({ title, number, currencyIcon }: PriceBoxProps) => (
  <Stack direction='row' spacing={2}>
    <Typography variant="h6">
      { title }
    </Typography>
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      {currencyIcon}
      <span>{number}</span>
    </Box>
  </Stack>
)