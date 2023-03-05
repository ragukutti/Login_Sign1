import React from 'react';
import{AppBar,ListItemButton,Toolbar,Typography,Stack} from '@mui/material';
import   {NavLink} from 'react-router-dom';   

const Navbar = () => {
  return (
  <>
    <AppBar position="fixed" sx={{backgroundColor:"gray"}}>
      <Toolbar >
        <Stack marginRight='auto'>
          <Typography variant="h5" sx={{fontWight:"800",textTransform:"uppercase"}}>WELCOME</Typography>
        </Stack>
        <Stack direction="row" spacing={3} marginLeft="auto" sx={{xs:"auto",sm:"auto",md:"auto"}}>
         <ListItemButton SX={{color:"white"}} Component={NavLink} to="/login">LOGIN</ListItemButton>
         <ListItemButton SX={{color:"white"}} Component={NavLink} to="/sign">SIGN UP</ListItemButton>
        </Stack>
        </Toolbar>
    </AppBar>
  </>
  )
}

export default Navbar  
