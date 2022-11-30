import React, {useContext} from 'react'
import { Card, useMediaQuery, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import LeftBar from '../components/LeftBar'
import { AppContext } from '../context/AppContext'
import {Typography} from '@mui/material'
import { BsLightning } from 'react-icons/bs'
import { RiWindyLine } from 'react-icons/ri'
import { RiThunderstormsLine } from 'react-icons/ri'
import StormProfile from '../components/profileComponents/stormProfile'
import WindProfile from '../components/profileComponents/windProfile'
import LightningProfile from '../components/profileComponents/lightningProfile'

const ProfilePage = () =>{
    const {themeToggle} = useContext(AppContext)
    const flexBasis = useMediaQuery('(min-width: 700px)')
    const boxStyle = {
        height:'100vh',
        width:'auto',
        display:'flex',
        flexDirection: 'column',
        paddingTop: flexBasis ?'4%' : '9%',
        bgcolor:(themeToggle === false ? 'text.primary' : "background.default")
    }
    const cardStyle = {
        padding:'1%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        height: '50%',
        width: 'auto',
        marginTop:'.5%',
        marginBottom:'.5%',
        marginLeft:'2%',
        marginRight:'2%',
        textAlign:'left',
        justifyContent:'space-evenly'

        
    }
    const paperStyle ={
        height:'85%',
        width:'100%',
        margin:'.5%',
        bgcolor:(themeToggle === false ? 'text.primary' :'text.secondary'),
        paddingTop:'.5%'

    }
    return(
        <Box>
        <LeftBar/>
        <Box sx={boxStyle}>
            <Card  sx={cardStyle}>
                
                <h2 style={{textDecoration:'underline'}}><BsLightning/> Lightning Settings</h2>
                
                <Paper sx ={paperStyle} style={{display:'flex', justifyContent:'space-evenly'}}>
                    <LightningProfile/>
                </Paper>
            </Card>
            <Card sx={cardStyle} >
                <div style= {{width:'48%', margin:'.5%'}}>
                <h2 style={{textDecoration:'underline'}}><RiWindyLine/> Wind Settings</h2>
                <Paper sx ={paperStyle}>
                    <WindProfile/>
                </Paper>
                </div>
                <div style = {{width:'48%', margin:'.5%'}}>
                    <h2 style={{textDecoration:'underline'}}><RiThunderstormsLine/> Storm Settings</h2>
                    <Paper sx={paperStyle}>
                        <StormProfile/>
                    </Paper>
                    
                </div>
            </Card>
            {/* <Card sx={cardStyle} >
                <h2><RiThunderstormsLine/> Storm Settings</h2>
                <Paper sx ={paperStyle}>
                    <StormProfile/>
                </Paper>
            </Card> */}
        </Box>
        </Box>
    )
}

export default ProfilePage