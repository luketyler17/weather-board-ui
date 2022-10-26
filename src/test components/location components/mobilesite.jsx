import React, {useContext} from 'react'
import MobileNav from '../MobileNav'
import {
    Grid, Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import { Box } from '@mui/material'

import Cookies from 'universal-cookie'
import { AppContext } from '../../context/AppContext'
import SiteTabs from './sitetabs'
import SiteImage from '../../components/siteimage'
import SiteRing from '../../components/SiteRing'




const cookies = new Cookies()
const MobileSiteView = () => {

    const imageArray=[
        {location:'Astrotech', imgsrc:'./images/astrotech.PNG'},
        {location:'Cape Central', imgsrc:'./images/cape central.PNG'},
        {location:'CIDCO Park', imgsrc:'./images/cidco park.PNG'},
        {location:'CX-20/16/LZ', imgsrc:'./images/cx-20-16.PNG'},
        {location:'CX-36/46', imgsrc:'./images/cx-36-46.PNG'},
        {location:'CX-37/ASOC/PPF', imgsrc:'./images/cx-37-asoc.PNG'},
        {location:'CX-40/41/SPOC', imgsrc:'./images/cx-40-41.PNG'},
        {location:'KSC Industrial', imgsrc:'./images/KSC Industrial.PNG'},
        {location:'LC-39', imgsrc:'./images/LC-39.PNG'},
        {location:'Port', imgsrc:'./images/port.PNG'},
        {location:'SLF', imgsrc:'./images/SLF.PNG'}
        
    ]

    const { lightning, storm, wind, area, site, imagePath, setImagePath, showCountdowns } = useContext(AppContext)

    cookies.set('area', area, {path:'/'})
    cookies.set('imagePath', imagePath, {path:'/'})
    if (site!==[]){
        cookies.set('site', site, {path:'/'})
        cookies.set('area', area, {path:'/'})
    }

    return (

        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                <Grid item marginBottom={-10}  xs={12} md={12} lg={12} xl={12} >
                    <Card >
                        <MobileNav/>
                    </Card>
                </Grid>
                <Grid item xs={10.8} md={12} lg={12} xl={12} sx={{display:'flex', position:'center', height:'20%', margin:'1.5%'}}>
                    <Card elevation={10} sx={{position:'relative', display: 'flex', height: '165%', width:"auto", margin: '10px',padding:'1%', bgcolor: 'grey', justifyContent: 'center' }}>
                    {/* <Card elevation={10} sx={{position:'relative', display:'flex', justifyContent:'space-evenly', height:'120%', width:'100%', bgcolor:'lightgrey', padding:'1%'}} > */}
                    <Box >
                    
                    <SiteImage images={imageArray.filter((item)=>item.location===site)} />
                    <SiteRing item={lightning.filter((item) => item.location === site)} site={site}/>
                    
                    </Box>
                    </Card>
                </Grid>
                <Grid item  xs={12} md={12} lg={12} xl={12} sx={{display:'flex', justifyContent:'center', margin:'1.5%'}}>
                    <Card elevation={6}>
                        <SiteTabs />
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}

export default MobileSiteView