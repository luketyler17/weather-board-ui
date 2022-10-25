import React, { useContext, useNavigate } from 'react'
import Cookies from 'universal-cookie'
import { AppContext } from '../context/AppContext'
import SiteTabs from '../test components/location components/sitetabs'
import SiteImage from '../components/siteimage'
import { Drawer } from '@mui/material'
import {
    Grid, Card,
} from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TabletNav from './TabletNav'
import MobileNav from '../test components/MobileNav'
let wslogo = '../images/45th_Weather_Squadron_Patch.png';



const cookies = new Cookies()
const TabletSiteView = () => {
    const { area, setArea, site, setSite, imagePath, setImagePath, cookieData, setCookieData, showCountdowns, setShowCountdowns } = useContext(AppContext)
    cookies.get('site')


    const imageArray = [
        { location: 'Astrotech', imgsrc: './images/astrotech.PNG' },
        { location: 'Cape Central', imgsrc: './images/cape central.PNG' },
        { location: 'CIDCO Park', imgsrc: './images/cidco park.PNG' },
        { location: 'CX-20/16/LZ', imgsrc: './images/cx-20-16.PNG' },
        { location: 'CX-36/46', imgsrc: './images/cx-36-46.PNG' },
        { location: 'CX-37/ASOC/PPF', imgsrc: './images/cx-37-asoc.PNG' },
        { location: 'CX-40/41/SPOC', imgsrc: './images/cx-40-41.PNG' },
        { location: 'KSC Industrial', imgsrc: './images/KSC Industrial.PNG' },
        { location: 'LC-39', imgsrc: './images/LC-39.PNG' },
        { location: 'Port', imgsrc: './images/port.PNG' },
        { location: 'SLF', imgsrc: './images/SLF.PNG' }

    ]

    cookies.set('area', area, { path: '/' })
    cookies.set('imagePath', imagePath, { path: '/' })
    if (site !== []) {
        cookies.set('site', site, { path: '/' })
        cookies.set('area', area, { path: '/' })
    }

    return (

        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Grid item xs={12} md={12} lg={12} xl={12} marginBottom={2} >
                    <Card >
                        <MobileNav />
                    </Card>
                </Grid>
                <TabletNav />
                <div style={{display: 'flex', flexDirection:'column', width: '74%', justifyContent: 'right' }}>
                <Grid item xs={12} md={6} lg={6} xl={6}  marginTop={-30} marginLeft={6} marginBottom={-10}>
                    <Card elevation={10} sx={{ display: 'flex', justifyContent: 'center', height: '80%', width: '90%', bgcolor: 'lightgrey', padding: '1%' }}  >
                        <SiteImage images={imageArray.filter((item) => item.location === site)} />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6} marginBottom={1} marginTop={1} marginLeft={30} marginRight={-20} sx={{ marginRight: '50px', display: 'flex', justifyContent: 'center', margin: '1.5%' }}>
                    <Card elevation={6}>
                        <SiteTabs />
                    </Card>
                </Grid>
                </div>
            </Grid>
        </Box>

    )
}

export default TabletSiteView