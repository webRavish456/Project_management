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

const CreateDiscount =({handleSubmit, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        ProjectName: "",
        ProjectDescription: "",
        StartDate: "",
        EndDate: "", 
        Priority:"", 
        Budget: "",
        statu: "",
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
                Project Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="ProjectName"
            value={formData.ProjectName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
                Project Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="ProjectDescription"
            value={formData.ProjectDescription}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Start Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="StartDate"
            value={formData.discountValue}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                End Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="EndDate"
            value={formData.EndDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Project Priority <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Priority"
            value={formData.Priority}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>
            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Project Budget<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Budget"
            value={formData.Budget}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>
            </Grid>
            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Projet Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>



            

            <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px',margin: '20px'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleSubmit} className="primary_button">
             Submit
            </Button>
            </Box>

        </>
     )
}

export default CreateDiscount