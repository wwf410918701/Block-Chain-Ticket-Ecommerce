import React, { useState }  from "react";

import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton";
import SwipeableViews from 'react-swipeable-views';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from "@mui/material/Typography/Typography";


interface SlideWrapperProps {
  children: JSX.Element[],
  title?: string;
  inContainer?: boolean
}

//TODO slide滑动可以循环
export const StaticSlideWrapper = ({ children, title, inContainer }: SlideWrapperProps) => {
  const [index, setIndex] = useState(0);

  let classStr = ''
  if(inContainer) {
    classStr = ' inBox'
  }

  const choosePreAd = () => {
    if(index === 0) {
      // setIndex(children.length-1)
      return;
    }
    setIndex(index - 1);
  }

  const chooseNextAd = () => {
    if (index === (children.length-1)) {
      // setIndex(0)
      return;
    }
    setIndex(index + 1);
  }

  return(
    <>
      {title?
        (<Typography sx={{ marginBottom: '20px'}} variant='h5'>
          {title}
        </Typography>)
        :
        null
      }
      <Box sx={{display: 'flex', flexDirection: 'row', position: 'relative', alignItems: 'center', justifyContent: 'center', marginBottom: '50px' }}>
        {index === 0?
          null
          :
          (<IconButton 
              onClick={choosePreAd}
              sx={{border: '1px'}}
            >
              <ChevronLeftIcon />
            </IconButton>)
        }
        <SwipeableViews index={index} 
        onChangeIndex={function (index: number): void {
          setIndex(index);
        }}
        >
          {children}
        </SwipeableViews>
        {index === (children.length -1)?
          null
          :
          (<IconButton
            onClick={chooseNextAd}
          >
            <ChevronRightIcon />
          </IconButton>)}
      </Box>
    </>
  )
}