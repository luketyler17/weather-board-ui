import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const bcrypt = require('bcryptjs')

const url = 'https://weather-board.onrender.com'

const cookies = new Cookies();



export default function SignIn() {
  let navigate = useNavigate();
  const [errorCode, setErrorCode] = useState(0)
  const [loadUser, setLoadUser] = useState(false)

  const handleSubmit = async (event) => {
    setLoadUser(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch(`${url}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.get('email'),
        password: data.get('password'),
      })
    }).then(data => data.json())
    .then(data => {
      console.log(data)
      if (data.user_name) {
        cookies.remove('authentication', {path: '/'})
        cookies.set('authentication', data, { path: '/'})
        //const data = cookies.get('authentication, {path: '/'})
        navigate('/')
        // setLoadUser(false)
      } else {
        setErrorCode(data)
      }
    })
  };
  if(loadUser === true){
    return(
      <Box sx={{display:'flex', placeContent:'center center', paddingTop:'10%'}}>
        <CircularProgress/>
      </Box>
    )
  }else{

    return (
  
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
              {/* </Grid> */}
              <Grid item>
                <Link href="/sign_up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  
    );
  }
}