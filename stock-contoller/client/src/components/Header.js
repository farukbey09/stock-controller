import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';



export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:"cursive"}}>
            Task Digishifter
          </Typography>
          <img style={{width:"300px",height:"100px"}} src='https://digishifter.com/wp-content/uploads/2022/03/logo-light.png'/>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}