import React, {useContext} from 'react'
import MobileNav from '../MobileNav'
import {
    Grid, Card,
} from '@mui/material'
import { Box } from '@mui/material'
import LeftBar from '../../components/LeftBar'
import Cookies from 'universal-cookie'
import { AppContext } from '../../context/AppContext'
import AreaTabs from './areatabs'


const cookies = new Cookies()
const MobileArea = () => {

    const {area, imagePath} = useContext(AppContext)
    
    cookies.set('area', area, {path:'/'})
    cookies.set('imagePath', imagePath, {path:'/'})

    return (

        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                <Grid item sx={{marginBottom:'1%'}}  xs={12} md={12} lg={12} xl={12} >
                    <Card >
                        <LeftBar/>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{display:'flex', justifyContent:'center', margin:'1.5%'}}>
                    <Card elevation={6}>
                        <AreaTabs image={imagePath}/>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}

export default MobileArea