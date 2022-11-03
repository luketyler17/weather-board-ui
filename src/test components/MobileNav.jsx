import React, { useState } from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CircularProgress from '@mui/material/CircularProgress'
import {Grid }from '@mui/material';
import NavBarMenu from '../test components/menu'
import AccessibilityMenu from './accessibilityMenu'

const cookies = new Cookies()

export default function MobileNav() {

    cookies.get('area')

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    cookies.get('site')

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

                <Toolbar sx={{ width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems:'stretch', justifyContent: 'space-evenly'}}>
                    <Grid container spacing={-1}>
                        <Grid item xs={1} md={6} lg={6} xl={6} sx={{marginLeft:'-3%',display:'fixed', position:'left', paddingTop:'1%'}}>
                        <NavBarMenu />
                        </Grid>

                        
                        <Grid item xs={9} md={9} lg={9} xl={9} sx={{ marginLeft:'3%',display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            
                            <Typography  variant="h6" noWrap component="div" >
                                <h1 style={{ color: '#01042F', fontSize: '90%', paddingTop:'6%' }}>&nbsp;Weather Warning eBoard&nbsp;</h1>
                            </Typography>
                            



                        </Grid>
                        <Grid item  xs={1} md={1} lg={1} xl={1} sx={{ display: 'flex', justifyContent:'center', paddingBottom:'1%', marginRight:'-2%'}}>
                        <Button onClick={()=> navigate('/')}>
                        <HomeOutlinedIcon sx={{ color: '#01042F', height: '80%', width: '70%', margin:'0px' }} />
                        </Button>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1} xl={1} sx={{paddingTop:'1.5%'}}>
                        <AccessibilityMenu/>
                        </Grid>

                    </Grid>
                </Toolbar>

            </>
        );
    }
}