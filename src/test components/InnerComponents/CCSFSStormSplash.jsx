import React, { useContext } from 'react'
import { Card} from '@mui/material';
import MobileInnerStorm from '../Inner Conditions/mobileInnerStorm';
import { AppContext } from '../../context/AppContext';




const CCSFSStormSplash = () => {
    const CCSFSSevere = ['CCSFS']
    const { storm } = useContext(AppContext)

    return (

        <Card elevation={10} sx={{paddingTop:'2%'}}>

            {CCSFSSevere.map((location, index) => <MobileInnerStorm key={index} states={storm.filter((item) => item.location === 'CCSFS')} location={location} />)}

        </Card>


    )
}

export default CCSFSStormSplash