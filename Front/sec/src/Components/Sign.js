import {React,useState}from 'react'
import {Box,FormControl,Stack, TextField, Typography,Button,styled}from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    
   const Next = useNavigate();

  const Sub = async()=>{
    await axios.post('http://localhost:9000/user/sign',{ // const user=axios.get(url)
                                                      //setapidata(user.data)
        firstname,
        lastname,
        email,
        password,
    })


  }
   const Submit=(e)=>{
    e.preventDefault();
   }
   const Center = styled(Box)({
    display:"flex",
    justifyContent:"center"
  })
    
  
  return (
      <div>
         <Center>
      <Box onSubmit={Submit}  sx={{
        display:"flex",
        justifyContent:"center",
        marginTop:"100px",
        width:"300px",
        height:"480px",
        boxShadow:"3px 3px 5px ",
        borderRadius:"5px"
        }}>
         <FormControl >
           <Stack direction="column" spacing={2} sx={{justifyContent:"center",alignItems:"center",margin:"auto"}} >
              <LockOpenIcon/>
              <Typography variant="h4" color="black">SIGN</Typography>
            <TextField 
              type="text"
              name="firstname"
              label="Firstname" 
              variant="standard" 
              value={firstname}
              onChange={(e)=>{setFirstname(e.target.value)}}>
               
              </TextField>
              <TextField 
              type="text"
              name="lastname"
              label="Lastname" 
              variant="standard" 
              value={lastname}  
              onChange={(e)=>{setLastname(e.target.value)}}>
              </TextField>
              
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
              onChange={(e)=>{setPassword(e.target.value)}}
              >
                
              </TextField>
              <Button onClick={Sub} variant="contained" sx={{backgroundColor:"black"}}>Sign Up</Button>
              <Button onClick={ ()=> Next('/login')} variant="text" >Click to Login</Button>
           </Stack>
         </FormControl>
      </Box>
      </Center>
  </div>
 ) 
}

export default Sign