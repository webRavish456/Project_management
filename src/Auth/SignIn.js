import React from "react";
import {Box, Button, TextField} from "@mui/material"


const SignIn=()=>
{

    
      return (
        <>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off" className="register">

            <Box className="header_title">SignIn</Box>     

            <Box className="SignIn">  

           <TextField
           type="email"
           required
           id="email"
           variant="standard"
           label="Enter Email Id"
        />

         <TextField
          type="password"
          required
           variant="standard"
          id="password"
          label="Enter Password"
        />
        <TextField
        type="address"
        required
        varient="standard"
        lable="enter corresponding address"
        />
        
        
            
         <Box className="forgot_password">
            <Box className="forgot" >Forgot Password</Box>
         </Box>
          
          <Button className="primary_button">Register</Button>
            
         <Box className="account">
            <Box>Create an account</Box>
            <Box className="forgot">Login</Box>
         </Box>

          </Box> 
        
        </Box> 
        </>
      )
}

export default SignIn;