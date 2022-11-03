import React, { useContext } from 'react'
import { Card} from '@mui/material';
import MobileInnerStorm from '../Inner Conditions/mobileInnerStorm';
import { AppContext } from '../../context/AppContext';

const PatrickStormSplash = () => {
    const PSFBSevere = ['PSFB']
    const {storm } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {PSFBSevere.map((location, index) => <MobileInnerStorm key={index} states={storm.filter((item) => item.location === 'PSFB')} location={location} />)}

        </Card>


    )
}

export default PatrickStormSplash;