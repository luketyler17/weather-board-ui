import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Card, Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import React, { useContext, useState } from 'react';
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

    