import React from "react";

import Box from "@mui/material/Box/Box";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from "@mui/material/InputBase/InputBase";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField/TextField";
// import Search from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";


export const SearchField = () => {

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange = {(e: any) => {
          console.log('SearchField');
          console.log(e.target.value)
        }}
      />
    </Search>
  )
}

const Search = styled('div')(({ theme }: any) => ({
  position: 'relative',
  borderRadius: '40px',
  backgroundColor: alpha('#424242', 0.15),
  '&:hover': {
    backgroundColor: alpha('#424242', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }: any) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }: any) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
