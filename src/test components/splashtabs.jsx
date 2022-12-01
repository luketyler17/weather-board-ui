import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LightningHomeAccordion from './lightningAccordion';
import WindHomeAccordion from './windAccordion';
import StormHomeAccordion from './stormAccordion';
import MobileHomeImgContainer from './location components/mobilehomeimgcontainer';
import { AppContext } from '../context/AppContext';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SplashTabs() {
  const [value, setValue] = React.useState(0);
  const {setWindSplashToggle, setStormSplashToggle, windSplashToggle, stormSplashToggle, psfbWindToggle, kscWindToggle, capeWindToggle, capeStormToggle, kscStormToggle, psfbStormToggle} = useContext(AppContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const hideWindTab = () =>{
    (psfbWindToggle === false && kscWindToggle === false && capeWindToggle === false) ? setWindSplashToggle(false): setWindSplashToggle(true)
  }
  const hideStormTab = () =>{
    (psfbStormToggle === false && kscStormToggle === false && capeStormToggle === false) ? setStormSplashToggle(false) : setStormSplashToggle(true)
  }
  return (
    <Box sx={{ width: '105%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <MobileHomeImgContainer/>
      <Box sx={{ borderBottom: .5, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Lightning" {...a11yProps(0)} />
          {windSplashToggle === true && hideWindTab()}
          {windSplashToggle === true && <Tab label="Wind" {...a11yProps(1)} />}
          {stormSplashToggle === true && hideStormTab()}
          {stormSplashToggle === true && <Tab label="Severe Storms" {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LightningHomeAccordion />
      </TabPanel>
      
        <TabPanel value={value} index={1}>
        <WindHomeAccordion />
      </TabPanel>
      
        <TabPanel value={value} index={2}>
        <StormHomeAccordion />
      </TabPanel>
    </Box>
  );
}
