import React from "react";
import {Box, Button, TextField} from "@mui/material"

<<<<<<< HEAD

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
=======
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
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7

export default SignIn;