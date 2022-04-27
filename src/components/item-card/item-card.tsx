import React from "react";
import { useNavigate } from 'react-router-dom';

import Card from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import IconButton from "@mui/material/IconButton/IconButton";
import Typography from "@mui/material/Typography/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Box from "@mui/material/Box/Box";

import './item-card.scss';
import { ItemOverview } from "../../mock-data/mock-data";
import { GreyParagraphBox } from "../shared-components/grey-paragraph-box/grey-paragraph-box";
import Stack from "@mui/material/Stack/Stack";

interface ItemCardProps {
  itemOverview: ItemOverview
}

//TODO把写死的跳转到新加坡ticket page的链接改为动态链接
export const ItemCard = ({ itemOverview }: ItemCardProps) => {
  const navigate = useNavigate();

  return (
  <Card className="itemCard" >
    <CardMedia
      component="img"
      height="194"
      image={itemOverview.src}
      alt={`image of ${itemOverview.title}`}
      className='cardImage'
      onClick={() => {navigate('/ticketDetail/123')}}
    />
    <CardContent sx={{paddingBottom: '0px'}}>
      <Box component="div">
        <Typography variant='h6' className="title" noWrap >
          {itemOverview.title} 
        </Typography>
        <Typography variant='body1' color="text.first" className="paragraph" noWrap>
          {itemOverview.des} 
        </Typography>
      </Box>
    </CardContent>
    <CardActions disableSpacing sx={{marginTop: '10px'}}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{width: '100%'}}>
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Typography variant='h6' color='#757575'>By</Typography>
          <Avatar sx={{ bgcolor: deepOrange[500], cursor: 'pointer' }} onClick={() => navigate('/individualSeller/234')}>N</Avatar>
        </Stack>
      </Stack>
    </CardActions>
  </Card>)
}