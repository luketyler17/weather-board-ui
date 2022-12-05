import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import {Menu, MenuItem, List, ListItem } from '@mui/material';

import AccessibilityMenu from './accessibilityMenu';

export default function EmbeddedAccessibilityMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    
    <MenuItem onClick = {handleClick('left-end')}>Settings
      <Popper sx={{padding:'.2%'}} open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
                <List>
                    <AccessibilityMenu/>
                </List>
            </Paper>
          </Fade>
        )}
      </Popper>
      </MenuItem>
    
  );
}