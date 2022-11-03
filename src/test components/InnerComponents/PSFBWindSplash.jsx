import React, { useContext } from 'react';
import { Card} from '@mui/material';
import MobileInnerWind from '../Inner Conditions/mobileInnerWind';
import { AppContext } from '../../context/AppContext';


const PSFBWindSplash = () => {
    const PSFBcategories = ["25 kt observed", "Strong Winds", "Damaging Winds"]

    const {wind } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {PSFBcategories.map((category, index) => <MobileInnerWind key={index} states={wind.filter((item) => item.location === 'Patrick SFB').filter((i) => i.category === category)} category={category} />)}
        </Card>

    )
}

export default PSFBWindSplash