import React, { useState } from 'react'
import { useContext } from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material'
import Cookies from 'universal-cookie';
import Stack from '@mui/material/Stack';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import FormControl from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress'
import {Grid }from '@mui/material';
import { HomeOutlined } from '@mui/icons-material';
import NavBarMenu from '../test components/menu'

let wslogo = '../images/45th_Weather_Squadron_Patch.png';
// import { AppContext } from '../App.js';

const drawerWidth = 240;


const cookies = new Cookies()

export default function MobileNav() {

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

    const handleCountdowns = () => {
        if (showCountdowns === true) {
            setShowCountdowns(false)

        } else {
            setShowCountdowns(true)

        }
    }

    const buttonSX = {
        width: 'auto',
        marginTop:'5%',
        height:'50%',
        color: '#01042F',
        backgroundColor: 'white',
        borderRadius: '8%',
        fontFamily: 'Kanit',
        fontSize:'6px',
        border: '1px solid #01042F',
        textDecoration: 'underline',
        "&:hover": {
            color: 'white',
            backgroundColor: '#01042F',
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
                {/* <AppBar
                    position="fixed"
                    
                    sx={{ border:'1px solid pink', display: 'flex', flexDirection: 'row', width: `100%`, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }
                    }
                > */}
                <Toolbar sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Grid container spacing={1}>
                        <Grid item xs={1} md={6} lg={6} xl={6} sx={{marginLeft:'-3%',display:'fixed', position:'left'}}>
                        <NavBarMenu />
                        </Grid>

                        
                        <Grid item xs={10} md={10} lg={10} xl={10} sx={{ marginLeft:'3%',display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            
                            <Typography  variant="h6" noWrap component="div" >
                                <h1 style={{ color: 'black', fontSize: '100%' }}>&nbsp;Weather Warning eBoard&nbsp;</h1>
                            </Typography>
                            



                        </Grid>
                        <Grid item  xs={1} md={2} lg={2} xl={2} sx={{ display: 'flex', justifyContent:'flex-end', marginRight:'-3%' }}>
                        <Button onClick={()=> navigate('/')}>
                        <CloudOutlinedIcon sx={{ color: 'black', height: '80%', width: '80%' }} />
                        </Button>
                        </Grid>

                    </Grid>
                </Toolbar>
                {/* </AppBar> */}

                {/* <Drawer
                    sx={{
                        width: '20%',

                        flexShrink: 1,
                        '& .MuiDrawer-paper': {
                            width: '20%',
                            boxSizing: 'border-box',
                            height: '100%',
                            border: '1px solid #01042F',
                            bgcolor: '#01042F',
                        },
                    }}
                    variant="permanent"
                    anchor="left" */}


                {/* <Toolbar sx={{ bgcolor: '#01042F', height: '50%', display: 'flex', placeContent: 'center' }}>
                        <img href='/' style={{ height: '150px', cursor: 'pointer', width: 'auto' }} src={wslogo} onClick={() => navigate('/')} />
                    </Toolbar> */}

                {/* <List sx={{ backgroundColor: '#01042F', height: '80%' }}>
                        <List>
                            <ListItem key='Locations' disablePadding />
                            <ListItemText primary={<h2 style={{ color: 'white' }}>Locations</h2>} />
                            <Divider sx={{ bgcolor: 'white' }} />
                            <ListItem key='Cape Canaveral SFS' sx={{ "&:hover": { bgcolor: 'white' } }} disablePadding />
                            <ListItemButton key='Cape Canaveral SFS' disablePadding sx={locationButtonSX} onClick={() => handleCCSFS()} >
                                Cape Canaveral SFS
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                            {['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC'].map((text, index) => (
                                <ListItem key={text} disablePadding >
                                    <ListItemButton
                                        sx={siteButtonSX}
                                        disablePadding
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
                            <ListItemButton key='Kennedy Space Center' sx={locationButtonSX} onClick={() => handleKSC()} disablePadding>
                                Kennedy Space Center
                            </ListItemButton>
                            <Divider sx={{ bgcolor: 'white' }} />
                            {['KSC Industrial', 'LC-39', 'SLF'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton sx={siteButtonSX} disablePadding
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
                            <ListItemButton key='Other' sx={locationButtonSX} onClick={() => handleOther()} disablePadding>
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
                    </List> */}

                {/* </Drawer> */}
            </>
        );
    }
}