import React, {useState} from "react"
import {
    TextField,
    Grid,
    Button,
    Box,
    CircularProgress,
    useMediaQuery,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
  } from "@mui/material";



import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


  const schema = yup.object().shape({
    projectTitle: yup.string().required("Project tittle is required"),
    meetingDate: yup.string().required(" Meeting  is required"),
  });

const CreateMeeting =({handleCreate, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");
     const token= localStorage.getItem("token");

    const Base_url = process.env.REACT_APP_BASE_URL;
  
    const [loading, setLoading] = useState(false)
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });
  

  
  
    const onSubmit = (data) => {
    
           setLoading(true)
  
          const formdata = new FormData();
          formdata.append("projectTitle", data.projectTitle);
          formdata.append("description", data.description);
          formdata.append("scheduledby", data.scheduledby);
          formdata.append("meetingDate", data.meetingDate);
          formdata.append("duration", data.duration);
          formdata.append("status", data.status);
          
          const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`, 
             },
          };
      
          fetch(`${Base_url}/meetingschedule`, requestOptions)
            .then((response) => response.text())
      
            .then((result) => {
      
              const res = JSON.parse(result)
      
              if(res.status==="success")
              {
                setLoading(false)
               
                toast.success("Meeting Created Successfully!")
                handleCreate(true)
                handleClose()
                reset();
              }
              else {
      
                setLoading(false)
                toast.error(res.message)
      
              }
            })
            .catch((error) => console.error(error));
    };

     return (
        <>
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="String"
              label={
                <>
                  project Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("projectTitle")}
              error={!!errors.projectTitle}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.projectTitle?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="String"
              label={
                <>
                 description<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("description")}
              error={!!errors.description}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.description?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
             // InputLabelProps={{shrink: true,}}
              label={
                <>
                scheduled by<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("scheduledby")}
              error={!!errors.scheduledby}
            
              
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.scheduledby?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="date"
              InputLabelProps={{shrink: true,}}
              label={
                <>
                 Meeting Date<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("meetingDate")}
              error={!!errors.meetingDate}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.meetingDate?.message}
            </div>
          </Grid>

 
 

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="String"
              label={
                <>
                 Duration<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("duration")} 
              error={!!errors.duration}
            
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.duration?.message}
            </div>
          </Grid>
          {/* <Grid item xs={12}  sm={isSmScreen?12:6} md={6}>
            <TextField
              type="String"
              label={
                <>
                Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("status")}
              error={!!errors.status}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.status?.message}
            </div>
          </Grid> */}
          < Grid item xs={12} sm={isSmScreen?12:6} md={6}>
          <FormControl fullWidth margin="normal" error={!!errors.status}>
              <InputLabel id="Status-label">
                Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="status"
                defaultValue=""
                {...register("status")}
              >
                <MenuItem value="complete">Complete</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="incomplete">Incomplete</MenuItem>
              </Select>
              <FormHelperText>{errors.status?.message}</FormHelperText>
            </FormControl>
            </Grid>

 
 

        </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
                 <Button onClick={handleClose} className="secondary_button">
                   Cancel
                 </Button>
                 <Button type="submit" className="primary_button">
       
                 {loading ? (
              <>
                <CircularProgress size={18} 
                 style={{ marginRight: 8, color: "#fff" }} />
                       Submitting
                   </>
                   ) : (
                   "submit"
                   )}
       
                 </Button>
               </Box>
       
      </form>

        </>
     )
}

export default CreateMeeting;