import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppContext } from '../context/AppContext';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ListItem } from '@mui/material';
import {Divider} from '@mui/material';

export default function AccessibilityMenu() {
  const {mode, setMode, defaultTheme, protTheme, duetTheme, tritTheme, theming, SetTheming, darkTheme, lightTheme} = useContext(AppContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorEl(null)
  }
  const handleDeutanopia = () => {
    SetTheming(lightTheme)
    setMode(duetTheme)
    setAnchorEl(null);
  };
  const handleProtanopia = () => {
    SetTheming(lightTheme)
    setMode(protTheme)
    setAnchorEl(null);
  };
  const handleTritanopia = () => {
    SetTheming(lightTheme)
    setMode(tritTheme)
    setAnchorEl(null);
  };
  const handleDefaults = () =>{
    setMode(defaultTheme)
    setAnchorEl(null);
  }

  const handleLightTheming = () =>{
    SetTheming(lightTheme)
    setAnchorEl(null);
  }

  const handleDarkTheming = () =>{
    SetTheming(darkTheme)
    setMode(defaultTheme)
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'text.primary'}}
      >
        <SettingsOutlinedIcon sx={{ margin:'0px', width:'60%', height:'80%'}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
        <ListItem>Themes</ListItem>
        <Divider sx={{bgcolor:'#01042F', height:'2px'}}/>
        <MenuItem onClick={handleLightTheming}>Light Mode</MenuItem>
        <MenuItem onClick={handleDarkTheming}>Dark Mode</MenuItem>
        <Divider sx={{bgcolor:'#01042F', height:'2px'}} />
        <ListItem>Accessibility</ListItem>
        <Divider sx={{bgcolor:'#01042F', height:'2px'}} />
        <MenuItem onClick={handleDefaults}>Default</MenuItem>
        <MenuItem onClick={handleProtanopia}>Protanopia</MenuItem>
        <MenuItem onClick={handleDeutanopia}>Deuteranopia</MenuItem>
        <MenuItem onClick={handleTritanopia}>Tritanopia</MenuItem>

      </Menu>
    </div>
  );
}
