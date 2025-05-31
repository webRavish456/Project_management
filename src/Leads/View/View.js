import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewLeads =({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle" >leadsName :</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription"> {viewData.leadsName}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle"> Email:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.email}</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">MobileNo:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.mobileNo}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Address:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.address}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Source:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.source}</Box>
            </Grid>

            </Grid>


            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Status:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.status}</Box>
            </Grid>

            </Grid>



            </Grid>

        </>
     )
}

export default ViewLeads