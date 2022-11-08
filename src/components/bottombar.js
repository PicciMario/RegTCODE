import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import InputBase from '@mui/material/InputBase';

export default function BottomBar(props) {

  const Search = styled('div')(({ theme }) => ({

    position: 'relative',

    borderRadius: theme.shape.borderRadius,

    // Colore (con effetto hover)
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginRight: theme.spacing(1),
    
    // Margine sinistro e larghezza
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },

  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({

    color: 'inherit',

    '& .MuiInputBase-input': {
      
      padding: theme.spacing(1, 1, 1, 0),
      
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      
      transition: theme.transitions.create('width'),

      // Larghezza 100% se mobile, 20ch se desktop
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },

    },
  }));


  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>

      <IconButton color="inherit">
        <HomeIcon onClick={() => props.navRoot()} />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            autoFocus 
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={props.searchText}
            onChange={e => props.setSearchText(e.target.value)}
          />
        </Search>

        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>

      </Toolbar>
    </AppBar>

  )

}