import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppContext } from '../context/AppContext';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function AccessibilityMenu() {
  const {mode, setMode, defaultTheme, protTheme, duetTheme, tritTheme} = useContext(AppContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorEl(null)
  }
  const handleDeutanopia = () => {
    setMode(duetTheme)
    setAnchorEl(null);
  };
  const handleProtanopia = () => {
    setMode(protTheme)
    setAnchorEl(null);
  };
  const handleTritanopia = () => {
    setMode(tritTheme)
    setAnchorEl(null);
  };
  const handleDefaults = () =>{
    setMode(defaultTheme)
    setAnchorEl(null);
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SettingsOutlinedIcon sx={{color:'#01042F', margin:'0px', width:'60%', height:'80%'}}/>
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

        <MenuItem onClick={handleDefaults}>Default</MenuItem>
        <MenuItem onClick={handleProtanopia}>Protanopia</MenuItem>
        <MenuItem onClick={handleDeutanopia}>Deutanopia</MenuItem>
        <MenuItem onClick={handleTritanopia}>Tritanopia</MenuItem>

      </Menu>
    </div>
  );
}
