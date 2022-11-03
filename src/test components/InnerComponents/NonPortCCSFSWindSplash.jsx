import React, { useContext } from 'react';
import { Card} from '@mui/material';
import MobileInnerWind from '../Inner Conditions/mobileInnerWind';
import { AppContext } from '../../context/AppContext';


const NonPortCCSFSWindSplash = () => {
    const CCSFScategories = ["18 kt steady-state", "Strong Winds", "Damaging Winds"]

    const {wind } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {CCSFScategories.map((category, index) => <MobileInnerWind key={index} states={wind.filter((item) => item.location === 'CCSFS').filter((i) => i.category === category)} category={category} />)}
        </Card>

    )
}

export default NonPortCCSFSWindSplash