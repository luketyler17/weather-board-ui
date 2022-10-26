import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppContext } from '../context/AppContext';
import ModalRings from './ModalRings';
import { Card, CardMedia } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '28%',
  height:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #01042F',
  boxShadow: 24,
  p: 4,
  display:'flex'
  
};

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
    }}

export default function MapModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {lightning} = useContext(AppContext)
  const coverageAreas = ['Cape Central', 'Port', 'CX-20/16/LZ', 'CX-36/46', 'CX-37/ASOC/PPF', 'CX-40/41/SPOC', 'KSC Industrial', 'LC-39', 'SLF', 'CIDCO Park', 'Astrotech', 'Patrick SFB']
  return (
    <div>
      <Button sx={buttonSX} onClick={handleOpen}>Show Map</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Card sx={style}>
        <Box>
        <CardMedia component='img' src={'./images/wholemap.gif'} alt='N/A'/>
        {coverageAreas.map((location)=>{
          return(
            <ModalRings location={location} item={lightning.filter((item) => item.location === location)}/>
          )
        })}
        </Box>
        </Card>
      </Modal>
    </div>
  );
}
