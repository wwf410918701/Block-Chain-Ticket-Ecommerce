import React from "react";
import { useNavigate } from "react-router-dom";

import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box/Box";

import { LongCard } from "../../components/long-card/long-card";
import { BlackButton } from "../../components/shared-components/buttons/black-button";
import { PageContainer } from "../../components/shared-components/page-container/page-container";
import { mockItemOverview } from "../../mock-data/mock-data";
import Stack from "@mui/material/Stack/Stack";
import { TitleBox } from "../../components/shared-components/title-box/title-box";
import { MiddleDivider } from "../../components/shared-components/dividers/middle-divider";

 const MockOperationPanel = () => {
  const navigate = useNavigate();

  return(
    <Stack direction='row' spacing={2}>
      <IconButton>
        <QrCodeScannerIcon/>
      </IconButton>
      <BlackButton sx={{width: '120px'}} onClick={() => navigate('/individualSellTicket/8080')}>
        Sell
      </BlackButton>
    </Stack>
)}

export const MyTicketPage = () =>{
  
  return (
    <PageContainer>
      <TitleBox title="我的票据"/>
      <MiddleDivider />
      <Stack direction='column' spacing={3}>
      {mockItemOverview.map(ow => 
        <LongCard 
          imageUrl={ow.src}
          title={ow.title}
          des={ow.des}
          operationsPanel={<MockOperationPanel />}
        />
      )}
      </Stack>
    </PageContainer>
  )
}