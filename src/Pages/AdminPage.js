import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import LeftBar from '../components/LeftBar';
import AdminSplash from '../components/AdminSplash';
import { AppContext } from '../context/AppContext';

const AdminPage = ()=>{
    const {themeToggle} = useContext(AppContext)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: (themeToggle === false ? 'text.primary' : 'background.default') }}>
        <LeftBar/>
        <AdminSplash/>
        
    </Box>
    )
}

export default AdminPage



