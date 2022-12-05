import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppContext } from '../context/AppContext';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ListItem, List, useMediaQuery } from '@mui/material';
import {Divider} from '@mui/material';



export default function AccessibilityMenu() {
  const {showCountdowns, setShowCountdowns, mode, setMode, defaultTheme, protTheme, duetTheme, tritTheme, theming, SetTheming, darkTheme, lightTheme, setThemeToggle} = useContext(AppContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const mobileFlex = useMediaQuery('(min-width: 700px)')
  const open = Boolean(anchorEl);
  const handleCountdowns = () => {
    if (showCountdowns === true) {
        setShowCountdowns(false)
        setAnchorEl(null)
    } else {
        setShowCountdowns(true)
        setAnchorEl(null)
    }
}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorEl(null)
  }
  const handleDeutanopia = () => {
    SetTheming(lightTheme)
    setMode(duetTheme)
    setThemeToggle(false)
    setAnchorEl(null);
  };
  const handleProtanopia = () => {
    SetTheming(lightTheme)
    setMode(protTheme)
    setThemeToggle(false)
    setAnchorEl(null);
  };
  const handleTritanopia = () => {
    SetTheming(lightTheme)
    setMode(tritTheme)
    setThemeToggle(false)
    setAnchorEl(null);
  };
  const handleDefaults = () =>{
    setMode(defaultTheme)
    setAnchorEl(null);
  }

  const handleLightTheming = () =>{
    SetTheming(lightTheme)
    setThemeToggle(false)
    setAnchorEl(null);
  }

  const handleDarkTheming = () =>{
    SetTheming(darkTheme)
    setMode(defaultTheme)
    setThemeToggle(true)
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
        <SettingsOutlinedIcon sx={{height:(mobileFlex ?'40px' : '25px'), width:(mobileFlex ? '40px' : '25px'), marginBottom:'5px'}}/>
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
        <ListItem >Accessibility</ListItem>
        <Divider sx={{bgcolor:'#01042F', height:'2px'}} />
        <MenuItem onClick={handleDefaults}>Default</MenuItem>
        <MenuItem onClick={handleProtanopia}>Protanopia</MenuItem>
        <MenuItem onClick={handleDeutanopia}>Deuteranopia</MenuItem>
        <MenuItem onClick={handleTritanopia}>Tritanopia</MenuItem>
        {mobileFlex &&<>
          <Divider sx={{bgcolor:'#01042F', height:'2px'}} />
        <MenuItem paddingDisabled onClick={handleCountdowns}>{showCountdowns ? 'Hide Countdowns' : 'Show Countdowns'}</MenuItem>
        <Divider sx={{bgcolor:'#01042F', height:'2px'}} />
        </>}
        
      </Menu>
    </div>
  );
}
