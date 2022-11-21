import React, { useContext, useState } from 'react';
import { Card, Grid, Paper } from '@mui/material';
import { BsLightning } from 'react-icons/bs'
import InnerLightning from './innerLightning';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';



const SplashLightning = ({ states }) => {
    const CCSFSLightning = ["Cape Central", "CX-20/16/LZ", "CX-36/46", "CX-37/ASOC/PPF", "CX-40/41/SPOC", "Port"]
    const KSCLightning = ["KSC Industrial", "LC-39", "SLF"]
    const OtherLightning = ["Astrotech", "CIDCO Park"]
    const PSFBLightning = ["Patrick SFB"]
    const { showCountdowns, setArea, setImagePath, setCookieData, area, site } = useContext(AppContext)

    const navigate = useNavigate();
    const [capeToggle, setCapeToggle] = useState(true)
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

    const handleOther = () => {
        setArea(['CIDCO Park', 'Astrotech'])
        setImagePath('./images/Other Area.jpg')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }

    const handlePatrick = () => {
        setArea(['Patrick SFB'])
        setImagePath('./images/psfb.PNG')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }


    return (
        <Card elevation={5} xs={6} md={8} sx={{
            height: '50%',
            margin: '15px',
            bgcolor: 'primary.main'
        }}
        >
            <h1 style={{
                textAlign: "left",
                margin: '10px',

            }}><BsLightning /> Lightning</h1>

            <div className="outerContainer" style={{
                display: 'flex',
            }}>
                <div className="textContainer" style={{
                    flex: '1',
                    
                }}>
                    <div style={{
                        display: 'flex',
                        
                    }}>
                        {capeToggle === true && <Paper elevation={10}
                            style={{
                                // backgroundColor: 'white',
                                marginTop: '15px',
                                height: '75%',
                                width: '50%',
                                marginLeft: '10px',
                                flex: '1',
                                paddingLeft: '5px',
                                
                            }}
                            xs={2}
                            md={4}
                        >

                            <h2 onClick={handleCCSFS} style={{
                                textAlign: "left",
                                cursor:'pointer',
                                textDecoration:'underline'
                
                            }}>Cape Canaveral Space Force Station</h2>
                            <div style={{
                                display: 'flex',
                                marginBottom: '5px',
                            }}>
                                <div style={{
                                    width: '50%',
                                    margin: '0'
                                }}></div>
                                <div style={{
                                    display: 'flex',
                                    width: '70%',
                                    justifyContent: 'space-evenly'

                                }}>
                                    <div style={{
                                        width: '5%'
                                    }}>

                                    </div>
                                    <div style={{
                                        width: '20%',
                                        fontSize: '75%',
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
                                    }}>
                                        {showCountdowns===true? "Countdown" : ''}
                                    </div>
                                </div>
                            </div>
                            {CCSFSLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}

                        </Paper>}
                        <div
                            style={{
                                width: '50%',
                                marginRight: '25px',
                            }}>
                            <Paper elevation={10}
                                style={{
                                    margin: '10px',
                                    height: 'auto',
                                    width: '100%',
                                    margin: '15px',
                                    flex: '1 1 20em',
                                    paddingLeft: '5px'
                                }}>
                                <h2 onClick={handleKSC} style={{
                                    textAlign: "left",
                                    cursor: 'pointer',
                                    textDecoration:'underline'
                                }}>Kennedy Space Center</h2>
                                <div style={{
                                    display: 'flex',
                                    marginBottom: '5px',
                                    
                                }}>
                                    <div style={{
                                        width: '50%',
                                        margin: '0'
                                    }}></div>
                                    <div style={{
                                        display: 'flex',
                                        width: '70%',
                                        justifyContent: 'space-evenly'

                                    }}>
                                        <div style={{
                                            width: '5%'
                                        }}></div>
                                        <div style={{
                                            width: '20%',
                                            fontSize: '75%',
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
                                        }}> {showCountdowns===true? "Countdown" : ''}
                                        </div>
                                    </div>
                                </div>
                                {KSCLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                            </Paper>
                            <Card elevation={10}
                                style={{
                                    
                                    margin: '15px',
                                    flex: '1 1 20em',
                                    paddingLeft: '5px',
                                    width: '100%',
                                    height: 'auto'

                                }}>
                                <h2 onClick={handleOther} style={{
                                    textAlign: "left",
                                    cursor: 'pointer',
                                    textDecoration:'underline'
                                }}>Other</h2>
                                <div style={{
                                    display: 'flex',
                                    marginBottom: '5px',
                                }}>
                                    <div style={{
                                        width: '50%',
                                        margin: '0'
                                    }}></div>
                                    <div style={{
                                        display: 'flex',
                                        width: '70%',
                                        justifyContent: 'space-evenly'

                                    }}>
                                        <div style={{
                                            width: '5%'
                                        }}></div>
                                        <div style={{
                                            width: '20%',
                                            fontSize: '75%',
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
                                        }}>
                                            {showCountdowns===true? "Countdown" : ''}
                                        </div>
                                    </div>
                                </div>
                                {OtherLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
            <Card elevation={10}
                style={{
                    
                    margin: '10px',
                    height: 'auto',
                    width: '48.3%',
                    marginTop: '-37px',
                    flex: '1 1 20em',
                    paddingLeft: '5px'

                }}>
                <h2 onClick={handlePatrick} style={{
                    textAlign: "left",
                    margin: '0',
                    cursor: 'pointer',
                    textDecoration:'underline'
                }}>Patrick Space Force Base</h2>
                <div style={{
                    display: 'flex',
                    marginBottom: '5px',
                }}>
                    <div style={{
                        width: '50%',
                        margin: '0'
                    }}></div>
                    <div style={{
                        display: 'flex',
                        width: '70%',
                        justifyContent: 'space-evenly'

                    }}>
                        <div style={{
                            width: '5%'
                        }}></div>
                        <div style={{
                            width: '20%',
                            fontSize: '75%',
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
                        }}>
                            {showCountdowns===true? "Countdown" : ''}
                        </div>
                    </div>
                </div>
                {PSFBLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
            </Card>
        </Card>
    )
}


export default SplashLightning