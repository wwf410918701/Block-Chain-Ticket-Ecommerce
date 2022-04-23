import React from "react";

import Container from "@mui/material/Container/Container";

interface PageContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <Container disableGutters sx={{marginTop: '30px', padding: '30px'}}>
    {children}
  </Container>
)