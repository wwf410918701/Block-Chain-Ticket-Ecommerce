import React from "react";

import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";


interface BlackButtonProps {
  text: 'string'
}

export const BlackButton = styled(Button)({
  backgroundColor: '#212121',
  color: 'white',
  '&:hover': {
    backgroundColor: '#020202',
    color: 'white',
  },
});