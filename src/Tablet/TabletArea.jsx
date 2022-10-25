import React, { useContext } from 'react'
import TabletNav from './TabletNav'
import MobileNav from '../test components/MobileNav'

import {
    Grid, Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import { Box } from '@mui/material'

import Cookies from 'universal-cookie'
import { AppContext } from '../context/AppContext'
import AreaTabs from '../test components/location components/areatabs'


const cookies = new Cookies()
const TabletArea = () => {

    const { lightning, storm, wind, area, setArea, imagePath, setImagePath, showCountdowns } = useContext(AppContext)

    cookies.set('area', area, { path: '/' })
    cookies.set('imagePath', imagePath, { path: '/' })

    return (

        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Grid item marginBottom={2} xs={12} md={12} lg={12} xl={12} >
                    <Card >
                        <MobileNav />
                    </Card>
                </Grid>
                
                    <TabletNav />
                    <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Grid item xs={12} md={6} lg={6} xl={6}  marginTop={-30} marginLeft={38} marginBottom={-10}>
                        <Card elevation={10}  sx={{ display: 'flex', justifyContent: 'center', height: '80%', width: '80%', bgcolor: 'lightgrey', paddingTop: '2%' }} >
                            <img style={{ height: '95%', width: '95%' }} src={imagePath}></img>
                        </Card>
                    </Grid>
                    <Grid item xs={9} md={9} lg={9} xl={9} marginBottom={1} marginTop={1} marginLeft={7} sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid item lg={3} md={3} sm={3} />
                        <Card elevation={6}>
                            <AreaTabs />
                        </Card>
                    </Grid>
                    </Grid>
                
            
        </Grid>
        </Box >

    )
}

export default TabletArea