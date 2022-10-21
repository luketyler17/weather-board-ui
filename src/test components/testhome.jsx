import React from 'react'
import MobileNav from './MobileNav'
import {
    Grid, Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import { Box } from '@mui/material'
import SplashTabs from './splashtabs'
import PortraitMode from './PortraitMode';


const TestHome = () => {
    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{marginBottom:'-20%'}} >
                    <Card >
                        <MobileNav/>
                    </Card>
                </Grid>
                <Grid item xs={9} md={12} lg={12} xl={12} sx={{display:'flex', position:'center', height:'22%', marginBottom:'-35%', marginTop:'-18%'}}>
                    <Card elevation={10} sx={{display:'flex', justifyContent:'center', height:'100%', width:'120%', bgcolor:'lightgrey',paddingTop:'3%'}} >
                    <img style={{height:'95%', width:'95%'}} src={'./images/wholemap.gif'}></img>
                    </Card>
                </Grid>
                <Box sx={{height:'52%'}}>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{display:'flex', justifyContent:'center', margin:'1.5%'}}>
                    <Card elevation={6}>
                    <SplashTabs/>
                    </Card>
                </Grid>
                </Box>
            </Grid>
        </Box>

    )
}

export default TestHome