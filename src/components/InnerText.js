import React, {useState, useEffect, useContext} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Card, Grid, Paper } from '@mui/material';
import Toggle from './Toggle.js'
import Avatar from './Avatar.js'
import { BsLightning } from 'react-icons/bs'
import SplashLightning from './splashComponents/splashLightning.jsx';
import SplashWind from './splashComponents/splashWind.jsx';
import SplashSevereStorm from './splashComponents/splashSevereStorm.jsx';
import { light } from '@mui/material/styles/createPalette.js';
import  {AppContext } from '../context/AppContext.jsx';




const InnerText = () => {
    const{loading, setLoading, lightning, storm, wind, setLightning, setStorm, setWind} = useContext(AppContext)


    return (
        <>
            {(loading === 1) ? (
                <div>
                    loading
                </div>) : (
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'white', p: 3 }}
                    style={{
                        height: '70%',
                        width:'100%',
                        
                        display:'flex',
                        justifyContent:'center'
                    }}

                >
                    <Grid style={{
                        height: '70%',
                        width:'100%',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        placeContent:'center',
                        paddingTop:'3%'
                    }}

                    >
                        <SplashLightning states={lightning} />
                        <SplashWind states={wind}/>
                        <SplashSevereStorm states={storm}/>
                        </Grid>
                </Box>

            )}
        </>
    )
}

export default InnerText