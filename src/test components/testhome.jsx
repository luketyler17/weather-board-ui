import React from 'react'
import MobileNav from './MobileNav'
import {
    Grid, Card,
} from '@mui/material'
import { Box } from '@mui/material'
import SplashTabs from './splashtabs'
    


const TestHome = () => {
    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{marginBottom:'-50%'}} >
                    <Card >
                        <MobileNav/>
                    </Card>
                </Grid>
                <Box sx={{height:'51.5%'}}>
                <Grid item xs={12} md={12} lg={12} xl={24} sx={{width:'auto',display:'flex', justifyContent:'center', margin:'1.5%', marginTop:'-28%'}}>
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