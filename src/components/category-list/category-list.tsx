import React from "react";

import Stack from "@mui/material/Stack/Stack";
import Box from "@mui/material/Box/Box";

interface CategoryListProps {
  children: JSX.Element[],
}

export const CategoryList = ({ children }: CategoryListProps) => (
  <Box>
    <Stack direction='row' spacing={2} justifyContent='center'>
      {children}
    </Stack>
  </Box>
)