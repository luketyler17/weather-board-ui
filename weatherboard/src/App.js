import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import {Box} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import TestHome from './test components/testhome';


const url = 'https://weatherwarn.herokuapp.com'
const cookies = new Cookies()
function App() {

  const [area, setArea] = useState((cookies.get('area')!==[] ? cookies.get('area'): []))
  const [site, setSite] = useState((cookies.get('site')!==[] ? cookies.get('site'): []))
  const [lightning, setLightning] = useState([])
  const [lightningLocation, setLightningLocation] = useState([])
  const [storm, setStorm] = useState([])
  const [wind, setWind] = useState([])
  const [loading, setLoading] = useState(1)
  const [imagePath, setImagePath] = useState((cookies.get('imagePath')!==''? cookies.get('imagePath'): ''))
  const [cookieData, setCookieData] = useState({area:'', site:''})
  const [CCWindProperties, setCCWindProperties] = useState({
    "18 kt steady-state": undefined,
    "22 kt steady-state": undefined,
    "Strong Winds 1": undefined,
    "Strong Winds 2": undefined,
    "Damaging Winds 1": undefined,
    "Damaging Winds 2": undefined,
})

const [KSCWindProperties, setKSCWindProperties] = useState({
  '18 kt steady-state':undefined,
  "Strong Winds 1": undefined,
  "Strong Winds 2": undefined,
  "Damaging Winds 1": undefined,
  "Damaging Winds 2": undefined,

})

const [PSFBWindProperties, setPSFBWindProperties] = useState({
  '25 kt observed':undefined,
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
const [initialLoad, setInitialLoad] = useState(false)
const [CCcheckedValues, setCCcheckedValues] = useState([])

const [KSCCheckedValues, setKSCCheckedValues] = useState([])

const [PSFBCheckedValues, setPSFBCheckedValues] = useState([])

const [toggle, setToggle] = useState(false)
const [showCountdowns, setShowCountdowns] = useState(true)

  const passContext ={
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
    setShowCountdowns
    

  }

  const isMobileMatch = useMediaQuery("(max-width:600px)");



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
    ]).then(() => setLoading(0))
}, [area, toggle])
if(loading!==0){
  return(
    <Box sx={{display:'flex', placeContent:'center center', paddingTop:'10%'}}>
    <CircularProgress/>
    </Box>
  )
} else {

  return (
    <AppContext.Provider value ={passContext}>
      <Router>
        <Routes>
        
          <Route path ='/' element={<UserPage/>}/>

        
          <Route path ='/admin' element={<AdminPage/>}/>
          <Route path ='/area' element={<AreaView/>}/>
          <Route path = '/site' element ={<SiteView/>}/>
          <Route path ='/sign_in' element ={<SignIn/>}/>
          <Route path ='/sign_up' element ={<SignUp/>}/>
        </Routes>
       </Router>
    </AppContext.Provider>
  );
}
}

export default App;