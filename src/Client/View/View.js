import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material";

const ViewClient = () => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={1}>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">Neha</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Email:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">nkumari7785@gmail.com</Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Mobile No:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">9709337742</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Address:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">Jamshedpur</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Company Name:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">Ved</Box>
                    </Grid>

                </Grid>


                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

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

export default ViewClient