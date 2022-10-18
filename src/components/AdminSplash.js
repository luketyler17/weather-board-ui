import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Card, Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import AirIcon from '@mui/icons-material/Air';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import InnerWind from './splashComponents/innerWInd';
import { AppContext } from '../context/AppContext';
import React, { useContext, useState } from 'react';
import SevereStormBar from './splashComponents/severeStormBar';
import LightningViolations from '../AdminComponents/LightningViolations';
import WindViolationsView from '../AdminComponents/WindViolations'
import SevereStormViolation from '../AdminComponents/SevereStorm';

const Button = styled.button`
border-radius: 50px;
height: 60px;
width: 400px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px;
font-weight: 700;
background-color: black;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-family: 'Kanit';}
`

const AdminSplash = ({ states }) => {

    const CCSFSSevere = ['CCSFS']
    const KSCSevere = ['KSC']
    const PSFBSevere = ['PSFB']

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height: '100%', width: '90%', marginLeft: '5px' }}
        >
            <Toolbar />
            <Grid style={{
                height: '100%',
            }}>

                <h1 style={{
                    textAlign: "left",
                    height: '50px',
                    fontSize: '40px',
                    width: '100%',
                    paddingLeft: '20px'
                }}> Input Violations</h1>
               <LightningViolations />
               <WindViolationsView />
               <SevereStormViolation/>
               
            </Grid>
        </Box>
    )
}

export default AdminSplash



//setWWAArray=([...WWAArray, newWWAArea])
// i.e. [SLF, CX40, CX36]
//WWAArray.map((wwa)=>{
    //fetch(local)
    //method post
    // {location: wwa,
    // body:}


    // const [arrayOfLocations, setArrayOfLocations] = useState([])
    // const [count, setCount] = useStat(0)

    //handleCheck(locationThatWasClicked) {
        // let newcount = count + 1
        // setCount(newCount)
        // setArrayOfLocations([arrayOfLocations, locationThatWasClicked])
    //}

    //handleUncheck(locationthatwasclicked) {
        // count --
        // setArrayOfLocations(arrayOfLocations.filter(loc => loc != locationThatWasClicked))
    //}

    //handleSubmit() {
    // window.reload
    //}

    //create object front end (each object is 1 location)
    //send all objects to backend within an array
    //Backend: for each through the array and save each object as needed
    