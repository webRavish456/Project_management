import React from "react";
import {Box, Button, TextField} from "@mui/material"

<<<<<<< HEAD

const Forgot=()=>
{

return (
        <>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off" className="register">

            <Box className="header_title">Forgot</Box>     

            <Box className="Forgot">  

           <TextField
           type="email"
           required
           id="email"
           variant="standard"
           label="Enter Email Id"
        />
        OR

         <TextField
          type="number"
          required
           variant="standard"
          id="number"
          label="Enter number"
        />

        <TextField
        type="Password"
          required
          varient="standard"
          id="Password"
          lable="Enter Password"
          />


          <Box className="forgot_Password">
             <Box className="forgot">Forgot Password</Box>
          </Box>
          
          <Button className="primary_button" >Register</Button>
            
         <Box className="account">
            <Box>Already an account</Box>
            <Box className="forgot" >Login</Box>
         </Box>

          </Box> 
        
        </Box> 
        </>
      )
}

=======
const Forgot=()=>
{
      return (
        <>
          <Box component="form"   sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off" className="register">
            <Box className="header_title">Forgot Password</Box>     
            <Box className="Forgot">  
              <TextField  type="email" required  id="email"  variant="standard"  label="Enter Email Id"/>
              <TextField type="password"  required  variant="standard" id="password"  label="Enter Password" />
              <TextField  type="password"  required  variant="standard"  id="password"  label="Confirm Password" />
               <Button className="primary_button">Change password</Button>
           </Box> 
          </Box> 
        </>
      )
}
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7
export default Forgot;