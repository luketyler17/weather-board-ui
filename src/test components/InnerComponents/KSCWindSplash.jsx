import InboxIcon from '@mui/icons-material/MoveToInbox';
import React, { useContext } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { Card, Grid, Paper } from '@mui/material';
import { RiWindyLine } from 'react-icons/ri'
import MobileInnerWind from '../Inner Conditions/mobileInnerWind';
import { AppContext } from '../../context/AppContext';


const KSCWindSplash = () => {
    const KSCcategories = ["18 kt steady-state", "Strong Winds", "Damaging Winds"]

    const { showCountdowns, wind } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {KSCcategories.map((category, index) => <MobileInnerWind key={index} states={wind.filter((item) => item.location === 'KSC').filter((i) => i.category === category)} category={category} />)}
        </Card>

    )
}

export default KSCWindSplash