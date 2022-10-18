import React from "react";
import { Card, Grid, Paper, FormGroup, FormControlLabel } from "@mui/material"
import { useState, useContext } from "react"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FormControl from "@mui/material";
import CheckboxComponent from "./Checkbox";
import LightningInputText from "../components/splashComponents/LightningInputText";
import AdminButton from "./Button";
import InnerLightning from "../components/splashComponents/innerLightning";
import TypeCheckBox from "./TypeCheckbox";
import ViolationCheckbox from "./ViolationCheckbox";
import { AppContext } from "../context/AppContext";
import SevereStormBar from "../components/splashComponents/severeStormBar";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereStormButton from "./severeAdminComponents/SevereStormButton";
import SSViolationCheckbox from "./SSViolationCheckbox";
import StormLocation from "./severeAdminComponents/StormLocations";
import SevereStormConditions from "./severeAdminComponents/SeverStormConditions";
import SevereStormInputText from "./severeAdminComponents/SevereStormInputText";
import InnerStormConditions from "../components/splashComponents/innerStormConditions";
import { RiThunderstormsLine } from 'react-icons/ri'

const SevereStormViolation = () => {
    const stormLocation = ["Cape Canaveral", "Kennedy Space Center", "Patrick Space Force Base"]
    const { storm, showCountdowns } = useContext(AppContext)

    const CCSFSSevere = ['CCSFS']
    const KSCSevere = ['KSC']
    const PSFBSevere = ['PSFB']
    const [stormLocationChecked, setStormLocationChecked] = useState([]);
    const [stormConditions, setStormConditions] = useState({})
    const [stormConditionsChecked, setStormConditionsChecked] = useState([]);
    const [severeStormTime, setSevereStormTime] = useState('')
    const [severeStormTime2, setSevereStormTime2] = useState('')
    const [severeStormStartTime, setSevereStormStartTime] = useState('')
    const [severeStormEndTime, setSevereStormEndTime] = useState('')
    const [severeType, setSevereType] = useState([])

    return (
        <Card elevation={5} sx={{
            height: '50%',
            margin: '15px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
        }}>

            <h1 style={{
                textAlign: "left",
                height: '50px',
                width: '100%',
                paddingLeft: '10px'
            }}> <RiThunderstormsLine/> Severe Storm</h1>
            <Card style={{ backgroundColor: 'grey', width: '45%', display: 'flex', justifyContent: "center", margin: '5px', }}>
                <Grid container spacing={1}>



                    <Grid item xs={12}>
                        <Paper style={{

                            margin: '10px',
                            height: '100%',
                            
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                      


                        }}>

                            <div>
                                <h1 style={{
                                    textAlign: "left",
                                    paddingLeft: "10px"

                                }}>Locations</h1>

                            </div>
                            <div>
                                <h4 style={{ fontSize: '15px' }}><StormLocation location={stormLocation} stormLocationChecked={stormLocationChecked} setStormLocationChecked={setStormLocationChecked} /></h4>
                            </div>
                        </Paper>

                    </Grid>
                    <Grid item xs={13}>
                        <Paper style={{
                            backgoundColor: '#000',
                            margin: '10px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <div>
                                <h1 style={{
                                    textAlign: "left",
                                    paddingLeft: '10px'
                                }}>Expected Conditions</h1>

                            </div>
                            <div>
                                <Grid item xs={13}>
                                    <h4 style={{ fontSize: '15px' }}><SevereStormConditions severeType={severeType} setSevereType={setSevereType} stormConditions={stormConditions} setStormConditions={setStormConditions} stormConditionsChecked={stormConditionsChecked} setStormConditionsChecked={setStormConditionsChecked} /></h4>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={13}  >
                        <Paper style={{
                            backgoundColor: '#000',
                            margin: '10px',
                            height: '90%',
                        }}>
                            <div>
                                <h1 style={{
                                    textAlign: "left", paddingLeft: '10px',

                                }}>Time</h1>
                            </div>
                            <div  style={{ display:'flex', flexDirection:'row'}}>
                                <div style={{width:'70%', height:'auto'}}>
                                    <SevereStormInputText setSevereStormTime={setSevereStormTime} severeStormTime={severeStormTime} severeStormTime2={severeStormTime2} setSevereStormTime2={setSevereStormTime2} setSevereStormStartTime={setSevereStormStartTime} severeStormStartTime={severeStormStartTime} severeStormEndTime={severeStormEndTime} setSevereStormEndTime={setSevereStormEndTime} />
                                </div>
                                <div style={{width:'40%', display:'flex', justifyContent:'center', paddingTop:'4%'}}>
                                    <SevereStormButton severeType={severeType} locations={stormLocationChecked} stormConditions={stormConditions} severeStormTime={severeStormTime} severeStormTime2={severeStormTime2} severeStormStartDate={severeStormStartTime} severeStormEndDate={severeStormEndTime} />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Card>
            <Card style={{ backgroundColor: 'grey', height: '80%', width: '45%', display: 'flex', justifyContent: "center", margin: '5px', }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper style={{
                            margin: '10px',
                            height: '95%',
                            padding: '10px'
                        }}>
                            <Card elevation={2} sx={{ margin: '10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{
                                        textAlign: "left",
                                        paddingLeft: '10px',
                                        marginTop: '5px'
                                    }}>Cape Canaveral SFS</h2>
                                    <div style={{ height: '20px', display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ width: '43%', margin: '0' }} />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '57%' }}>
                                            <div>Status</div>
                                            <div>Start Time</div>
                                            <div>End Time</div>
                                            {showCountdowns===true &&<div>Countdown</div>}
                                            {showCountdowns===false &&<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                        </div>
                                    </div>
                                </div>

                                {storm.filter((i) => i.location === 'CCSFS').map((item, index) => <div style={{ height: 'auto', width: '100%', margin: '0 auto', padding: '5px' }}>
                                    <InnerStormConditions key={index} item={item} /></div>)}
                            </Card>
                            <Card elevation={2} sx={{ margin: '10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{
                                        textAlign: "left",
                                        paddingLeft: '10px',
                                        marginTop: '5px'
                                    }}>Kennendy Space Center</h2>
                                    <div style={{ height: '20px', display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ width: '43%', margin: '0' }} />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '57%' }}>
                                            <div>Status</div>
                                            <div>Start Time</div>
                                            <div>End Time</div>
                                            {showCountdowns===true &&<div>Countdown</div>}
                                            {showCountdowns===false &&<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                        </div>
                                    </div>
                                </div>
                                {storm.filter((i) => i.location === 'KSC').map((item, index) => <div style={{ height: 'auto', width: '100%', margin: '0 auto', padding: '5px' }}>
                                    <InnerStormConditions key={index} item={item} /></div>)}
                            </Card>
                            <Card elevation={2} sx={{ margin: '10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{
                                        textAlign: "left",
                                        paddingLeft: '10px',
                                        marginTop: '5px'
                                    }}>Patrick Space Force Base</h2>
                                    <div style={{ height: '20px', display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ width: '43%', margin: '0' }} />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '57%' }}>
                                            <div>Status</div>
                                            <div>Start Time</div>
                                            <div>End Time</div>
                                            {showCountdowns===true &&<div>Countdown</div>}
                                            {showCountdowns===false &&<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                        </div>
                                    </div>
                                </div>

                                {storm.filter((i) => i.location === 'PSFB').map((item, index) => <div style={{ height: 'auto', width: '100%', margin: '0 auto', padding: '5px' }}>
                                    <InnerStormConditions key={index} item={item} /></div>)}
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Card>
        </Card>
    )

}

export default SevereStormViolation