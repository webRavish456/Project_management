import React, { useState } from "react"
import {
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Grid,
    useMediaQuery,
    Box,
    Button,
} from "@mui/material";

const EditClient = ({ handleUpdate, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        MobileNo: "",
        Address: "",
        CompanyName: "",
        status: "",
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
                                Address<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="Address"
                        value={formData.Address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                        <Select name="Status" value={formData.status} onChange={handleChange}>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                            <MenuItem value="upcoming">Upcoming</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px' }}>
                <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
                <Button onClick={handleUpdate} className="primary_button">
                    Update
                </Button>
            </Box>

        </>
    )
}

export default EditClient