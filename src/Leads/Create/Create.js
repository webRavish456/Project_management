import React, {useState} from "react"
import {
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Grid,
    useMediaQuery,
    Button,
    Box,
  } from "@mui/material";

const CreateLeads =({handleSubmit, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        LeadsName: "",
        Email: "",
        MobileNo: "",
        Address: "",  
        Source: "",
        Status: "",
     });

     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

     return (
        <>
             <Grid container columnSpacing={2}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
                Lead`s Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="LeadsName"
            value={formData.LeadsName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

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

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Mobile  No <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="MobileNo"
            value={formData.MobileNo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Address <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Adress"
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
                Source <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Source"
            value={formData.Source}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>
      
            <Grid item xs={12} sm={12} md={12}>
            <TextField
            label={
            <>
                Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>
            </Grid>

            <Box className="submit">
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleSubmit} className="primary_button">
             Submit
            </Button>
            </Box>

        </>
     )
}

export default CreateLeads