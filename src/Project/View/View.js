import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewProject =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Project Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">Ecommerce</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Project Description:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">Ecommerce Description</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Start Date</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">10/03/2025</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">End Date</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">10/10/2025</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Budget:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">10000</Box>
            </Grid>

            </Grid>


            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Status:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="PageDescription">Active</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Priority:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="PageDescription">High</Box>
            </Grid>

            </Grid>



            </Grid>

        </>
     )
}

export default ViewProject