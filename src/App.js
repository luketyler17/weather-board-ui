import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import LeftBar from './components/LeftBar';
import AdminPage from './Pages/AdminPage';
import AreaView from './components/AreaView';
import UserPage from './Pages/UserPage';
import SignIn from './Pages/SignInPage';
import SignUp from './Pages/SIgnUp';
import { AppContext } from './context/AppContext';
import SiteView from './components/SiteView';
import Cookies from 'universal-cookie'
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import TestHome from './test components/testhome';
import MobileArea from './test components/location components/mobilearea';
import MobileSiteView from './test components/location components/mobilesite';
import TabletView from './Tablet/tabletView';
import TabletSiteView from './Tablet/tabletSite';
import TabletArea from './Tablet/TabletArea';

const url = 'https://weatherwarn.herokuapp.com'
const cookies = new Cookies()
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function App() {

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [area, setArea] = useState((cookies.get('area') !== [] ? cookies.get('area') : []))
  const [site, setSite] = useState((cookies.get('site') !== [] ? cookies.get('site') : []))
  const [lightning, setLightning] = useState([])
  const [lightningLocation, setLightningLocation] = useState([])
  const [storm, setStorm] = useState([])
  const [wind, setWind] = useState([])
  const [loading, setLoading] = useState(1)
  const [imagePath, setImagePath] = useState((cookies.get('imagePath') !== '' ? cookies.get('imagePath') : ''))
  const [cookieData, setCookieData] = useState({ area: '', site: '' })
  const [CCWindProperties, setCCWindProperties] = useState({
    "18 kt steady-state": undefined,
    "22 kt steady-state": undefined,
    "Strong Winds 1": undefined,
    "Strong Winds 2": undefined,
    "Damaging Winds 1": undefined,
    "Damaging Winds 2": undefined,
  })

  const [KSCWindProperties, setKSCWindProperties] = useState({
    '18 kt steady-state': undefined,
    "Strong Winds 1": undefined,
    "Strong Winds 2": undefined,
    "Damaging Winds 1": undefined,
    "Damaging Winds 2": undefined,

  })

  const [PSFBWindProperties, setPSFBWindProperties] = useState({
    '25 kt observed': undefined,
    "Strong Winds 1": undefined,
    "Strong Winds 2": undefined,
    "Damaging Winds 1": undefined,
    "Damaging Winds 2": undefined,

  })

  const [windTime, setWindTime] = React.useState('');
  const [windTime2, setWindTime2] = React.useState('');
  const [windStartTime, setWindStartTime] = React.useState('');
  const [windEndTime, setWindEndTime] = React.useState('');
  const [weatherViolations, setWeatherViolations] = useState(undefined)
  const [CCcheckedValues, setCCcheckedValues] = useState([])

  const [KSCCheckedValues, setKSCCheckedValues] = useState([])

  const [PSFBCheckedValues, setPSFBCheckedValues] = useState([])
  const [refreshRate, setRefreshRate] = useState(60000)
  const [toggle, setToggle] = useState(0)
  const [showCountdowns, setShowCountdowns] = useState(true)
  const [someState, setSomeState] = useState(0)
  const defaultTheme = {
    clear: {
      border: '#035600',
      locationColor: '#03AD00',
      innerDiv: '#F8FFF8',
      textColor: '#035600',
      iconColor: '#035600',
    },
    warning: {
      border: '#C90000',
      locationColor: '#C90000',
      innerDiv: '#C90000',
      textColor: 'white',
      iconColor: 'white',
    },
    watch: {
      border: '#D68E24',
      locationColor: '#D68E24',
      innerDiv: '#FFFF97',
      textColor: '#D68E24',
      iconColor: '#D68E24',
    },
    advisory: {
      border: '#B800F9',
      locationColor: 'rgba(223, 0, 254)',
      innerDiv: '#F2DCFA',
      textColor: '#B800F9',
      iconColor: '#B800F9',
    }
  }
  const [mode, setMode] = useState(defaultTheme)
  const protTheme = {
    clear: {
      border: '#39538f',
      locationColor: '#ceb2ff',
      innerDiv: '#efecf4',
      textColor: '#39538f',
      iconColor: '#39538f',
    },
    warning: {
      border: '#706100',
      locationColor: '#706100',
      innerDiv: '#706100',
      textColor: 'white',
      iconColor: 'white',
    },
    watch: {
      border: '#8e6402',
      locationColor: '#ffb404',
      innerDiv: '#fff8db',
      textColor: '#8e6402',
      iconColor: '#8e6402',
    },
    advisory: {
      border: '#323748',
      locationColor: '#9fb0ff',
      innerDiv: '#b9c5fa',
      textColor: '#323748',
      iconColor: '#323748',
    }
  }
  const duetTheme = {
    clear: {
      border: '#3d4763',
      locationColor: '#3d4763',
      innerDiv: '#ffeafd',
      textColor: '#3d4763',
      iconColor: '#3d4763',
    },
    warning: {
      border: '#a98200',
      locationColor: '#a98200',
      innerDiv: '#a98200',
      textColor: 'white',
      iconColor: 'white',
    },
    watch: {
      border: '#453500',
      locationColor: '#ffb950',
      innerDiv: '#ffd79d',
      textColor: '#453500',
      iconColor: '#453500',
    },
    advisory: {
      border: '#3f352f',
      locationColor: '#80b7ff',
      innerDiv: '#8fbefc',
      textColor: '#3f352f',
      iconColor: '#3f352f',
    }
  }
  const tritTheme = {
    clear: {
      border: '#333236',
      locationColor: '#333236',
      innerDiv: '#d6f4f8',
      textColor: '#333236',
      iconColor: '#333236',
    },
    warning: {
      border: '#fe1c00',
      locationColor: '#fe1c00',
      innerDiv: '#fe1c00',
      textColor: 'white',
      iconColor: 'white',
    },
    watch: {
      border: '#660b00',
      locationColor: '#bf4f43',
      innerDiv: '#fdcbe9',
      textColor: '#660b00',
      iconColor: '#660b00',
    },
    advisory: {
      border: '#651615',
      locationColor: '#bb8791',
      innerDiv: '#FFCCCC',
      textColor: '#651615',
      iconColor: '#651615',
    }
  }

  const passContext = {
    area,
    setArea,
    site,
    setSite,
    lightning,
    setLightning,
    lightningLocation,
    setLightningLocation,
    storm,
    setStorm,
    wind,
    setWind,
    loading,
    setLoading,
    imagePath,
    setImagePath,
    cookieData,
    setCookieData,
    CCWindProperties,
    setCCWindProperties,
    windTime,
    setWindTime,
    windTime2,
    setWindTime2,
    windStartTime,
    setWindStartTime,
    windEndTime,
    setWindEndTime,
    weatherViolations,
    setWeatherViolations,
    CCcheckedValues,
    setCCcheckedValues,
    KSCCheckedValues,
    setKSCCheckedValues,
    setKSCWindProperties,
    KSCWindProperties,
    PSFBWindProperties,
    setPSFBWindProperties,
    PSFBCheckedValues,
    setPSFBCheckedValues,
    setToggle,
    toggle,
    showCountdowns,
    setShowCountdowns,
    refreshRate,
    setRefreshRate,
    url,
    mode, 
    setMode,
    defaultTheme,
    protTheme,
    duetTheme,
    tritTheme,

  }

  const isMobileMatch = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (someState == 0) {
      Promise.all([
        fetch(`${url}/lightning`)
          .then(res => res.json())
          .then(data => setLightning(data)),
        fetch(`${url}/storm`)
          .then(res => res.json())
          .then(data => setStorm(data)),
        fetch(`${url}/wind`)
          .then(res => res.json())
          .then(data => setWind(data))
      ]).then(() => setLoading(0)).then(() => setSomeState(1))
    }
    else {
      setLoading(0)
      const interval = setInterval(() => {
        Promise.all([
          fetch(`${url}/lightning`)
            .then(res => res.json())
            .then(data => setLightning(data)),
          fetch(`${url}/storm`)
            .then(res => res.json())
            .then(data => setStorm(data)),
          fetch(`${url}/wind`)
            .then(res => res.json())
            .then(data => setWind(data))
        ]).then(() => setLoading(0))
      }, refreshRate);
      console.log(refreshRate);
      return () => clearInterval(interval);
    }
  }, [area, someState])
  useEffect(() => {
    Promise.all([
      fetch(`${url}/lightning`)
        .then(res => res.json())
        .then(data => setLightning(data)),
      fetch(`${url}/storm`)
        .then(res => res.json())
        .then(data => setStorm(data)),
      fetch(`${url}/wind`)
        .then(res => res.json())
        .then(data => setWind(data))
    ])
  }, [toggle])

  if (loading !== 0) {
    return (
      <Box sx={{ display: 'flex', placeContent: 'center center', paddingTop: '10%' }}>
        <CircularProgress />
      </Box>
    )
  } else {

    return (

        <AppContext.Provider value={passContext}>
          <Router>
            {
              windowSize.innerWidth > 1200 ? (
                <Routes>
                  <Route path='/' element={<UserPage />} />
                  <Route path='/area' element={<AreaView />} />
                  <Route path='/admin' element={<AdminPage />} />
                  <Route path='/area' element={<AreaView />} />
                  <Route path='/site' element={<SiteView />} />
                  <Route path='/sign_in' element={<SignIn />} />
                  <Route path='/sign_up' element={<SignUp />} />
                </Routes>
              ) : (
                windowSize.innerWidth > 500 ? (
                  <Routes>
                    <Route path='/' element={<TabletView />} />
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/area' element={<TabletArea />} />
                    <Route path='/site' element={<TabletSiteView />} />
                    <Route path='/sign_in' element={<SignIn />} />
                    <Route path='/sign_up' element={<SignUp />} />
                  </Routes>
                ) :
                  (

                    <Routes>
                      <Route path='/' element={<TestHome />} />
                      <Route path='/admin' element={<AdminPage />} />
                      <Route path='/area' element={<MobileArea />} />
                      <Route path='/site' element={<MobileSiteView />} />
                      <Route path='/sign_in' element={<SignIn />} />
                      <Route path='/sign_up' element={<SignUp />} />
                    </Routes>
                  )
              )
            }
          </Router>
        </AppContext.Provider>
      
    );
  }
}

export default App;