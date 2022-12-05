import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import LeftBar from '../components/LeftBar';

const bcrypt = require('bcryptjs')

const url = 'https://weather-board.onrender.com'

const cookies = new Cookies();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid text.primary',
  boxShadow: 24,
  p: 4,
};

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [errorCode, setErrorCode] = useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  
  async function handleSubmit(event) {
    setLoading(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch(`${url}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.get('email'),
        password: data.get('password'),
        FirstName: data.get('firstName'),
        lastName: data.get('lastName')
      })
    }).then(data => data.json()).then(data => {
      if (data.message == 'success') {
        setOpen(true)
        setLoading(false)
        cookies.remove('authentication', {path: '/'})
      } else {

        setErrorCode(data.err.code)
        setLoading(false)
      }
    })
  };

  function renderSwitch(input) {
    console.log("Input", input)
    switch(input) {
      case 23505:
        return (<div>Email Already Exists</div>)
    }
  }

  const confirmHandeler = () => {
    navigate('/sign_in')
  }
  if(loading === true){
    return(
      <Box sx={{display:'flex', placeContent:'center center', paddingTop:'10%'}}>
      <CircularProgress/>
      </Box>
    )
  }else{

    return (
      <>
      <LeftBar/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'text.primary' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, borderColor:'text.primary' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    variant='filled'
                    InputLabelProps={{sx:{
                      color:'text.primary',
                      '&.Mui-focused':{
                        color:'text.secondary'
                      },
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    variant='filled'
                    InputLabelProps={{sx:{
                      color:'text.primary',
                      '&.Mui-focused':{
                        color:'text.secondary'
                      },
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    variant='filled'
                    InputLabelProps={{sx:{
                      color:'text.primary',
                      '&.Mui-focused':{
                        color:'text.secondary'
                      },
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    variant='filled'
                    InputLabelProps={{sx:{
                      color:'text.primary',
                      '&.Mui-focused':{
                        color:'text.secondary'
                      },
                      }
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
              </Grid>
              <Box sx={{ display: 'flex', }} style={{
                verticalAlign: 'center',
                justifyContent: 'center'
              }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor:'text.secondary',
            '&:hover':{
             backgroundColor:'text.primary',
             color:'background.paper'
            } }}
              >
                Sign Up
                
              </Button>
              {loading == true ? (
                  <CircularProgress style={{marginTop: '20px', float:'right'}} color="success" />
                ) : (<></>) }
              </Box>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link onClick={()=>navigate('/sign_in')} variant="body2" sx={{color:'text.primary', cursor:'pointer'}}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item color="red">
                  {renderSwitch(errorCode)}
                </Grid>
              </Grid>
            </Box>
          </Box>
  
        </Container>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Account Created Successfully
                </Typography>
                <Button onClick={confirmHandeler}id="transition-modal-description" sx={{ mt: 2 }}>
                  Confirm
                </Button>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </>
    );
  }
}