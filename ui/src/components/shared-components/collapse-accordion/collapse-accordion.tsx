import React from "react";

import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from "@mui/material/Typography/Typography";

interface AccordionPanelProps {
  title: string
  children: JSX.Element | JSX.Element[]
}

export const CollapseAccordionPanel = ({ title, children }: AccordionPanelProps) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${title}_panel1a-content`}
      id={`${title}_accordion-header`}
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </Accordion>
)