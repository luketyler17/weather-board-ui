import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppContext } from '../../context/AppContext';
import CCSFSLightningSplash from '../InnerComponents/CCSFSLightningSplash';
import CCSFSStormSplash from '../InnerComponents/CCSFSStormSplash';
import CCSFSWindSplash from '../InnerComponents/CCSFSWindSplash';
import KSCLightningSplash from '../InnerComponents/KSCLightningSplash';
import KSCStormSplash from '../InnerComponents/KSCStormSplash';
import KSCWindSplash from '../InnerComponents/KSCWindSplash';
import PSFBLightningSplash from '../InnerComponents/PatrickLightningSplash';
import PatrickStormSplash from '../InnerComponents/PatrickStormSplash';
import PSFBWindSplash from '../InnerComponents/PSFBWindSplash';
import OtherLightningSplash from '../InnerComponents/OtherLightningSplash';
import { Card } from '@mui/material';



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

export default function AreaTabs() {
  const [value, setValue] = React.useState(0);
  const {area} = useContext(AppContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
if(area[0] !=='CIDCO Park'){
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'space-evenly' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Lightning" {...a11yProps(0)} />
          <Tab label="Wind" {...a11yProps(1)} />
          <Tab label="Severe Storms" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Card elevation={10} style={{height:'10%', width:'100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'45%'}}/>
            <div style={{width:'63%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Status</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Start</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'22%'}}>End</div>
                
            </div>
        </Card>
        
        {(area[0] === 'Cape Central') ? (<CCSFSLightningSplash/>): ((area[0] ==='KSC Industrial') ?(<KSCLightningSplash/>): (<PSFBLightningSplash/>))}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Card elevation={10} style={{height:'10%', width:'100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'45%'}}/>
            <div style={{width:'63%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Status</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Start</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'22%'}}>End</div>
                
            </div>
        </Card>
      {(area[0] === 'Cape Central') ? (<CCSFSWindSplash/>): (area[0] === 'KSC Industrial')?(<KSCWindSplash/>) : (<PSFBWindSplash/>)}
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Card elevation={10} style={{height:'10%', width:'100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'45%'}}/>
            <div style={{width:'63%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Status</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Start</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'22%'}}>End</div>
                
            </div>
        </Card>
      {(area[0] === 'Cape Central') ? (<CCSFSStormSplash/>): (area[0] === 'KSC Industrial')?(<KSCStormSplash/>): (<PatrickStormSplash/>)}
      </TabPanel>
    </Box>
  );
}else{
    return(
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'space-evenly' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Lightning" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <Card elevation={10} style={{height:'10%', width:'100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'45%'}}/>
            <div style={{width:'63%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Status</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Start</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'22%'}}>End</div>
                
            </div>
        </Card>
          <OtherLightningSplash/>
        </TabPanel>
      </Box>
    )
}
}