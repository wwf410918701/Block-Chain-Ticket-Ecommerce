import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CardContent from "@mui/material/CardContent/CardContent";
import TextField from "@mui/material/TextField/TextField";
import EuroIcon from '@mui/icons-material/Euro';
import Box from "@mui/material/Box/Box";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Modal from "@mui/material/Modal/Modal";
import TimelineIcon from '@mui/icons-material/Timeline';
import Button from "@mui/material/Button";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { PhotoBox } from "../../components/photo-box/photo-box";
import { GreyParagraphBox } from "../../components/shared-components/grey-paragraph-box/grey-paragraph-box";
import { MiddleDivider } from "../../components/shared-components/dividers/middle-divider";
import { PageContainer } from "../../components/shared-components/page-container/page-container";
import { mockItemOverview, mockTicketDetailData } from "../../mock-data/mock-data";
import BasicTable from "../../components/basic-table/basic-table";
import { BlackButton } from "../../components/shared-components/buttons/black-button";
import { LineChart } from "../../components/line-chart/line-chart";
import { CollapseAccordionPanel } from "../../components/shared-components/collapse-accordion/collapse-accordion";
import { StaticSlideWrapper } from "../../components/static-slide-wrapper/static-slide-wrapper";
import { CategoryList } from "../../components/category-list/category-list";
import { ItemCard } from "../../components/item-card/item-card";

interface OperationCardProps {
  children: JSX.Element | JSX.Element[],
  header: JSX.Element | JSX.Element[],
}



const OperationCard = ({ children, header }: OperationCardProps) => (
  <Card sx={{width: '550px'}}>
    <CardHeader title={
      <Stack direction='row' spacing={2}>
      {header}
      </Stack>
    }/>
    <CardContent>
      {children}
    </CardContent>
  </Card>
)

const style = {
  display: 'flex',
  flexDirection: 'column',
  justiyContent: 'center',
  alignItems: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const IndividualTicketSellPage = () => {
  const params = useParams()  
  console.log(params.ticketID) 
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {setShowModal(false)}
  const handleOpen = () => {setShowModal(true)}

  const itemOverviews = [1,2,3].map(ad => mockItemOverview)
  const { title, overview, des, photos, subTitle } = mockTicketDetailData;

  return (
    <PageContainer>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{marginBottom: '20px'}} className='paragraph'>
        {subTitle}
      </Typography>
      <Stack direction='row' justifyContent='space-between'>
        <Stack>
          <PhotoBox photosrcs={photos}/>
          <OperationCard header={
            <>
              <ProductionQuantityLimitsIcon />
              <GreyParagraphBox des="Product Detail"/>
            </>}
          >
            <CollapseAccordionPanel title='Description'>
              <Typography>
              “MOAR” is an unusual mansion in the metaverse where 5,555 creatures with their souls minted with the ERC721 blockchain as NFTs. Guests staying at the MOAR, including humans, zombies and cyborgs, live peacefully together. Each is unique, hand-drawn by Spanish artist Joan Cornellà using over 180 unique attributes. Here you can find shops, games, virtual exhibitions and…MOAR!
              </Typography>
            </CollapseAccordionPanel>
            <CollapseAccordionPanel title='Transaction History'>
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
            </CollapseAccordionPanel>
            <CollapseAccordionPanel title='Details'>
              <Stack spacing={2}>
                { Object.keys(overview).map(ikey => (
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <Typography >
                        {ikey}
                      </Typography>
                      <Typography variant='subtitle2'>
                        {overview[ikey]}
                      </Typography>
                    </Stack>
                ))}
              </Stack>
            </CollapseAccordionPanel>
          </OperationCard> 
        </Stack>
        <Stack spacing={5}>
          <OperationCard header={
            <>
              <AccessTimeIcon />
              <GreyParagraphBox des="You can sale before May 11, 2022 at 6:30am AEST "/>
            </>
            }
          >
            <Typography variant="h5" sx={{marginBottom: '10px'}}>
                Price to sell
            </Typography>
            <TextField fullWidth 
              label={
              <Stack alignItems='center' flexDirection='row' >
                <EuroIcon/> 
                <Box>Euro</Box>
              </Stack>} 
              id="priceToSell" 
            />
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
              <Button variant='contained'>
                Confirm
              </Button>
            </Box>
          </OperationCard>
          <OperationCard 
            header={
            <>
              <LocalOfferIcon />
              <GreyParagraphBox des="Buyers' Offers"/>
            </>}
          >
            <BasicTable operationCallBack={handleOpen}/>
            <Modal
              open={showModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Sure to accept offer?
                </Typography>
                <Stack direction='row' spacing={2} sx={{marginTop: '20px'}}>
                  <Button onClick={() => {handleClose()}} variant='contained' color='success'>
                    Confirm
                  </Button>
                  <BlackButton onClick={handleClose}>
                    Cancel
                  </BlackButton>
                </Stack>
              </Box>
            </Modal>
          </OperationCard>
          <OperationCard header={
            <>
              <TimelineIcon />
              <GreyParagraphBox des="Buyers' Offers"/>
            </>}
          >
            <LineChart  targetDOMId={`item_${params.ticketID}_priceLineChart`}/>
          </OperationCard>
        </Stack>
      </Stack>
      <MiddleDivider/>
      <StaticSlideWrapper title="Relative Tickets" inContainer>
        {itemOverviews.map(itemOverview => (
          <CategoryList>
            {itemOverview.map(io => (<ItemCard itemOverview={io}/>))}
          </CategoryList>
        ))}
      </StaticSlideWrapper>
    </PageContainer>
  )
} 