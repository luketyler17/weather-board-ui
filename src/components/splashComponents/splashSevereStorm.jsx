import React, { useContext } from 'react'
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
import { RiThunderstormsLine } from 'react-icons/ri'
import SevereStormBar from './severeStormBar';
import { AppContext } from '../../context/AppContext'




const SplashSevereStorm = ({ states }) => {
    const CCSFSSevere = ['CCSFS']
    const KSCSevere = ['KSC']
    const PSFBSevere = ['PSFB']
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
            }}><RiThunderstormsLine /> Severe Storms</h1>

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
                                width: '50%'

                            }}>

                            <h2 style={{
                                textAlign: "left",
                                marginLeft: '5px',

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
                                            Countdown
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {CCSFSSevere.map((location, index) => <SevereStormBar key={index} states={states.filter((item) => item.location === 'CCSFS')} location={location} />)}

                        </Card>
                        <Card elevation={10}
                            style={{
                                backgroundColor: 'white',
                                margin: '10px',
                                height: '75%',
                                width: '50%'

                            }}>

                            <h2 style={{
                                textAlign: "left",
                                marginLeft: '5px',
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

                        </Card>
                        <Card elevation={10}
                            style={{
                                backgroundColor: 'white',
                                margin: '10px',
                                height: '75%',
                                width: '50%'

                            }}>

                            <h2 style={{
                                textAlign: "left",
                                marginLeft: '5px',
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

                        </Card>
                    </div>

                </div>
            </div>
        </Card>
    )
}

export default SplashSevereStorm