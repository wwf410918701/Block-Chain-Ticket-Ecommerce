import React from "react";

import Backdrop from "@mui/material/Backdrop/Backdrop";
import Box from "@mui/material/Box/Box";
import Fade from "@mui/material/Fade/Fade";
import Modal from "@mui/material/Modal/Modal";
import Typography from "@mui/material/Typography/Typography";

import WwfLinkedIn from '../../mockQrCode.png';

interface QrCodeBoxProps {
  code: string;
  open: boolean;
  handleClose: () => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};


export const QrCodeBox = ({ code, open, handleClose }: QrCodeBoxProps) => (
  <Modal
    aria-labelledby="spring-modal-title"
    aria-describedby="spring-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={style}>
        <Typography id="spring-modal-title" variant="h6" component="h2">
          Welcome to add my <span style={{color: '#2196f3'}}>Linkedin</span>
        </Typography>
        <img src={WwfLinkedIn} alt="wwf's linkedin QR Code" style={{width: '300px'}}/>
      </Box>
    </Fade>
  </Modal>
) 