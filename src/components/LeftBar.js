import React, { useState } from 'react'
import { useContext } from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import CircularProgress from '@mui/material/CircularProgress'
import MapModal from './mapmodal'

let wslogo = '../images/45th_Weather_Squadron_Patch.png';


const drawerWidth = 240;


const cookies = new Cookies()

export default function LeftBar() {

    cookies.get('area')
    let userInfo = cookies.get('authentication')

    const { area, setArea, site, setSite, imagePath, setImagePath, cookieData, setCookieData, showCountdowns, setShowCountdowns } = useContext(AppContext)
    const navigate = useNavigate();

    const [checked, setChecked] = useState(true)
    const [loading, setLoading] = useState(false)
    cookies.get('site')



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
    const handleToggle = (event) => {
        if (checked === true) {
            setChecked(event.target.checked)
            navigate('/admin')
        } else {
            setChecked(event.target.checked)
            navigate('/')
        }

    }
        ;
    const handleSignIn = () => {
        setLoading(true)
        navigate('/sign_in')
        setLoading(false)
    }

    const handleSignOut = () => {
        setLoading(true)
        cookies.remove('authentication', { path: '/' })
        navigate('/')
        setLoading(false)

    }
    
    const handleCountdowns= ()=>{
        if (showCountdowns === true){
            setShowCountdowns(false)
            
        }else{
            setShowCountdowns(true)
            
        }
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
        }

    }
    if (loading === true) {
        return (
            <Box sx={{ display: 'flex', placeContent: 'center center', paddingTop: '10%' }}>
                <CircularProgress />
            </Box>
        )
    } else {

        return (
            <>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    
                    sx={{ border:'1px solid pink', display: 'flex', flexDirection: 'row', width: `90%`, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}
                >
                    <Toolbar sx={{width:'100%',display:'flex', flexDirection:'row', justifyContent:'space-evenly'}} xs={6} md={8} lg ={10} >
                        
                        <div style={{display:'flex', width:'40%', placeContent:'left'}}>
                        <Typography variant="h6" noWrap component="div" >
                            <h1 style={{ color: 'black', fontSize: '30px' }}><CloudOutlinedIcon sx={{ color: 'black', height: '40px', width: '40px' }} />&nbsp;Weather Warning eBoard</h1>
                        </Typography>
                        </div>
                        <div style={{ width:'40%', paddingLeft:'6%'}}>
                    <MapModal/>
                    </div>
                    
                    <div style={{width:'50%', display: 'flex', flexDirection: 'row', width: '20%', justifyContent: 'space-evenly'}}>
                        <Button sx={buttonSX} onClick={handleCountdowns}>
                            Show Countdowns
                        </Button>
                        {cookies.get('authentication') !== undefined &&
                            <Button href='/admin' sx={buttonSX}>Admin</Button>
                        }
                        {(cookies.get('authentication') === undefined) ? <Button onClick={handleSignIn} sx={buttonSX}>Sign In</Button> : <Button href='/' sx={buttonSX} onClick={handleSignOut} >Sign Out</Button>}

                    </div>
                        </Toolbar>
                </AppBar>

                <Drawer
                    sx={{
                        width: drawerWidth,

                        flexShrink: 1,
                        '& .MuiDrawer-paper': {
                            width: '10%',
                            boxSizing: 'border-box',
                            height: '100%',
                            border: '1px solid #01042F',
                            bgcolor: '#01042F',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                   
                >
                    <Toolbar sx={{ bgcolor: '#01042F', height: '30%', display: 'flex', placeContent: 'center' }}>
                        <img href='/' style={{ height: '150px', cursor: 'pointer', width: 'auto' }} src={wslogo} onClick={() => navigate('/')} />
                    </Toolbar>

                    <List sx={{ backgroundColor: '#01042F', height: '80%' }}>
                        <List>
                            <ListItem key='Locations' disablePadding />
                            <ListItemText primary={<h2 style={{ color: 'white' }}>Locations</h2>} />
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
                                <ListItem key={text} disablePadding>
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
                            <ListItem key='Other' disablePadding />
                            <ListItemButton key='Other Areas' sx={locationButtonSX} onClick={() => handleOther()} >
                                Other
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                            {['CIDCO Park', 'Astrotech'].map((text, index) => (
                                <ListItem key={text} disablePadding >
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
                            <Divider sx={{ bgcolor: 'white' }} />
                            <ListItemButton key='Patrick SFB' sx={locationButtonSX} onClick={() => handlePatrick()} >
                                Patrick SFB
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                        </List>
                    </List>

                </Drawer>
            </>
        );
    }
}


