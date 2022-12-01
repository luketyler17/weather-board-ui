import React, { useState, useContext } from 'react';
import { Card, Grid, Paper, useMediaQuery } from '@mui/material';
import { RiWindyLine } from 'react-icons/ri'
import InnerWind from './innerWInd'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
import WindSplashPop from './WindInfoPop';



const SplashWind = ({ states }) => {
    const CCSFScategories = ["18 kt steady-state", "22 kt steady-state", "Strong Winds", "Damaging Winds"]
    const KSCcategories = ["18 kt steady-state", "Strong Winds", "Damaging Winds"]
    const PSFBcategories = ["25 kt observed", "Strong Winds", "Damaging Winds"]
    const { showCountdowns, setArea, setCookieData, setImagePath, site, area, windSplashToggle, setWindSplashToggle, capeWindToggle, setCapeWindToggle, kscWindToggle, setKscWindToggle, psfbWindToggle, setPsfbWindToggle } = useContext(AppContext)

    const navigate = useNavigate();

    const handleCCSFS = () => {
        setArea(['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC'])
        setImagePath('./images/CCSFS.jpg')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }

    const handleKSC = () => {
        setArea(['KSC Industrial', 'LC-39', 'SLF'])
        setImagePath('./images/KSCArea.jpg')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }


    const handlePatrick = () => {
        setArea(['Patrick SFB'])
        setImagePath('./images/psfb.PNG')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }

    const tabletFlex = useMediaQuery('(min-width: 1200px)')


    return (
        <Card elevation={5} sx={{
            height: '50%',
            margin: '15px',
            bgcolor:'primary.main'
        }}><div style= {{ display:'flex', position:'relative'}}>
            <h1 style={{
                textAlign: "left",
                margin: '10px',
                width: (tabletFlex ? '97%' : '95%'),
            }}><RiWindyLine /> Winds</h1>
                <WindSplashPop/>
                </div>
            <div className="outerContainer" style={{
                display: 'flex',
                
            }}>
                <div className="textContainer" style={{
                    flex: '1',
                    
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: (tabletFlex ? undefined : 'column')
                    }}>
                        {capeWindToggle === true &&
                            <Card elevation={10}
                            style={{
                                margin: '10px',
                                height: '75%',
                                width: (tabletFlex ?'50%' : '98%' ),
                               
                                flex: '1',
                                paddingLeft: '5px'

                            }}>
                            <h2 onClick={handleCCSFS} style={{
                                textAlign: "left",
                                cursor: "pointer",
                                textDecoration:'underline',
                               
                            }}>Cape Canaveral Space Force Station</h2>
                            <div style={{
                                display: 'flex',
                                marginBottom: '5px',
                                
                            }}>
                                <div style={{
                                    width: '40%',
                                    margin: '0'
                                }}></div>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-evenly'

                                }}>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%'

                                    }}></div>
                                    <div style={{
                                        width: '20%',
                                        paddingLeft: '22px',
                                        fontSize: '75%'

                                    }}>
                                        Status
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%'

                                    }}>
                                        Start Time
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%'

                                    }}>
                                        End Time
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        marginRight: '2px',
                                        fontSize: '75%'
                                    }}>
                                        {showCountdowns === true &&
                                            "Countdown"}
                                    </div>
                                </div>
                            </div>
                            {CCSFScategories.map((category, index) => <InnerWind key={index} states={states.filter((item) => item.location === 'CCSFS').filter((i) => i.category === category)} category={category} />)}
                        </Card>}
                        {kscWindToggle === true &&
                            <Card elevation={10}
                            style={{
                                
                                margin: '10px',
                                height: '75%',
                                width: (tabletFlex ? '50%' : '98%'),
                               
                                flex: '1',
                                paddingLeft: '5px'
                            }}>
                            <h2 onClick={handleKSC} style={{
                                textAlign: "left",
                                cursor: "pointer",
                                textDecoration:'underline'   
                            }}>Kennedy Space Center</h2>
                            <div style={{
                                display: 'flex',
                                marginBottom: '5px',
                            }}>
                                <div style={{
                                    width: '40%',
                                    margin: '0'
                                }}></div>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-evenly'

                                }}>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',

                                    }}></div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',
                                        paddingLeft: '15px'
                                    }}>
                                        Status
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',

                                    }}>
                                        Start Time
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',

                                    }}>
                                        End Time
                                    </div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',
                                        marginRight: '2px'
                                    }}>
                                        {showCountdowns === true &&
                                            "Countdown"}
                                    </div>
                                </div>
                            </div>
                            {KSCcategories.map((category, index) => <InnerWind key={index} states={states.filter((item) => item.location === 'KSC').filter((i) => i.category === category)} category={category} />)}
                        </Card >}
                        {psfbWindToggle === true &&
                            <Card elevation={10}
                            style={{
                                
                                margin: '10px',
                                height: '75%',
                                width: (tabletFlex ? '50%' : '98%'),
                                
                                flex: '1',
                                paddingLeft: '5px'

                            }}>
                            <h2 onClick={handlePatrick} style={{
                                textAlign: "left",
                                cursor:'pointer',
                                textDecoration:'underline'
                            }}>Patrick Space Force Base</h2>
                            <div style={{
                                display: 'flex',
                                marginBottom: '5px',
                            }}>
                                <div style={{
                                    width: '40%',
                                    margin: '0'
                                }}></div>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-evenly'

                                }}>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',

                                    }}></div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',

                                        paddingLeft:'15px'
                                }}>
                                    Status
                                </div>
                                <div style={{
                                    width: '20%',
                                    fontSize: '75%',

                                }}>
                                    Start Time
                                </div>
                                <div style={{
                                    width: '20%',
                                    fontSize: '75%',

                                }}>
                                    End Time
                                </div>
                                <div style={{
                                    width: '20%',
                                    fontSize: '75%',

                                    marginRight:'2px'
                                }}>
                                {showCountdowns === true &&
                                    "Countdown"}
                            </div>
                    </div>
                </div >
                {PSFBcategories.map((category, index) => <InnerWind key={index} states={states.filter((item) => (item.location === 'Patrick SFB')).filter((i) => i.category === category)} category={category} />)}
        </Card >}
                    </div >

                </div >
            </div >
        </Card >
    )
}

export default SplashWind