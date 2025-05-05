import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewFinance =({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Name :</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.name}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">₹ Amount :</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.amount}</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Transaction type :</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.TransactionType}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Category :</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.Category}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Payment Mode:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.PaymentMode}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Transaction Date:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.TransactionDate}</Box>
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

export default ViewFinance