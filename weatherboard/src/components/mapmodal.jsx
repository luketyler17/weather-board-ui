import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #01042F',
  boxShadow: 24,
  p: 4,
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

  return (
    <div>
      <Button sx={buttonSX} onClick={handleOpen}>Show Map</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img src={'./images/wholemap.gif'} alt='N/A'/>
        </Box>
      </Modal>
    </div>
  );
}
