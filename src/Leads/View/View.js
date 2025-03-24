import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewLeads =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">LeasdsName:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">Rajat Kumar</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Email:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">Kravish45622gmail.com</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">MobileNo:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">9988776655</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Address:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Ranchi</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Source:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Social Media</Box>
            </Grid>

            </Grid>


            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Status:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Active</Box>
            </Grid>

            </Grid>



            </Grid>

        </>
     )
}

export default ViewLeads