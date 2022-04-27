import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Card from "@mui/material/Card/Card";
import EuroIcon from '@mui/icons-material/Euro';
import Stack from "@mui/material/Stack";

import { TitleBox } from '../../components/shared-components/title-box/title-box';
import { GreyParagraphBox } from "../shared-components/grey-paragraph-box/grey-paragraph-box";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import { QrCodeBox } from '../qrcode-box/qrcode-box';

interface LongCardProps {
  imageUrl: string;
  title: string;
  des?: string;
  operationsPanel: JSX.Element; 
}

const a ='jfodjsifdjifsjosdjfdsofdsfsjdjifdjsfdofjdsfdjoidfjodfhdfhwfhwhwhuwhufhuwrfhuhufwhuffhoweohfiwihfoewhfewhoifewhofewohifweoh'

export const LongCard = ({ imageUrl, title, des, operationsPanel }: LongCardProps) => {
  const [showQrCode, setShowQrCode] = useState(false);
  const navigate = useNavigate();

  const closeQrCode = () => {setShowQrCode(false)};
  const openQrCode = () => {setShowQrCode(true)}

  return (
    <Card sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <img src={imageUrl} alt={title} style={{width: '200px', height: '150px', cursor: 'pointer'}} onClick={() => {navigate('/ticketDetail/123')}} />
        <Stack direction='column' justifyContent='center' spacing={2}>
          <Typography variant="h5">
            {title}
          </Typography>
          {des? (
            <Typography variant='body1' color="text.first" className="paragraph" sx={{maxWidth: '600px', textOverflow: 'ellipsis', overflow: 'hidden'}} >
              {des} 
            </Typography>)
            :
            null}
            <Stack>
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography>Buy in Price:</Typography>
                <Stack direction='row' alignItems='center'>
                  <EuroIcon/>
                  <Typography variant="h6">211</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography>Now anticipate can sell:</Typography>
                <Stack direction='row' alignItems='center'>
                  <EuroIcon/>
                  <Typography variant="h6">232</Typography>
                </Stack>
              </Stack>
            </Stack>
        </Stack>
      </Stack>
      <Box sx={{marginRight: '30px'}} onClick={() => openQrCode()}>
        {operationsPanel}
      </Box>
      <QrCodeBox code={'111'} open={showQrCode} handleClose={closeQrCode} />
    </Card>
)}