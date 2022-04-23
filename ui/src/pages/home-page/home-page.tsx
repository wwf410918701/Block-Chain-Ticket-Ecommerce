import React from "react";

import Box from "@mui/material/Box/Box";

import { DiscoveryComponent } from "../../components/discovery-component/discovery-component";
import { AutoSlideWrapper } from "../../components/auto-slide-wrapper/auto-slide-wrapper";
import { mockDiscoveryAdvertisements, mockItemOverview } from "../../mock-data/mock-data";
import { ItemCard } from "../../components/item-card/item-card";
import { StaticSlideWrapper } from "../../components/static-slide-wrapper/static-slide-wrapper";
import { CategoryList } from "../../components/category-list/category-list";
import { PageContainer } from "../../components/shared-components/page-container/page-container";


export const HomePage = () => {
  const ads = [1,2,3].map(ad => mockDiscoveryAdvertisements)
  const itemOverviews = [1,2,3].map(ad => mockItemOverview)

  return (
    <>
      <AutoSlideWrapper>
        {ads.map(ad => (<DiscoveryComponent discoveryAdvertisements={ad}/>))}
      </AutoSlideWrapper>
      <PageContainer>
          <StaticSlideWrapper title="Popular Tickets">
            {itemOverviews.map(itemOverview => (
              <CategoryList>
                {itemOverview.map(io => (<ItemCard itemOverview={io}/>))}
              </CategoryList>
            ))}
          </StaticSlideWrapper>
          <StaticSlideWrapper title="Recommending Tickets">
            {itemOverviews.map(itemOverview => (
              <CategoryList>
                {itemOverview.map(io => (<ItemCard itemOverview={io}/>))}
              </CategoryList>
            ))}
          </StaticSlideWrapper>
          <StaticSlideWrapper title="Discount Tickets">
            {itemOverviews.map(itemOverview => (
              <CategoryList>
                {itemOverview.map(io => (<ItemCard itemOverview={io}/>))}
              </CategoryList>
            ))}
          </StaticSlideWrapper>
      </PageContainer>
    </>
  )
}