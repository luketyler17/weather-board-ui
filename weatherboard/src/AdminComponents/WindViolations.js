import React from "react";
import { Card, Grid, Paper, FormGroup, FormControlLabel } from "@mui/material";
import { useState, useContext } from "react";
import InnerWind from "../components/splashComponents/innerWInd";
import styled from 'styled-components';
import AirIcon from '@mui/icons-material/Air';
import FormControl from "@mui/material";
import CheckboxComponent from "./Checkbox";
import { Typography } from "@mui/material";
import { AppContext } from "../context/AppContext";
import WindInputTextView from "../components/splashComponents/windInputText";
import WindButton from "./windAdminComponents/windButton";
import WindCheckedLocationBox from './WindCheckedLocationBox';
import { RiWindyLine } from 'react-icons/ri'

const WindViolationsView = () => {

    const { showCountdowns, lightning, wind, windTime, setWindTime, windTime2, setWindTime2, windStartTime, setWindStartTime, windEndTime, setWindEndTime } = useContext(AppContext);
    const CCSFScategories = ["18 kt steady-state", "22 kt steady-state", "Strong Winds", "Damaging Winds"]
    const KSCcategories = ["18 kt steady-state", "Strong Winds", "Damaging Winds"]
    const PSFBcategories = ["25 kt observed", "Strong Winds", "Damaging Winds"]
    const windLocations = ['Cape Canaveral Space Force Station', 'Kennedy Space Center', 'Patrick Space Force Base']
    const windViolations = ['18 kt Steady State Advisory', '22 kt Steady State Advisory', '25 kt Steady State Advisory', 'Strong Wind Warning', 'Damaging Wind Warning']
    const [checked, setChecked] = useState(false);
    const [windCheckedLocationValues, setWindCheckedLocationValues] = useState(false);

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
                width: '100%',
                height: '10%',
                paddingLeft: '10px'
            }}><RiWindyLine/>Wind</h1>

            <Card style={{ backgroundColor: 'grey', width: '45%', display: 'flex', justifyContent: "center", margin: '5px', height: '50%' }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper style={{

                            margin: '10px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                            
                        }}>
                            <div>
                                <h1 style={{
                                    textAlign: "left",
                                    paddingLeft: '10px',
                                }}>Location</h1>
                            </div>
                            <div>
                                <FormGroup>
                                    <FormControlLabel control={<h4 style={{fontSize: '14px'}}><WindCheckedLocationBox checked={checked} label={windLocations} setWindCheckedLocationValues={setWindCheckedLocationValues} windCheckedLocationValues={windCheckedLocationValues} /></h4>} />
                                </FormGroup>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={13}  >
                        <Paper style={{
                            backgoundColor: '#000',
                            margin: '10px',
                            height: '90%',
                            display: 'flex',
                            flexDirection: 'column'

                        }}>
                            <div>
                                <h1 style={{
                                    textAlign: "left", paddingLeft: '10px',

                                }}>Time</h1>
                            </div>
                            <div style={{ display:'flex', flexDirection:'row'}}>
                                    <div style={{width:'70%', height:'auto'}}>
                                    <WindInputTextView />
                                    </div>
                                    <div style={{width:'40%',display:'flex', justifyContent:'center',paddingTop:'4%'}}>
                                    <WindButton />
                                    </div>
                                
                            </div>
                            {/* <div style={{alignSelf: 'center'}}>
                          </div> */}
                        </Paper>
                    </Grid>
                </Grid>
            </Card>
            <Card style={{ backgroundColor: 'grey', width: '45%', height: '90%', display: 'flex', justifyContent: "center", margin: '5px', }}>
                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <Paper style={{

                            margin: '10px',
                            height: 'auto',
                            padding: '10px'
                          
                        }}><Card elevation={2} sx={{ margin: '10px' }}>
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
                                {CCSFScategories.map((category, index) => <div style={{ height: 'auto', width: '100%', margin: '2px', padding: '2px' }}><InnerWind key={index} states={wind.filter(item => (item.location == 'CCSFS' && item.category == category))}
                                    category={category} /></div>)}
                            </Card>

                            <Card elevation={2} sx={{ margin: '10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{
                                        textAlign: "left",
                                        paddingLeft: '10px',
                                        marginTop: '5px'
                                    }}>Kennedy Space Center</h2>
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
                                {KSCcategories.map((category, index) => <div style={{ height: 'auto', width: '100%', margin: '2px', padding: '2px' }}><InnerWind key={index} states={wind.filter(item => (item.location == 'KSC' && item.category == category))}
                                    category={category} /></div>)}
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
                                {PSFBcategories.map((category, index) => <div style={{ height: 'auto', width: '100%', margin: '2px', padding: '2px' }}><InnerWind key={index} states={wind.filter(item => (item.location == 'Patrick SFB' && item.category == category))}
                                    category={category} /></div>)}
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Card>
        </Card>
    )
}

export default WindViolationsView