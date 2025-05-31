import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewTask =({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");



     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle"> TaskTitle:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.taskTitle}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">TaskAssignee:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.taskAssignee}</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">TaskStartDate:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{new Date(viewData.taskStartDate).toLocaleDateString("en-IN")}</Box>
            </Grid>
              </Grid>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">TaskEndDate:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{new Date(viewData.taskEndDate).toLocaleDateString("en-IN")}</Box>
            </Grid>
              </Grid>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">TaskPriority:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{viewData.taskPriority}</Box>
            </Grid>
              </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">TaskStatus:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.taskStatus}</Box>
            </Grid>

            </Grid>

           



            </Grid>

        </>
     )
}

export default ViewTask;