import React from "react";
import {Box, Button, TextField} from "@mui/material"

const SignIn=()=>
{
      return (
        <>
          <Box component="form"  sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate autoComplete="off" className="register">

            <Box className="header_title">SignIn Page</Box>     

             <Box className="signIn">  
               <TextField  type="email"in    required     id="email"   variant="standard"  label="Enter Email Id"/>
               <TextField type="password"   required variant="standard" id="password"  label="Enter Password" />
                <Box className="forgot_password">
               <Box className="forgot">Forgot Password</Box>
             </Box>
          
              <Button className="primary_button">Login</Button>
            </Box> 
          </Box> 
       </>
      )
} 

export default SignIn;