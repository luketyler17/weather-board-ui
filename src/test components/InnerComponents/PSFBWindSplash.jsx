import InboxIcon from '@mui/icons-material/MoveToInbox';
import React, { useContext } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { Card, Grid, Paper } from '@mui/material';
import { RiWindyLine } from 'react-icons/ri'
import MobileInnerWind from '../Inner Conditions/mobileInnerWind';
import { AppContext } from '../../context/AppContext';


const PSFBWindSplash = () => {
    const PSFBcategories = ["25 kt observed", "Strong Winds", "Damaging Winds"]

    const { showCountdowns, wind } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {PSFBcategories.map((category, index) => <MobileInnerWind key={index} states={wind.filter((item) => item.location === 'Patrick SFB').filter((i) => i.category === category)} category={category} />)}
        </Card>

    )
}

export default PSFBWindSplash