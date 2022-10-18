import React, { useContext } from 'react';

import { Card, Grid, Paper } from '@mui/material';
import { BsLightning } from 'react-icons/bs'
import MobileInnerLightning from '../Inner Conditions/mobileInnerLightning';
import { AppContext } from '../../context/AppContext';



const OtherLightningSplash = () => {
    const OtherLightning = ["Astrotech", "CIDCO Park"]
    const { showCountdowns, lightning } = useContext(AppContext)

    return (
        <Card elevation={10}>
            {OtherLightning.map((location, index) => <MobileInnerLightning key={index} states={lightning.filter(array => array.location == location)} location={location} />)}
        </Card>

    )
}


export default OtherLightningSplash