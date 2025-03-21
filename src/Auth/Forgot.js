import React from "react";
import {Box, Button, TextField} from "@mui/material"

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
export default Forgot;