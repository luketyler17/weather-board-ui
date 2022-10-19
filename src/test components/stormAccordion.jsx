import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CCSFSStormSplash from './InnerComponents/CCSFSStormSplash';
import { Card } from '@mui/material';
import KSCStormSplash from './InnerComponents/KSCStormSplash';
import PatrickStormSplash from './InnerComponents/PatrickStormSplash';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function StormHomeAccordion() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Cape Canaveral Space Force Station</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card elevation={10} style={{height:'10%', width:'100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'45%'}}/>
            <div style={{width:'63%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Status</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Start</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'22%'}}>End</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'28%'}}>Count Down</div>
            </div>
        </Card>
          <CCSFSStormSplash/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Kennedy Space Center</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card elevation={10} style={{height:'10%', width:'100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'45%'}}/>
            <div style={{width:'63%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Status</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Start</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'22%'}}>End</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'28%'}}>Count Down</div>
            </div>
        </Card>
        <KSCStormSplash/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Patrick SFB</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card elevation={10} style={{height:'10%', width:'100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'45%'}}/>
            <div style={{width:'63%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Status</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'25%'}}>Start</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'22%'}}>End</div>
                <div style={{fontSize:'52%',  fontFamily:'Kanit', width:'28%'}}>Count Down</div>
            </div>
        </Card>
          <PatrickStormSplash/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
