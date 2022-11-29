import React, { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import { Card, Grid, Paper } from '@mui/material';
import SplashLightning from './splashComponents/splashLightning.jsx';
import SplashWind from './splashComponents/splashWind.jsx';
import SplashSevereStorm from './splashComponents/splashSevereStorm.jsx';
import { AppContext } from '../context/AppContext.jsx';




const InnerText = () => {
    const {
        loading,
        lightning,
        storm,
        wind,
        themeToggle,
        stormSplashToggle,
        windSplashToggle,
        capeWindToggle, 
        kscWindToggle,
        psfbWindToggle,
        setWindSplashToggle,
        capeStormToggle,
        kscStormToggle,
        psfbStormToggle,
        setStormSplashToggle
    } = useContext(AppContext)
    const lightBox = {
        flexGrow: 1,
        bgcolor: 'text.primary',
        p: 3

    }

    const darkBox = {

        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3
    }
    const hideWindSplash = () =>{
        (capeWindToggle=== false && kscWindToggle === false && psfbWindToggle === false) ?
        setWindSplashToggle(false) : setWindSplashToggle(true)
    }
    const hideStormSplash = () =>{
        (capeStormToggle === false && kscStormToggle === false && psfbStormToggle === false) ?
        setStormSplashToggle(false) : setStormSplashToggle(true)
    }
    return (
        <>
            {(loading === 1) ? (
                <div>
                    loading
                </div>) : (
                <Box
                    component="main"
                    sx={themeToggle === false ? lightBox : darkBox

                    }
                    style={{
                        height: '70%',
                        width: '100%',

                        display: 'flex',
                        justifyContent: 'center',

                    }}

                >
                    <Grid style={{
                        height: '70%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        placeContent: 'center',
                        paddingTop: '3%',

                    }}

                    >
                        <SplashLightning states={lightning} />
                        {windSplashToggle === true && hideWindSplash()}
                        {windSplashToggle === true &&
                            <SplashWind states={wind}/>}
                        {stormSplashToggle === true && hideStormSplash()}
                        {stormSplashToggle === true &&
                            <SplashSevereStorm states={storm} />}
                    </Grid>
                </Box>

            )}
        </>
    )
}

export default InnerText