import React, { useContext } from 'react';
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
import { RiWindyLine } from 'react-icons/ri'
import InnerWind from './innerWInd'
import { AppContext } from '../../context/AppContext'


const SplashWind = ({ states }) => {
    const CCSFScategories = ["18 kt steady-state", "22 kt steady-state", "Strong Winds", "Damaging Winds"]
    const KSCcategories = ["18 kt steady-state", "Strong Winds", "Damaging Winds"]
    const PSFBcategories = ["25 kt observed", "Strong Winds", "Damaging Winds"]
    const { showCountdowns } = useContext(AppContext)


    return (
        <Card elevation={5} sx={{
            height: '50%',
            margin: '15px',

        }} style={{
            backgroundColor: 'white'
        }}>
            <h1 style={{
                textAlign: "left",
                margin: '10px',
            }}><RiWindyLine /> Winds</h1>

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

                            }}>
                            <h2 style={{
                                textAlign: "left",
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
                        </Card>
                        <Card elevation={10}
                            style={{
                                backgroundColor: 'white',
                                margin: '10px',
                                height: '75%',
                                width: '50%',
                                margin: '15px',
                                flex: '1',
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
                        </Card >
                        <Card elevation={10}
                            style={{
                                backgroundColor: 'white',
                                margin: '10px',
                                height: '75%',
                                width: '50%',
                                margin: '15px',
                                flex: '1',
                                paddingLeft: '5px'

                            }}>
                            <h2 style={{
                                textAlign: "left",
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
        </Card >
                    </div >

                </div >
            </div >
        </Card >
    )
}

export default SplashWind