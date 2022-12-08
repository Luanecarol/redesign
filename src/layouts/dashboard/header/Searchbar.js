import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { TextField, Input, Slide, Button, InputAdornment, ClickAwayListener } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  top: 0,
  left: 0,
  width: '50%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: '2px',
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
      <div>
       
          <IconButtonAnimate onClick={handleOpen}>
            <Iconify icon={'eva:search-fill'} width={20} height={20} />
          </IconButtonAnimate>
       

       
          <SearchbarStyle>
          <TextField
           autoFocus
           fullWidth
           disableUnderline
           placeholder="Search…"
           startAdornment={
             <InputAdornment position="start">
               <Iconify
                 icon={'eva:search-fill'}
                 sx={{ color: 'text.disabled', width: 20, height: 20 }}
               />
             </InputAdornment>
           }
           sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
           id="outlined-basic" label="Outlined" variant="outlined" />

          </SearchbarStyle>
       
      </div>
    
  );
}
