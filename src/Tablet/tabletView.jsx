import React from 'react'
import MobileNav from '../test components/MobileNav'
import {
    Grid, Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import SplashTabs from '../test components/splashtabs'
import LeftBar from '../components/LeftBar'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Paper, FormGroup, FormControlLabel } from '@mui/material';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import AirIcon from '@mui/icons-material/Air';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material'
import Cookies from 'universal-cookie';
import Stack from '@mui/material/Stack';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import FormControl from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress'
import NavBarMenu from '../test components/menu'
import { useState, useContext } from 'react'
import TabletNav from './TabletNav'

let wslogo = '../images/45th_Weather_Squadron_Patch.png';
const cookies = new Cookies()

const TabletView = () => {
    cookies.get('area')
    let userInfo = cookies.get('authentication')

    const { area, setArea, site, setSite, imagePath, setImagePath, cookieData, setCookieData, showCountdowns, setShowCountdowns } = useContext(AppContext)
    const navigate = useNavigate();

    const [checked, setChecked] = useState(true)
    const [loading, setLoading] = useState(false)
    cookies.get('site')

    const buttonSX = {
        width: 'auto',
        color: 'white',
        backgroundColor: '#01042F',
        borderRadius: '20px',
        fontFamily: 'Kanit',
        border: 'none',
        textDecoration: 'underline',
        "&:hover": {
            color: '#01042F',
            backgroundColor: 'white',
            border: '1px solid #01042F',
            textDecoration: 'underline',
            fontWeight: 'bold'
        }
    }
    const locationButtonSX = {
        display: 'flex',
        textAlign: 'center',
        fontSize: '16px',
        color: 'white',
        fontWeight: '900',
        fontFamily: 'Kanit',
        bgcolor: '#01042F',
        height: '40px',
        "&:hover": {
            bgcolor: 'white', color: '#01042F', border: '1px solid #01042F'
        }
    }
    const siteButtonSX = {
        textAlign: 'center',
        fontSize: '13px',
        color: 'white',
        fontWeight: '800',
        fontFamily: 'Kanit',
        bgcolor: '#01042F',
        height: '40px',
        "&:hover": {
            bgcolor: 'white', color: '#01042F', border: '1px solid #01042F'
        }

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
    const handleToggle = (event) => {
        if (checked === true) {
            setChecked(event.target.checked)
            navigate('/admin')
        } else {
            setChecked(event.target.checked)
            navigate('/')
        }

    }
        ;
    const handleSignIn = () => {
        setLoading(true)
        navigate('/sign_in')
        setLoading(false)
    }

    const handleSignOut = () => {
        setLoading(true)
        cookies.remove('authentication', { path: '/' })
        navigate('/')
        setLoading(false)

    }

    const handleCountdowns = () => {
        if (showCountdowns === true) {
            setShowCountdowns(false)

        } else {
            setShowCountdowns(true)

        }
    }
    return (

        <Box sx={{ width: '100%', height: '100vh' }}>

            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Grid item xs={12} md={12} lg={12} xl={12} marginBottom={2} >
                    <Card >
                        <MobileNav />
                    </Card>
                </Grid>
                <TabletNav />
                <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Grid item lg={6} md={6} sm={6} marginRight={-25} marginTop={-20}/>
                        <Card elevation={10} sx={{ display: 'flex', justifyContent: 'center', height: '25%', width: '55%', bgcolor: 'lightgrey', padding:'2%' }} >
                            <img style={{ height: 'auto', width: '100%' }} src={'./images/wholemap.gif'}></img>
                        </Card>
                    <Grid item xs={9} md={9} lg={9} xl={9} marginTop={-15} marginRight={-5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item lg={3} md={3} sm={3} />
                        <Card elevation={6}>
                            <SplashTabs />
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
        </Box>

    )
}

export default TabletView