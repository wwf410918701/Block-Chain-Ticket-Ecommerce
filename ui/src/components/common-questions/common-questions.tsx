import React, { useMemo, useState } from 'react';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box/Box';

import { CommonQuestions, mockCurrency } from "../../mock-data/mock-data";
// import './common-questions.scss'
import Button from '@mui/material/Button/Button';



interface CommonQuestionsProps {
  commonQuestions: CommonQuestions
}

const CommonQuestionsComponent = ({ commonQuestions }: CommonQuestionsProps) => {
  const [popupVisible, setPopupVisible] = useState(false); 
  const anchor = useMemo(() => document.querySelector('#common-question-icon'), [])
  const togglePopUpVisible = () => {
    console.log('toggle')
    setPopupVisible(!popupVisible)
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}> 
      <Button onClick={togglePopUpVisible}>
        <HelpOutlineIcon sx={{color: '#616161'}} id='common-question-icon'/>
      </Button>
      <Popover
        open={popupVisible}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={togglePopUpVisible}
      >
        <Box sx={{padding: '20px'}}>
          {commonQuestions.map(commonQuestion => (
            <>
              <div style={{fontWeight: 'bold'}}>{commonQuestion.question}</div>
              <div>{commonQuestion.answer}</div>
            </>
          ))}
        </Box>
      </Popover>
    </Box>
  )
}

export default CommonQuestionsComponent;