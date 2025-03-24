import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewFinance =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">Anjali</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Amount:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">100000</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Transaction Type:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">Expense</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Category:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Utilitise</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Payment Mode:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Debit Card</Box>
            </Grid>

            </Grid>


            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Transaction Date:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">30/03/2025</Box>
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

export default ViewFinance