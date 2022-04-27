import React from "react";

import IconButton from "@mui/material/IconButton/IconButton";
import ChatIcon from '@mui/icons-material/Chat';
import SpeedDial from "@mui/material/SpeedDial/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon/SpeedDialIcon";

export const SpeedDialSupport = () => (
  <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'fixed', bottom: 16, right: 16 }}
    icon={<ChatIcon />}
  />
)