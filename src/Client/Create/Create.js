import React, { useState } from "react"
import {
    TextField,
    Grid,
    useMediaQuery,
    Button,
    Box,
} from "@mui/material";

const CreateClient = ({ handleSubmit, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        MobileNo: "",
        Address: "",
        CompanyName: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Grid container columnSpacing={2}>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

                    <TextField
                        label={
                            <>
                                Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

                    <TextField
                        label={
                            <>
                                Email <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Mobile No. <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="MobileNo"
                        value={formData.MobileNo}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Address <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="Address"
                        value={formData.Address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        label={
                            <>
                                Company Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="CompanyName"
                        value={formData.CompanyName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

            </Grid>

            <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px' }}>
                <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
                <Button onClick={handleSubmit} className="primary_button">
                    Submit
                </Button>
            </Box>

        </>
    )
}

export default CreateClient