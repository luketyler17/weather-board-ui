import React, { useContext} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiMenu } from 'react-icons/hi';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Cookies from 'universal-cookie';


const cookies = new Cookies()

export default function NavBarMenu() {
    cookies.get('area')
    let userInfo = cookies.get('authentication')
    const mobileFlex = useMediaQuery('(min-width:700px)')
    const { area, setArea, site, setSite, setImagePath, setCookieData} = useContext(AppContext)
    const navigate = useNavigate();
    cookies.get('site')

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCCSFS = () => {
    setArea(['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC'])
    setImagePath('./images/CCSFS.jpg')
    setCookieData({ area: area, site: site })
    navigate('/area')
}

const handleKSC = () => {
    setArea(['KSC Industrial', 'LC-39', 'SLF'])
    setImagePath('./images/KSCArea.jpg')
    setCookieData({ area: area, site: site })
    navigate('/area')
}

const handleOther = () => {
    setArea(['CIDCO Park', 'Astrotech'])
    setImagePath('./images/Other Area.jpg')
    setCookieData({ area: area, site: site })
    navigate('/area')
}

const handlePatrick = () => {
    setArea(['Patrick SFB'])
    setImagePath('./images/psfb.PNG')
    setCookieData({ area: area, site: site })
    navigate('/area')
}

  const buttonSX = {
    width: 'auto',
    color: 'white',
    backgroundColor: '#01042F',
    borderRadius: '20px',
    fontFamily: 'Kanit',
    border: 'none',
    textDecoration: 'underline',
    "&:hover": {
        color: '#01042F',
        backgroundColor: 'white',
        border: '1px solid #01042F',
        textDecoration: 'underline',
        fontWeight: 'bold'
    }
}
const locationButtonSX = {
    display: 'flex',
    textAlign: 'center',
    fontSize: '16px',
    color: 'white',
    fontWeight: '900',
    fontFamily: 'Kanit',
    bgcolor: '#01042F',
    height: '40px',
    "&:hover": {
        bgcolor: 'white', color: '#01042F', border: '1px solid #01042F'
    }
}
const siteButtonSX = {
    textAlign: 'center',
    fontSize: '13px',
    color: 'white',
    fontWeight: '800',
    fontFamily: 'Kanit',
    bgcolor: '#01042F',
    height: '40px',
    "&:hover": {
        bgcolor: 'white', color: '#01042F', border: '1px solid #01042F'
    }}

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
        <HiMenu style={{ height:(mobileFlex ? '40px' : '25px'), width:(mobileFlex ? '40px' : '25px')}}/>
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
        <MenuItem onClick={handleClose}>
            
                        <List>
                        <ListItem key='Home'  sx={locationButtonSX} onClick={() => navigate('/')} >
                        <ListItemText sx={{textAlign:'center'}} primary={<h4>Home</h4>} />
                            </ListItem>
                        <Divider sx={{ bgcolor: 'white' }} />
                            <ListItem key='Cape Canaveral SFS' sx={{ "&:hover": { bgcolor: 'white' } }} disablePadding />
                            <ListItemButton key='CCSFS'  sx={locationButtonSX} onClick={() => handleCCSFS()} >
                                Cape Canaveral SFS
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                            {['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC'].map((text, index) => (
                                <ListItem key={text} disablePadding >
                                    <ListItemButton
                                        sx={siteButtonSX}
                                        
                                        onClick={() => {
                                            setSite(text)
                                            setArea(['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC'])
                                            setCookieData({ area: area, site: site })
                                            navigate('/site')
                                        }}
                                    >{text}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider sx={{ bgcolor: 'white' }} />
                            <ListItem key='Kennedy Space Center' sx={{ display: 'flex', textAlign: 'center' }} disablePadding />
                            <ListItemButton key='KSC' sx={locationButtonSX} onClick={() => handleKSC()} >
                                Kennedy Space Center
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                            {['KSC Industrial', 'LC-39', 'SLF'].map((text, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton sx={siteButtonSX} 
                                        onClick={() => {
                                            setSite(text)
                                            setArea(['KSC Industrial', 'LC-39', 'SLF'])
                                            setCookieData({ area: area, site: site })
                                            navigate('/site')
                                        }}>
                                        {text}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider sx={{ bgcolor: 'white' }} />
                            <ListItemButton key='Patrick SFB' sx={locationButtonSX} onClick={() => handlePatrick()} >
                                Patrick SFB
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                            <ListItem key='Other' disablePadding />
                            <ListItemButton key='Other Areas' sx={locationButtonSX} onClick={() => handleOther()} >
                                Other
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                            {['CIDCO Park', 'Astrotech'].map((text, index) => (
                                <ListItem key={index} disablePadding >
                                    <ListItemButton sx={siteButtonSX}
                                        onClick={() => {
                                            setSite(text)
                                            setArea(['CIDCO Park', 'Astrotech'])
                                            setCookieData({ area: area, site: site })
                                            navigate('/site')
                                        }}>
                                        {text}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            
                        </List>
                    
        </MenuItem>

      </Menu>
    </div>
  );
}
