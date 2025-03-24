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
    duration,
  } from "@mui/material";

const CreateMeeting=({handleSubmit, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        ProjectTittle: "",
        Description: "",
        Scheduledby: "",
        meetingDate: "",  
        duration: "",
        Status: "",
     });

      const handleStatusChange = (event) => setPriority(event.target.value); // Priority Change
       const [Status, setPriority] = useState(""); // Priority State
     

     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

     return(
             <>
             <Grid container columnSpacing={2}>

              <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

              <TextField
                label={
              <>
                ProjectTittle <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </>
             }
            name="ProjectTittle"
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
                Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Description"
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
                Scheduled  by<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Schediledby"
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
                Meeting date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="MeetingDate"
            value={formData.Address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Duration <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Source"
            value={formData.Source}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>
      
            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
             
                      
                      <FormControl fullWidth margin="dense" required>
                      <InputLabel  >Status</InputLabel>

                        <Select  name="Status" value={Status} onChange={handleStatusChange} label= "Status">
                          <MenuItem value="Scheduled">Scheduled</MenuItem>
                          <MenuItem value="ReScheduled">ReScheduled</MenuItem>
                          <MenuItem value="Completed">Completed</MenuItem>
                          <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </Select>
                        </FormControl>
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


export default CreateMeeting