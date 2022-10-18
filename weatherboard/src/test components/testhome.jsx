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



const TestHome = () => {
    return (

        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                <Grid item xs={12} md={12} lg={12} xl={12} >
                    <Card >
                        <MobileNav/>
                    </Card>
                </Grid>
                <Grid item xs={9} md={12} lg={12} xl={12} sx={{display:'flex', position:'center', height:'25%'}}>
                    <Card elevation={4} sx={{display:'flex', justifyContent:'center', height:'100%', width:'100%', bgcolor:'lightgrey',paddingTop:'2.5%'}} >
                    <img style={{height:'95%', width:'95%'}} src={'./images/wholemap.gif'}></img>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{display:'flex', justifyContent:'center'}}>
                    <Card elevation={6}>
                    <SplashTabs/>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}

export default TestHome