import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewMeetingSchedule = ({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");



     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle"> Project Title:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.projectTitle}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Description:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.description}</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">scheduled by:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{viewData.scheduledby}</Box>
            </Grid>
              </Grid>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">Meeting Date:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{new Date(viewData.meetingDate).toLocaleDateString("en-IN")}</Box>
            </Grid>
              </Grid>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">Duration:</Box>    
              </Grid>
              <Grid item xs={6}>
             <Box className="pageDescription">{viewData.duration}</Box>
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

export default ViewMeetingSchedule;