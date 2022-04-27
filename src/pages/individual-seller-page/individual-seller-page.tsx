import React from "react";
import { useParams } from "react-router-dom";

import Divider from "@mui/material/Divider/Divider";
import Stack from "@mui/material/Stack";

import { ItemCard } from "../../components/item-card/item-card";
import { PageContainer } from "../../components/shared-components/page-container/page-container";
import { UserInfoDisplayBox } from "../../components/user-info-display-box/user-info-display-box";
import { mockItemOverview } from "../../mock-data/mock-data";

const mockBackGroundSrc ='https://lh3.googleusercontent.com/MLzUUoiZw3a35STffeg8zGWeOvb6WyYguOjd7DZR0iw1AV-BMUX2ehQW6ukcgkKU9TJu_lcpI5BNEFM_y7sPeJzNDlTn10L1nVWqLw=h600'
const mockProfilePhotoSrc = 'https://lh3.googleusercontent.com/4c4dqYwdIhtmAkeKAfwVJEQYaJqwgek3juaUSfTY9lhR--LOj8HyqUBzcXxzrVr-XZiWBk98PRg25Hf7M7Wlff0hLe5Vnq5lx3jFF9c=s130'
const mockDes = 'MOAR by Joan Cornellà is an unusual mansion in the metaverse proudly presented by FWENCLUB, where 5,555 creatures with their souls minted with the ERC721 blockchain as NFTs. Each of these "peacefully-living-together" humans, cyborgs or even zombies, is unique, hand-drawn by Spanish artist Joan Cornellà using over 200 unique attributes. You may even find shops, games, virtual exhibitions … and MOAR!'

export const IndividualSellerPage = () => {
  const params = useParams()  
  console.log(params.sellerID) 
  const mockItemOverviews = [1,2,3].map(ow => mockItemOverview)

  return (
    <>
    <UserInfoDisplayBox 
      backgroundSrc={mockBackGroundSrc} 
      profilePhotoSrc={mockProfilePhotoSrc}
      des={mockDes}
      name='Norman'
    />
    <PageContainer>
      <Divider sx={{marginBottom: '50px'}}>Items On Sell</Divider>
      <Stack direction='column' spacing={5}>
        {mockItemOverviews.map(mockItemOverview => (
          <Stack direction='row' spacing={2}>
            <ItemCard itemOverview={mockItemOverview[0]}/>
            <ItemCard itemOverview={mockItemOverview[1]}/>
            <ItemCard itemOverview={mockItemOverview[2]}/>
            <ItemCard itemOverview={mockItemOverview[3]}/>
          </Stack>
        ))}
      </Stack>
    </PageContainer>
    </>
  )
}