import React,{useState,useEffect} from 'react'
import {Box, Table} from '@mui/material'
import axios from 'axios'

const Data = () => {

  const [apidata,setApidata] = useState([]);
    
  

   const Getdata = async () => {
       const user =await axios.get('http://localhost:9000/user/login')
   setApidata(user.data.log)
  
   console.log(user.data)
  
  
   };
  

   useEffect(()=>{    
    Getdata()
  },[]);
   
   
   

  return (
    <Box 
        textAlign="center"  
        alignItems="center" 
        display="flex" 
        margin="auto"
        marginTop="100px"
        width="500px">
        <Table>
      <caption>User Data</caption>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Menu</th>
          <th>Calories</th>
          <th>Fat&nbsp;(g)</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {apidata.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  
   </Box>
  )
}

export default Data