import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewTask =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Projetc Title:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">Ecommerce</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Assignee:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">Kavita</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Start Date:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">2024-03-01</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">End Date:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">2024-03-31</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Priority:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">LOw</Box>
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

export default ViewTask