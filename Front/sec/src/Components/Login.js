import { TextField,Box,FormControl,Stack,Button,Typography} from '@mui/material'
import React,{useState}from 'react'
import axios from 'axios';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import { styled } from '@mui/system';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");

  const Sub = async()=>{
    await axios.post('http://localhost:9000/user/login',{
      email,
      password
    })
  }
   const Submit=(e)=>{
    e.preventDefault();
   }
   

const Center = styled(Box)({
  display:"flex",
  justifyContent:"center"
})
  
  return( 
        <>
        <Center>
       <Box onSubmit={Submit} sx={{
        display:"flex",
        justifyContent:"center",
        marginTop:"100px",
        width:"300px",
        height:"350px",
        boxShadow:"3px 3px 5px ",
        borderRadius:"5px"
        }}>
         <FormControl >
           <Stack direction="column" spacing={2} sx={{justifyContent:"center",alignItems:"center",margin:"auto"}}>
            <SensorOccupiedIcon ></SensorOccupiedIcon>
           <Typography variant="h4" color="black">LOGIN</Typography>
           <TextField
             type="email"
              name="email"
              label="email" 
              variant="standard" 
              value={email}  
              onChange={(e)=>{setEmail(e.target.value)}}>
              </TextField>
                           
              <TextField 
              name="password"
              label="password" 
              variant="standard" 
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}>

              </TextField>  
              <Button onClick={Sub} variant="contained" sx={{backgroundColor:"black"}}>Login</Button>  
              </Stack>    
          </FormControl>
      </Box> 
      </Center>     
      </>
 
  )
}

export default Login
