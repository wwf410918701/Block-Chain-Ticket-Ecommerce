import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";

import { mockItemOverview, mockTicketDetailData } from "../../mock-data/mock-data";
import { PhotoBox } from "../../components/photo-box/photo-box";
import { BuySellBox } from "../../components/buy-sell-box/buy-sell-box";
import { StaticSlideWrapper } from "../../components/static-slide-wrapper/static-slide-wrapper";
import { CategoryList } from "../../components/category-list/category-list";
import { ItemCard } from "../../components/item-card/item-card";
import { ItemDetailBox } from "../../components/item-detail-box/item-detail-box";
import { LineChart } from "../../components/line-chart/line-chart";
import { MiddleDivider } from "../../components/shared-components/dividers/middle-divider";
import { PageContainer } from "../../components/shared-components/page-container/page-container";

export const TicketPage = () => {
  //TODO fetch ticket info based on params
  const params = useParams()  
  console.log(params.ticketID) 
  const { title, overview, des, photos, subTitle } = mockTicketDetailData;
  const itemOverviews = [1,2,3].map(ad => mockItemOverview)

  return (
    <PageContainer>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{marginBottom: '20px'}} className='paragraph'>
        {subTitle}
      </Typography>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <PhotoBox photosrcs={photos}/>
        <BuySellBox lowestPrice={180} popularPrice={220}/>
      </Box>
      <MiddleDivider />
      <StaticSlideWrapper title="Recommending Tickets" inContainer>
        {itemOverviews.map(itemOverview => (
          <CategoryList>
            {itemOverview.map(io => (<ItemCard itemOverview={io}/>))}
          </CategoryList>
        ))}
      </StaticSlideWrapper>
      <MiddleDivider />
      <ItemDetailBox overview={overview} des={des} title={'Product Details'}/>
      <MiddleDivider />
      <LineChart title="Average Price History" targetDOMId={`item_${params.ticketID}_priceLineChart`}/>
    </PageContainer>
  )
}