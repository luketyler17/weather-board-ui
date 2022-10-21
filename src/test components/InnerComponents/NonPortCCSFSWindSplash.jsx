import React, { useContext } from 'react';
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
import { RiWindyLine } from 'react-icons/ri'
import MobileInnerWind from '../Inner Conditions/mobileInnerWind';
import { AppContext } from '../../context/AppContext';


const NonPortCCSFSWindSplash = () => {
    const CCSFScategories = ["18 kt steady-state", "Strong Winds", "Damaging Winds"]

    const { showCountdowns, wind } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {CCSFScategories.map((category, index) => <MobileInnerWind key={index} states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === category)} category={category} />)}
        </Card>

    )
}

export default NonPortCCSFSWindSplash