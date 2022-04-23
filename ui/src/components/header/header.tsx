import React from "react";
import { useNavigate } from 'react-router-dom';

import AppBar from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";

import { SearchField } from "../search-field/search-field";
import { CurrencySelector } from "../currency-selector/currency-selector";
import { mockCurrency, mockCommonQuestions } from "../../mock-data/mock-data";
import CommonQuestionsComponent from "../common-questions/common-questions";
import './header.scss';
import { radiusButton }from '../inline-styles-props';
import { rootUrl } from "../../routers";

const Header = () => {
  const itemFontSize = "h6";
  const navigate = useNavigate();

  return (
    <AppBar elevation={0} position='relative'>
      <Toolbar className="default" sx={{justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', cursor: 'pointer' }}}
            onClick={() => navigate('/')}
          >
            LOGO
          </Typography>
          <Box sx={{width: '450px'}}>
            <SearchField />
          </Box>
          <CurrencySelector currencyData={mockCurrency} />
        </Box>
        <Box className="header-item-group">
          <Button onClick={() => {navigate(rootUrl)}}>
            <Typography className="header-item" variant={itemFontSize}>发现</Typography>
          </Button>
          <Button onClick={() => {navigate(rootUrl + 'myTickets/')}}>
            <Typography className="header-item" variant={itemFontSize}>我的票券</Typography>
          </Button>
          <Button>
            <Typography className="header-item" variant={itemFontSize}>购买票券</Typography>
          </Button>
          <Button onClick={() => navigate('/releaseTicket/3000')}>
            <Typography className="header-item" variant={itemFontSize}>发行票券</Typography>
          </Button>
          <Button>
            <Typography className="header-item" variant={itemFontSize}>社群</Typography>
          </Button>
        </Box>
        <Box className="header-item-group">
          <CommonQuestionsComponent commonQuestions={mockCommonQuestions} />
          <Button className="dynamicColorButton defaultButton" sx={radiusButton}>
            <Typography sx={{color: 'rgb(255, 255, 255)'}} variant={itemFontSize}>登录</Typography>
          </Button>
          <Button className="defaultButton" sx={{border: '1px solid', borderColor: 'rgba(2, 2, 3, 0.08)', ...radiusButton}}>
            <Typography className="header-item" variant={itemFontSize}>注册</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;