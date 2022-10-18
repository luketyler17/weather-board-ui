import React , {useContext}from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Card, Grid, Paper } from '@mui/material';
import { BsLightning } from 'react-icons/bs'
import InnerLightning from './innerLightning';
import { AppContext } from '../../context/AppContext';



const SplashLightning = ({ states }) => {
    const CCSFSLightning = ["Cape Central", "CX-20/16/LZ", "CX-36/46", "CX-37/ASOC/PPF", "CX-40/41/SPOC", "Port"]
    const KSCLightning = ["KSC Industrial", "LC-39", "SLF"]
    const OtherLightning = ["Astrotech", "CIDCO Park"]
    const PSFBLightning = ["Patrick SFB"]
    const {showCountdowns} = useContext(AppContext)

    return (
        <Card elevation={5} xs={6} md={8} sx={{
            height: '50%',
            margin: '15px',
        }}
            style={{
                backgroundColor: 'white'
            }}>
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
                        display: 'flex'
                    }}>
                        <Card elevation={10}
                            style={{
                                backgroundColor: 'white',
                                margin: '10px',
                                height: '75%',
                                width: '50%',
                                margin: '15px',
                                flex: '1',
                                paddingLeft: '5px'
                            }}
                                xs={2}
                                md={4}
                            >

                            <h2 style={{
                                textAlign: "left",
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
                                    width: '20%'
                                }}>
                                        Status
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                       Start Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                        End Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}> {showCountdowns===true &&
                                        "Countdown"}
                                    </div>
                                </div>
                            </div>
                            {CCSFSLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}

                        </Card>
                        <div
                            style={{
                                width: '50%',
                                marginRight: '25px',
                            }}>
                            <Card elevation={10}
                                style={{
                                    backgroundColor: 'white',
                                    margin: '10px',
                                    height: 'auto',
                                    width: '100%',
                                    margin: '15px',
                                    flex: '1 1 20em',
                                    paddingLeft: '5px'
                                }}>
                                <h2 style={{
                                    textAlign: "left",
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
                                    width: '20%'
                                }}>
                                        Status
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                        Start Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                        End Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>{showCountdowns===true &&
                                    "Countdown"}
                                    </div>
                                </div>
                                </div>
                                {KSCLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                            </Card>
                            <Card elevation={10}
                                style={{
                                    backgroundColor: 'white',
                                    margin: '10px',
                                    height: 'auto',
                                    width: '100%',
                                    margin: '15px',
                                    flex: '1 1 20em',
                                    paddingLeft: '5px'

                                }}>
                                <h2 style={{
                                    textAlign: "left",
                                    margin: '0'
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
                                    width: '20%'
                                }}>
                                        Status
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                        Start Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                        End Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>{showCountdowns===true &&
                                    "Countdown"}
                                    </div>
                                </div>
                                </div>
                                {PSFBLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                            </Card>
                        </div>
                    </div>

                    <Card elevation={10}
                        style={{
                        backgroundColor: 'white',
                        margin: '15px',
                        flex: '1 1 20em',
                        paddingLeft: '5px'

                    }}>
                        <h2 style={{
                            textAlign: "left",
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
                                    width: '20%'
                                }}>
                                        Status
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                        Start Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>
                                        End Time
                                    </div>
                                    <div style={{
                                    width: '20%'
                                }}>{showCountdowns===true &&
                                    "Countdown"}
                                    </div>
                                </div>
                            </div>
                        {OtherLightning.map((location, index) => <InnerLightning key={index} states={states.filter(array => array.location == location)} location={location} />)}
                    </Card>
                </div>
            </div>
        </Card>
    )
}


export default SplashLightning