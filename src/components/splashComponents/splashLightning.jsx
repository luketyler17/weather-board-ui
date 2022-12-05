import React, { useContext, useState } from 'react';
import { Card, Grid, Paper, useMediaQuery } from '@mui/material';
import { BsLightning } from 'react-icons/bs'
import InnerLightning from './innerLightning';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import LightningSplashPop from './LightningSplashPop';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import CapeInnerLightning from './CapeInnerLightning';



const SplashLightning = ({ states }) => {
    // const CCSFSLightning = ["Cape Central", "CX-20/16/LZ", "CX-36/46", "CX-37/ASOC/PPF", "CX-40/41/SPOC", "Port"]
    // const KSCLightning = ["KSC Industrial", "LC-39", "SLF"]
    // const OtherLightning = ["Astrotech", "CIDCO Park"]
    const PSFBLightning = ["Patrick SFB"]
    const { showCountdowns,
        CCSFSLightning,
        KSCLightning,
        OtherLightning,
        setArea,
        setImagePath,
        setCookieData,
        area,
        site,
        capeLightningToggle,
        kscLightningToggle,
        psfbLightningToggle,
        otherLightningToggle,
        setOtherLightningToggle,
        setCapeLightningToggle,
        setKscLightningToggle

    } = useContext(AppContext)

    const navigate = useNavigate();
    const [capeToggle, setCapeToggle] = useState(true)
    const [kscToggle, setKscToggle] = useState(true)
    const [psfbToggle, setPsfbToggle] = useState(true)
    const [otherToggle, setOtherToggle] = useState(true)

    const hideOther = () => {
        OtherLightning.length === 0 ? setOtherLightningToggle(false) : setOtherLightningToggle(true)
    }

    const hideCape = () => {
        CCSFSLightning.length === 0 ? setCapeLightningToggle(false) : setCapeLightningToggle(true)
    }

    const hideKSC = () => {
        KSCLightning.length === 0 ? setKscLightningToggle(false) : setKscLightningToggle(true)
    }

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
const tabletFlex = useMediaQuery('(min-width: 1200px)')

    return (
        <Card elevation={5} xs={6} md={8} sx={{
            height: '50%',
            margin: '15px',
            bgcolor: 'primary.main'
        }}
        ><div style={{ position: 'relative', display: 'flex' }}>
                <h1 style={{
                    textAlign: "left",
                    margin: '10px',
                    width:(tabletFlex ? '97%' : '95%')

                }}><BsLightning /> Lightning</h1>
                <LightningSplashPop />
            </div>

            <div className="outerContainer" style={{
                display: 'flex',
            }}>
                <div className="textContainer" style={{
                    flex: '1',

                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {capeLightningToggle === true && hideCape()}
                        {capeLightningToggle === true &&
                            <div>
                                <Paper elevation={10}
                                    style={{

                                        marginTop: '15px',
                                        height: 'auto',
                                        width: (tabletFlex ? '99%' : '98%'),
                                        margin: '10px',
                                        paddingLeft: '5px',

                                    }}
                                    xs={2}
                                    md={4}
                                >

                                    <h2 onClick={handleCCSFS} style={{
                                        textAlign: "left",
                                        cursor: 'pointer',
                                        textDecoration: 'underline'

                                    }}>Cape Canaveral Space Force Station</h2>
                                    <div style={{
                                        display: 'flex',
                                        marginBottom: '5px',
                                        
                                        

                                    }}>
                                        <div style={{
                                            width: (tabletFlex ?'50%' : '100%'),
                                            margin: '0',
                                            
                                            display: 'flex',
                                            flexDirection: 'row',
                                            
                                        }}>
                                            <div style={{
                                                
                                                width: (tabletFlex ? (CCSFSLightning.length <=1 ? '35%' : '36%') : '70%'),
                                                
                                            }}>

                                            </div>
                                            <div style={{
                                                width: '20%',
                                                fontSize: '75%',
                                            }}>
                                                Status
                                            </div>
                                            <div style={{
                                                width: (tabletFlex ? '23%' : '20%'),
                                                fontSize: '75%',
                                                paddingLeft:(CCSFSLightning.length <=1 ? '2%' : '0%')
                                            }}>
                                                Start Time
                                            </div>
                                            <div style={{
                                                width: (tabletFlex? '28%' : '20%'),
                                                fontSize: '75%',
                                                paddingLeft:(CCSFSLightning.length <=1 ? '1%' : '0%')
                                            }}>
                                                End Time
                                            </div>
                                            <div style={{
                                                width: '20%',
                                                fontSize: '75%',
                                                paddingLeft:(CCSFSLightning.length <=1 ? '2%' : '0%')
                                            }}>
                                                {showCountdowns === true ? "Countdown" : ''}
                                            </div>
                                        </div>
                                        {tabletFlex && CCSFSLightning.length > 1 &&
                                            <div style={{
                                            display: 'flex',
                                            width: '50%',
                                            justifyContent: 'space-evenly',


                                        }}>

                                            <div style={{
                                                width: '36%'
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
                                                width: '28%',
                                                fontSize: '75%',
                                            }}>
                                                End Time
                                            </div>
                                            <div style={{
                                                width: '22%',
                                                fontSize: '75%',
                                            }}>
                                                {showCountdowns === true ? "Countdown" : ''}
                                            </div>
                                        </div>}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: (tabletFlex ? 'row' :'column'),
                                        flexWrap: 'wrap',
                                        
                                        width:'99.3%'
                                        

                                    }}>
                                        {CCSFSLightning.map((location, index) => <CapeInnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                                    </div>
                                </Paper>
                            </div>}
                        <div
                            style={{
                                width: '100%',
                                
                                display: 'flex',
                                flexDirection: (tabletFlex ?'row' : 'column')
                            }}>
                            {kscLightningToggle === true && hideKSC()}
                            {kscLightningToggle === true &&
                                <Paper elevation={10}
                                    style={{
                                        margin: '10px',
                                        height: 'auto',
                                        width: (tabletFlex ?'30%' : '98%'),

                                        flex: '1',
                                        paddingLeft: '5px'
                                    }}>
                                    <h2 onClick={handleKSC} style={{
                                        textAlign: "left",
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
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
                                            }}> {showCountdowns === true ? "Countdown" : ''}
                                            </div>
                                        </div>
                                    </div>
                                    {KSCLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                                </Paper>}
                            {otherLightningToggle === true && hideOther()}
                            {otherLightningToggle === true &&
                                <Card elevation={10}
                                    style={{

                                        margin: '10px',
                                        flex: '1 1 ',
                                        paddingLeft: '5px',
                                        width: (tabletFlex ? '30%' : '98%'),
                                        height: 'auto'

                                    }}>
                                    <h2 onClick={handleOther} style={{
                                        textAlign: "left",
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
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
                                                {showCountdowns === true ? "Countdown" : ''}
                                            </div>
                                        </div>
                                    </div>
                                    {OtherLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                                </Card>}
                            {psfbLightningToggle === true &&
                                <Card elevation={10}
                                    style={{

                                        margin: '10px',
                                        height: 'auto',
                                        width: (tabletFlex ? '30%' : '98%'),

                                        flex: '1 1 ',
                                        paddingLeft: '5px'

                                    }}>
                                    <h2 onClick={handlePatrick} style={{
                                        textAlign: "left",
                                        margin: '0',
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
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
                                                {showCountdowns === true ? "Countdown" : ''}
                                            </div>
                                        </div>
                                    </div>
                                    {PSFBLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                                </Card>}
                        </div>
                    </div>

                </div>
            </div>
        </Card>
    )
}


export default SplashLightning