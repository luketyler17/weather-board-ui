import React, { useContext } from 'react'
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
import { RiThunderstormsLine } from 'react-icons/ri'
import MobileInnerStorm from '../Inner Conditions/mobileInnerStorm';
import { AppContext } from '../../context/AppContext';




const PatrickStormSplash = () => {
    const PSFBSevere = ['PSFB']
    const { showCountdowns, storm } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {PSFBSevere.map((location, index) => <MobileInnerStorm key={index} states={storm.filter((item) => item.location === 'PSFB')} location={location} />)}

        </Card>


    )
}

export default PatrickStormSplash;