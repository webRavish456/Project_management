import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewProject =({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");



     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle"> ProjectName:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.ProjectName}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">ProjectDescription:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.ProjectDescription}</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">StartDate:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{viewData.StartDate}</Box>
            </Grid>
              </Grid>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">EndDate:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{viewData.EndDate}</Box>
            </Grid>
              </Grid>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

              <Grid item xs={6}>
              <Box className="pageTitle">Priority:</Box>    
              </Grid>
              <Grid item xs={6}>
          <Box className="pageDescription">{viewData.Priority}</Box>
            </Grid>
              </Grid>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

<Grid item xs={6}>
<Box className="pageTitle">Budget:</Box>    
</Grid>
<Grid item xs={6}>
<Box className="pageDescription">{viewData.Budget}</Box>
</Grid>
</Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Status:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.Status}</Box>
            </Grid>
            </Grid>

            </Grid>

        </>
     )
}

export default ViewProject;