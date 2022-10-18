import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions';
import { Card, Grid, Paper } from '@mui/material';
import LeftBar from '../components/LeftBar';
import AdminSplash from '../components/AdminSplash';

const AdminPage = ()=>{
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <LeftBar/>
        <AdminSplash/>
        
    </Box>
    )
}

export default AdminPage



 {/* <Card
                    style={{
                        backgroundColor: 'grey',
                        margin: '10px',
                        height: '75%',
                        boxSizing: 'border-box',
                        width:'calc(100%-50%)',
                        display: 'flex',
                    }}>
                    <Card style={{
                        backgoundColor: '#D3D3D3',
                        margin: '15px',
                        wdith: '50%',
                        boxSizing: 'border-box',
                    }}>
                        <h1 style={{
                            textAlign: "left",
                        }}>Text</h1>
                        <Typography paragraph>
                            Words
                        </Typography>
                    </Card> */}
                    {/* <Card style={{
                        backgoundColor: '#000',
                        margin: '15px',
                        wdith: '50%'

                    }}>
                        <h1 style={{
                            textAlign: "left",
                        }}>Text</h1>
                        <Typography paragraph>
                            Words
                        </Typography>
                    </Card>
                </Card>
            </Card> */}
            {/* <Card elevation={5} sx={{
                height: '50%',
                margin: '15px',

            }}>
                <h1 style={{
                    textAlign: "left",
                }}> Severe Storm</h1>
                <Card
                    style={{
                        backgroundColor: 'grey',
                        margin: '10px',
                        height: '75%',
                    }}>
                    <Paper style={{
                        backgoundColor: '#000',
                        margin: '15px',

                    }}>
                        <h1 style={{
                            textAlign: "left",
                        }}>Location</h1>
                        <Typography paragraph>
                            Words
                        </Typography>
                    </Paper>
                    <Paper style={{
                        backgoundColor: '#000',
                        margin: '15px',

                    }}>
                        <h1 style={{
                            textAlign: "left",
                        }}>Expected Conditions</h1>
                        <Typography paragraph>
                            Words
                        </Typography>
                    </Paper>
                    <Paper style={{
                        backgoundColor: '#000',
                        margin: '15px',

                    }}>
                        <h1 style={{
                            textAlign: "left",
                        }}>Time</h1>
                        <Typography paragraph>
                            Words
                        </Typography>
                    </Paper>
                </Card> */}