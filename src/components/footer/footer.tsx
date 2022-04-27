import React from "react";

import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";

import { PageContainer } from "../shared-components/page-container/page-container";
import { mockFooterData } from "../../mock-data/mock-data";


export const Footer = () => (
  <Box sx={{backgroundColor: '#242424', width: '100%vw'}}>
    <PageContainer >
      <Typography variant="h4" sx={{marginBottom: '20px', color: '#f5f5f5'}}>{'Slogan'}</Typography>
      <Stack direction='row' spacing={10} sx={{color: '#f5f5f5'}}>
        {mockFooterData.map(da => (
          <Stack direction='column' spacing={0.5}>
            <Typography variant="h6">{da.title}</Typography>
            <Stack direction='column' spacing={0.5}>
              {da.menuItems.map(menuItem => (
                <Typography variant='subtitle2'>
                  <a href={menuItem.src} style={{ textDecoration: 'none', color: '#f5f5f5'}}>
                    {menuItem.title}
                  </a>
                </Typography>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </PageContainer>
  </Box>
)