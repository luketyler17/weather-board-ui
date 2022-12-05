import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibilityMenu from '../test components/accessibilityMenu';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import EmbeddedAccessibilityMenu from '../test components/embeddedAccessibility';
import { useMediaQuery } from '@mui/material';

const cookies = new Cookies()

export default function AvatarMenu() {
  const {setLoading} = React.useContext(AppContext)
  const mobileFlex = useMediaQuery('(min-width:700px)')
  const tabletFlex= useMediaQuery('(min-width: 1200px)')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    
    navigate('/sign_in')
    setAnchorEl(null)
    
}

  const handleSignOut = () => {
    
    cookies.remove('authentication', { path: '/' })
    navigate('/')
    
    setAnchorEl(null)

}
const handleMyAccount = () => {
  
  cookies.get('authentication', {path:'/'})
  navigate('/profile')
  
  setAnchorEl(null)
}
const handleAdmin = () => {
  cookies.get('authentication', {path:'/'})
  navigate('/admin')
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
      >
        <AccountCircleIcon sx={{color:'text.primary', height:(mobileFlex ? '40px' : '25px'), width:(mobileFlex ? '40px' : '25px'), marginRight:'-100%'}}/>
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

        {(cookies.get('authentication') === undefined) ?
         <MenuItem onClick={handleSignIn} >Sign In</MenuItem> : 
         <MenuItem href='/'  onClick={handleSignOut} >Sign Out</MenuItem>}
       {cookies.get('authentication') !== undefined &&
       <>
        <MenuItem onClick={handleMyAccount}>My account</MenuItem>
        {tabletFlex && <MenuItem onClick={handleAdmin}>Admin</MenuItem>}
        </>}
        
      </Menu>
    </div>
  );
}
