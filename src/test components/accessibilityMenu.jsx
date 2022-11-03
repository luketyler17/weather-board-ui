import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppContext } from '../context/AppContext';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function AccessibilityMenu() {
  const {setDeutanopia, setTritanopia, setProtanopia} = useContext(AppContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorEl(null)
  }
  const handleDeutanopia = () => {
    setDeutanopia(true)
    setProtanopia(false)
    setTritanopia(false)
    setAnchorEl(null);
  };
  const handleProtanopia = () => {
    setProtanopia(true)
    setDeutanopia(false)
    setTritanopia(false)
    setAnchorEl(null);
  };
  const handleTritanopia = () => {
    setTritanopia(true)
    setProtanopia(false)
    setDeutanopia(false)
    setAnchorEl(null);
  };
  const handleDefaults = () =>{
    setTritanopia(false)
    setProtanopia(false)
    setDeutanopia(false)
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
