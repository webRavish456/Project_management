import React, {useState} from "react"
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

const EditProject =({handleUpdate, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        ProjectName: "",
        ProjectDescription: "",
        StartDate: "",
        EndDate: "",  
        Priority: "",
        Budget:"",
        status: "",
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
                ProjectName <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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
            value={formData.StartDate}
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
            Priority <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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
            Budget <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Budget"
            value={formData.Budget}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            

           
            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
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

            <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px',margin: '20px'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleUpdate} className="primary_button">
             Update
            </Button>
            </Box>

        </>
     )
}

export default EditProject