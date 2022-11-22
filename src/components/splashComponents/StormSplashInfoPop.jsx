import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Divider } from '@mui/material';
import Link from '@mui/material';

export default function StormSplashPop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style= {{paddingTop:'10px'}}>
      <div aria-describedby={id} variant="contained" onClick={handleClick} >
      <HelpOutlineIcon sx={{color:'text.primary', cursor:'pointer'}}/>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       <h5 onClick={handleClose} style={{padding:'10px'}}>Severe Storms are defined as storms containing:
        <li>Damaging Winds of 50KTS or greater</li>
        <li>Hail stones of 0.75" or greater</li>
        <li>Present torndaoes</li>
        For more information regarding current weather violations or forecasts (including those for Tropical Storm activity), please call the 45 Weather Squadron at 321-853-8485 or visit &nbsp;
        <a href={'https://www.patrick.spaceforce.mil/About-Us/Weather/'}>https://www.patrick.spaceforce.mil/About-Us/Weather/</a>
       </h5>
      </Popover>
    </div>
  );
}