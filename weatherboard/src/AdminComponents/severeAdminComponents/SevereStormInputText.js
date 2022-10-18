
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';

export default function SevereStormInputText({severeStormTime, setSevereStormTime, severeStormTime2, setSevereStormTime2, severeStormStartTime, setSevereStormStartTime, severeStormEndTime, setSevereStormEndTime}) {

  
  
  const handleChange = (event) => {
    setSevereStormTime(event.target.value);
  };

  const handleChange2 = (event) => {
    setSevereStormTime2(event.target.value)
  }

  const handleChange3 = (event) => {
    setSevereStormStartTime(event.target.value)
  }

  const handleChange4 = (event) => {
    setSevereStormEndTime(event.target.value)
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

        value={severeStormStartTime}
        onChange={handleChange3}
        required
      />
      <TextField
      InputLabelProps={{ shrink: true }}
        type="time"
        id="beginning-time"
        label="Enter Beginning Time"

        value={severeStormTime}
        onChange={handleChange}
        required
      />
      <TextField
      InputLabelProps={{ shrink: true }}
        type="date"
        id="end-date"
        label="Enter Ending Date"

        value={severeStormEndTime}
        onChange={handleChange4}
        required
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        type="time"
        id="end-time"
        label="Enter Ending Time"

        value={severeStormTime2}
        onChange={handleChange2}
        required
      />
    </Box>
  );
}

