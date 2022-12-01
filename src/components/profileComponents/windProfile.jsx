import React, {useContext} from 'react'
import { Card, Paper, useMediaQuery } from '@mui/material'
import { AppContext } from '../../context/AppContext'


import {Divider} from '@mui/material'

const WindProfile = () => {
const flexBasis = useMediaQuery('(min-width: 700px)')
const {windSplashToggle,
    setWindSplashToggle,
    psfbWindToggle,
    kscWindToggle,
    capeWindToggle,
    setCapeWindToggle,
    setKscWindToggle,
    setPsfbWindToggle,} = useContext(AppContext)


const handleWindSplash = () => {
   windSplashToggle === true ? setWindSplashToggle(false) : setWindSplashToggle(true)
}

const handleKSCWind = () => {
    kscWindToggle === true ? setKscWindToggle(false) : setKscWindToggle(true)
    
}

const handleCapeWind = () => {
    capeWindToggle === true ? setCapeWindToggle(false) :  setCapeWindToggle(true)
    
}

const handlePSFBWind = () => {
    psfbWindToggle === true ? setPsfbWindToggle(false) : setPsfbWindToggle(true)
    
}


return(
    <Card elevation={10} sx={
        {
            height:'90%',
            width:'97%',
            margin:'1.5%',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            flexDirection:'row',
            
        }
    }>
        <Paper elevation={2} sx={{ width:'100%', height:(flexBasis ? '20%' : '22%'), display:'flex', justifyContent:'center'}}>
        <label style = {{width:(flexBasis ? '40%' : '100%'), paddingLeft:(flexBasis ?'8%': '1%'), marginTop:(flexBasis ? '1.5%' : '.5%'), height:'10%'}}>
            <input type = 'checkbox'
            value= {'storms'}
            style={{
                margin:'1.5%',
                fontFamily:'Kanit'
            }}
            onChange = {handleWindSplash}
            />{windSplashToggle === false ? 'Enable All Wind Monitoring' : 'Disable All Wind Monitoring'}
        </label>
        </Paper>
        <div style ={{width:'100%',height:(flexBasis ? 'auto' :'75%'), display:'flex', flexDirection:'column', padding:(flexBasis ? '0%' : '2%'), marginTop:'-5%'}}>
            
            <label style={{width:'100%', paddingLeft:(flexBasis ?'15%': '0%'),  margin:'1%'}}>
                <input type= 'checkbox' value ={'Cape Winds'}
                style={{
                    margin:'1%'
                }}
                disabled= {windSplashToggle === false}
                onChange={handleCapeWind}/>{capeWindToggle === true ?
                    'Disable Cape Canaveral Wind Monitoring' : 'Enable Cape Canaveral Wind Monitoring'}
                
            </label>
            <label style={{width:'100%', paddingLeft:(flexBasis ?'15%': '0%'), margin:'1%'}}>
                <input type= 'checkbox' value = {'KSC Winds'}
                style={{
                    margin:'1%'
                }}
                disabled= {windSplashToggle === false}
                onChange={handleKSCWind}/>{kscWindToggle === true ?
                    'Disable Kennedy Space Center Wind Monitoring' : 'Enable Kennedy Space Center Wind Monitoring'}
            </label>
            <label style={{ width:'100%', paddingLeft:(flexBasis ?'15%': '0%'), margin:'1%'}}>
                <input type= 'checkbox' value={'PSFB Winds'}
                style={{
                    margin:'1%'
                }}
                disabled= {windSplashToggle === false}
                onChange={handlePSFBWind}/>{psfbWindToggle === true ?
                'Disable Patrick SFB Wind Monitoring' : 'Enable Patrick SFB Wind Monitoring'}
            </label>
        </div>
    </Card>
) 

}




export default WindProfile