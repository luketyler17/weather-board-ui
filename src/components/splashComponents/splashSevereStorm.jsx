import React, { useContext } from 'react'
import { Card, Grid, Paper } from '@mui/material';
import { RiThunderstormsLine } from 'react-icons/ri'
import SevereStormBar from './severeStormBar';
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
import StormSplashPop from './StormSplashInfoPop';



const SplashSevereStorm = ({ states }) => {
    const CCSFSSevere = ['CCSFS']
    const KSCSevere = ['KSC']
    const PSFBSevere = ['PSFB']
    const { showCountdowns, area, site, setImagePath, setCookieData, setArea, capeStormToggle, kscStormToggle, psfbStormToggle } = useContext(AppContext)
    const navigate = useNavigate()

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


    return (
        <Card elevation={5} sx={{
            height: '50%',
            margin: '15px',
            bgcolor:'primary.main'


        }}><div style={{display:'flex', position:'relative'}}>
            <h1 style={{
                
                width:'90%',
                textAlign: "left",
                margin:'10px',
                marginRight:'8%',
                marginLeft:'10px'

            }}><RiThunderstormsLine /> Severe Storms</h1>
            <StormSplashPop/>
            </div>
            <div className="outerContainer" style={{
                display: 'flex',
            }}>
                <div className="textContainer" style={{
                    flex: '1',
                }}>
                    <div style={{
                        display: 'flex'
                    }}>
                       {capeStormToggle === true && 
                       <Card elevation={10}
                            style={{
                               
                                margin: '10px',
                                height: '75%',
                                width: '50%',
                                flex: 1

                            }}>

                            <h2 onClick={handleCCSFS} style={{
                                textAlign: "left",
                                marginLeft: '5px',
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
                                    width: '70%',
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                }}>
                                    <div style={{
                                        width: '5%'
                                    }}><div style={{
                                        width: '95%',
                                    }}>

                                        </div>
                                    </div>
                                    <div style={{
                                        width: '20%',
                                    }}>
                                        <div style={{
                                            width: '95%',
                                            fontSize: '75%',
                                        }}>
                                            Status
                                        </div>
                                    </div>
                                    <div style={{
                                        width: '20%',

                                    }}>
                                        <div style={{
                                            width: '95%',
                                            fontSize: '75%',
                                        }}>
                                            Start Time
                                        </div>
                                    </div>
                                    <div style={{
                                        width: '20%',
                                    }}>
                                        <div style={{
                                            width: '95%',
                                            fontSize: '75%',
                                        }}>
                                            End Time
                                        </div>
                                    </div>
                                    <div style={{
                                        width: '20%'
                                    }}>
                                        <div style={{
                                            width: '95%',
                                            fontSize: '75%',
                                        }}>
                                            {showCountdowns===true? "Countdown" : ''}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {CCSFSSevere.map((location, index) => <SevereStormBar key={index} states={states.filter((item) => item.location === 'CCSFS')} location={location} />)}

                        </Card>}
                        {kscStormToggle === true &&
                            <Card elevation={10}
                            style={{
                                
                                margin: '10px',
                                height: '75%',
                                width: '50%',
                                flex: 1

                            }}>

                            <h2 onClick={handleKSC} style={{
                                textAlign: "left",
                                marginLeft: '5px',
                                cursor:'pointer',
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
                                    width: '70%',
                                    justifyContent: 'space-evenly'

                                }}>
                                    <div style={{
                                        width: '5%'
                                    }}></div>
                                    <div style={{
                                        width: '22%',
                                        paddingLeft: '22px',
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
                                        marginRight: '2px',
                                        fontSize: '75%',
                                    }}>
                                        {showCountdowns === true &&
                                            "Countdown"}
                                    </div>
                                </div>
                            </div>
                            {KSCSevere.map((location, index) => <SevereStormBar key={index} states={states.filter((item) => item.location === 'KSC')} location={location} />)}

                        </Card>}
                        {psfbStormToggle === true &&
                            <Card elevation={10}
                            style={{
                                
                                margin: '10px',
                                height: '75%',
                                width: '50%',
                                flex : 1

                            }}>

                            <h2 onClick={handlePatrick} style={{
                                textAlign: "left",
                                marginLeft: '5px',
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
                                    width: '70%',
                                    justifyContent: 'space-evenly'

                                }}>
                                    <div style={{
                                        width: '5%'
                                    }}></div>
                                    <div style={{
                                        width: '22%',
                                        paddingLeft: '22px',
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
                                        marginRight: '2px',
                                        fontSize: '75%',
                                    }}>
                                        {showCountdowns === true &&
                                            "Countdown"}
                                    </div>
                                </div>
                            </div>
                            {PSFBSevere.map((location, index) => <SevereStormBar key={index} states={states.filter((item) => item.location === location)} location={location} />)}

                        </Card>}
                    </div>

                </div>
            </div>
        </Card>
    )
}

export default SplashSevereStorm