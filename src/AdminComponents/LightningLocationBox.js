import React from "react";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card, Grid, Paper, FormGroup, FormControlLabel } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const lightningLocations = ["Cape Central", "CX-20/16/LZ", "CX-36/46", "CX-37/ASOC/PPF", "CX-40/41/SPOC", "Port", "KSC Industrial", "LC-39", "SLF", "Astrotech", "CIDCO Park", "Patrick SFB"]

export default function LightningLocationBox({label, setCheckedValues, checkedValues }) {
    const { lightningLocation, setLightningLocation } = useContext(AppContext);
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        if (checked == true) {
            setCheckedValues(checkedValues.filter(value => value != label))
            setChecked(false)
        }
        if (checked == false) {
            if (checkedValues == undefined) {
                setCheckedValues([label])
                setChecked(true)
            } else {
                setCheckedValues([...checkedValues, label])
                setChecked(true)
            }
        }
    }
  
    return (
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="Lightning Locations">Locations</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={checked}
            onChange={handleChange}
            input={<OutlinedInput label="Locations" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {lightningLocations.map((location) => (
              <MenuItem key={location} value={location}>
                <Checkbox checked={checked} />
                <ListItemText primary={location} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }

