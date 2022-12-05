import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppContext } from '../context/AppContext';
import ModalRings from './ModalRings';
import { Card, CardMedia } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MapIcon from '@mui/icons-material/Map';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '575px',
  height:'auto',
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
  p: .5,
  display:'flex',
  justifyContent:'center'
  
  
};

const buttonSX = {
    width: 'auto',
    color: 'text.primary',
    
    borderRadius: '20px',
    fontFamily: 'Kanit',
    border: 'none',
    textDecoration: 'underline',
    "&:hover": {
        color: 'text.primary',
       
        border: '1px solid text.primary',
        textDecoration: 'underline',
        fontWeight: 'bold'
    }}

export default function MapModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {lightning} = useContext(AppContext)
  const coverageAreas = ['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC', 'KSC Industrial', 'LC-39', 'SLF', 'CIDCO Park', 'Astrotech', 'Patrick SFB']

  
  return (
    <div>
      <Button sx={buttonSX} onClick={handleOpen}>Show Map<ArrowDropDownIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Card sx={style}>
          <div style={{position:'relative', width:'100%', height:'100%'}}>
            <div style={{textAlign:'center', display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'8.5%'}}>
              <h4 style={{fontSize:'20px', position:'absolute', top:'0', left:'27%'}}> Current Lightning Violations</h4>
              <CloseIcon onClick={handleClose} sx={{position:'relative', right:'-46.5%', cursor:'pointer'}} />
               </div>
            <div style={{position:'relative', height:'800px', width:'auto'}}>
              <div style={{width:'100%', height:'90%', position:'relative'}}>
              <CardMedia sx={{position:'absolute', width:'100%', height:'100%'}} component='img' src={'./images/wholemap.gif'} alt='N/A'/>
              {coverageAreas.map((item) =>{
                return(
                  <ModalRings location={item} item={lightning.filter((i)=> i.location === item)}/>
                )
              })}
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
