import React, { useContext } from 'react';
import { Card} from '@mui/material';
import MobileInnerLightning from '../Inner Conditions/mobileInnerLightning';
import { AppContext } from '../../context/AppContext';



const OtherLightningSplash = () => {
    
    const { OtherLightning, lightning } = useContext(AppContext)

    return (
        <Card elevation={10} sx={{paddingTop:'2%'}}>
            {OtherLightning.map((location, index) => <MobileInnerLightning key={index} states={lightning.filter(array => array.location == location)} location={location} />)}
        </Card>

    )
}


export default OtherLightningSplash