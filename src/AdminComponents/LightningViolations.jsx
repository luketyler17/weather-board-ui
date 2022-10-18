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
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { AppContext } from "../context/AppContext";
import LightningLocationBox from "./LightningLocationBox";
import { BsLightning } from 'react-icons/bs'

const LightningViolations = () => {
    const currentLightning = ["Cape Central", "CX-20/16/LZ", "CX-36/46", "CX-37/ASOC/PPF", "CX-40/41/SPOC", "Port", "KSC Industrial", "LC-39", "SLF", "Astrotech", "CIDCO Park", "Patrick SFB"]

    const Phases = ['Phase 1', 'Phase 2', 'Cancel']
    const [checked, setChecked] = useState(false);
    const [checkedValues, setCheckedValues] = useState(undefined);
    const [violationValues, setViolationValues] = useState(undefined);
    const [lightningTime, setlightningTime] = React.useState('');
    const [lightningTime2, setlightningTime2] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');
    const [weatherViolations, setWeatherViolations] = useState(undefined)
    const { lightning, wind, lightningLocations, setLightningLocations, showCountdowns } = useContext(AppContext);

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
            }}> <BsLightning /> Lightning</h1>
            <Card style={{ backgroundColor: 'grey', width: '45%', display: 'flex', justifyContent: "center", margin: '5px', }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper style={{

                            margin: '10px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "10px 30px",
                            flexWrap: 'wrap',
                            justifyContent: 'center',

                        }}>
                            <div>
                                <h1 style={{
                                    textAlign: "left",
                                    paddingLeft: '10px'
                                }}>Lightning Locations</h1>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '0px 200px', padddingLeft: '5px' }}>
                                {currentLightning.map((locations) =>
                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                        <div style={{ width: '250px' }}>
                                            <FormGroup>
                                                <FormControlLabel control={<h4 style={{fontSize: '15px'}}><CheckboxComponent checked={checked} label={locations} setCheckedValues={setCheckedValues} checkedValues={checkedValues} /></h4>} />
                                            </FormGroup>
                                        </div>
                                    </div>
                                )}
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
                            justifyContent: 'space-evenly',

                        }}>
                            <div>
                                <h2 style={{
                                    textAlign: "left",
                                    paddingLeft: '10px'
                                }}>Type of Lightning Violation</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                {Phases.map((category) =>
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel control={<h4 style={{fontSize: '16px'}}><ViolationCheckbox label={category} setViolationValues={setViolationValues} violationValues={violationValues} /></h4>} />
                                        </FormGroup>
                                    </div>
                                )}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={13}  >
                        <Paper style={{
                            backgoundColor: '#000',
                            margin: '10px',
                            height: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',

                        }}>
                            <div>
                                <h1 style={{
                                    textAlign: "left", paddingLeft: '10px',

                                }}>Time</h1>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row'}}>
                                <div style={{width:'70%', height:'auto'}}>
                                    <LightningInputText setlightningTime={setlightningTime} lightningTime={lightningTime} lightningTime2={lightningTime2} setlightningTime2={setlightningTime2} setStartTime={setStartTime} startTime={startTime} endTime={endTime} setEndTime={setEndTime} />
                                </div>
                                <div style={{ width: '40%', display: 'flex', justifyContent: 'center', paddingTop: '4%' }}>
                                    <AdminButton locations={checkedValues} violations={violationValues} startTime={lightningTime} endTime={lightningTime2} startDate={startTime} endDate={endTime} category={weatherViolations} />
                                </div>
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
            </Card>
            <Card style={{ backgroundColor: 'grey', height: '600px', width: '45%', display: 'flex', justifyContent: "center", margin: '5px', }}>
                <Grid container spacing={1} >

                    <Grid item xs={12}>
                        <Paper style={{

                            margin: '10px',
                            height: '580px',
                            padding: '10px'

                        }}><Card elevation={2} sx={{ margin: '10px', paddingBottom: '8px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{
                                        textAlign: "left",
                                        paddingLeft: '10px'
                                    }}>Current Lightning Violations</h2>
                                    <div style={{ height: '20px', display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ width: '45%', margin: '0' }} />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '55%' }}>
                                            <div >Status</div>
                                            <div >Start Time</div>
                                            <div >End Time</div>
                                            {showCountdowns===true &&<div>Countdown</div>}
                                            {showCountdowns===false &&<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                        </div>
                                    </div>
                                </div>

                                {currentLightning.map((location, index) =>
                                    <div style={{ height: '36px', width: '100%', margin: '3px', padding: '2px' }}>
                                        <InnerLightning key={index} states={lightning.filter(item => item.location == location)}
                                            location={location} />
                                    </div>)}
                            </Card>
                        </Paper>
                    </Grid>

                </Grid>
            </Card>

        </Card>
    )
}

export default LightningViolations