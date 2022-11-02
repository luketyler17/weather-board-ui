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

        <Box sx={{ width: '100%', height: '75vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <TabletNav />
                <div style={{ display: 'flex', flexDirection: 'column', width: '74%', justifyContent: 'right' }}>
                    <Grid item xs={12} md={6} lg={6} xl={6} marginBottom={1} marginTop={0} marginLeft={30} marginRight={-20} sx={{ marginRight: '50px', display: 'flex', justifyContent: 'center', margin: '1.5%' }}>
                            <Card elevation={6}>
                                <AreaTabs />
                            </Card>
                    </Grid>
                </div>

            </Grid>
        </Box >

    )
}

export default TabletArea