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

const EditMeeting =({handleUpdate, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        ProjectTittle: "",
        Description: "",
        Scheduledby: "",
        MeetingDate: "",  
        Duration: "",
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
                Project Tittle <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Projecttittle"
            value={formData.discountCode}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Description<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Description"
            value={formData.validTo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
                Schediled by <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Scheduledby"
            value={formData.discountDescription}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Meeting Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="MeetingDate"
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
                Duration<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="duration"
            value={formData.validFrom}
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

            <Box className="submit">
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleUpdate} className="primary_button">
             Update
            </Button>
            </Box>

        </>
     )
}

export default EditMeeting