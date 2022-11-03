import React, { useContext } from 'react';
import { Card} from '@mui/material';
import MobileInnerLightning from '../Inner Conditions/mobileInnerLightning';
import { AppContext } from '../../context/AppContext';



const CCSFSLightningSplash = () => {
    const CCSFSLightning = ["Cape Central", "CX-20/16/LZ", "CX-36/46", "CX-37/ASOC/PPF", "CX-40/41/SPOC", "Port"]
    const { lightning } = useContext(AppContext)

    return (
        <Card elevation={10} sx={{paddingTop:'2%'}}>
            {CCSFSLightning.map((location, index) => <MobileInnerLightning key={index} states={lightning.filter(array => array.location == location)} location={location} />)}
        </Card>

    )
}


export default CCSFSLightningSplash