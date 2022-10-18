
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';


export default function LightningInputText({lightningTime, lightningTime2, setlightningTime2, setlightningTime, setStartTime, setEndTime, startTime, endTime}) {

  
  
  const handleChange = (event) => {
    setlightningTime(event.target.value);
  };

  const handleChange2 = (event) => {
    setlightningTime2(event.target.value)
  }

  const handleChange3 = (event) => {
    setStartTime(event.target.value)
  }

  const handleChange4 = (event) => {
    setEndTime(event.target.value)
  }



  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      Validate
      autoComplete="off"
    >
      <TextField
      InputLabelProps={{ shrink: true }}
        type="date"
        id="beginning-date"
        label="Enter Beginning Date"

        value={startTime}
        onChange={handleChange3}
        required
      />

       <TextField
      InputLabelProps={{ shrink: true }}
        type="time"
        id="beginning-time"
        label="Enter Beginning Time"

        value={lightningTime}
        onChange={handleChange}
        required
      />
           
           <TextField
      InputLabelProps={{ shrink: true }}
        type="date"
        id="end-date"
        label="Enter Ending Date"

        value={endTime}
        onChange={handleChange4}
        required
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        type="time"
        id="end-time"
        label="Enter Ending Time"

        value={lightningTime2}
        onChange={handleChange2}
        required
      />
    </Box>
  );
}