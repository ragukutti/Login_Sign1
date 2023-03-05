
import {Box, CardMedia} from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{justifyContent:"center",display:"flex",alignItems:"center",postion:"cover"}}>
      <CardMedia 
      component="img"
      image="https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"      />
    </Box>
  )
}

export default Home