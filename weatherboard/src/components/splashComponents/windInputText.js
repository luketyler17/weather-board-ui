import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export default function WindInputText () {
  const { windTime, windTime2, setWindTime2, setWindTime, setWindStartTime, setWindEndTime, windStartTime, windEndTime } = useContext(AppContext)

  
  
  const handleChange = (event) => {
    setWindTime(event.target.value);
  };

  const handleChange2 = (event) => {
    setWindTime2(event.target.value)
  }

  const handleChange3 = (event) => {
    setWindStartTime(event.target.value)
  }

  const handleChange4 = (event) => {
    setWindEndTime(event.target.value)
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

        value={windStartTime}
        onChange={handleChange3}
        required
      />
      <TextField
      InputLabelProps={{ shrink: true }}
        type="time"
        id="beginning-time"
        label="Enter Beginning Time"

        value={windTime}
        onChange={handleChange}
        required
      />
      <TextField
      InputLabelProps={{ shrink: true }}
        type="date"
        id="end-date"
        label="Enter Ending Date"

        value={windEndTime}
        onChange={handleChange4}
        required
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        type="time"
        id="end-time"
        label="Enter Ending Time"

        value={windTime2}
        onChange={handleChange2}
        required
      />
    </Box>
  );
}