import React, {useState} from "react"
import {
    TextField,
    Grid,
    Button,
    Box,
    useMediaQuery,
    InputLabel,
    FormControl,
    Select,
    MenuItem,

    CircularProgress,
    FormHelperText
  } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


  const schema = yup.object().shape({
    ProjectName: yup.string().required("Project Name is required"),
    ProjectDescription: yup.string().required("Project Description is required"),
    StartDate: yup.string().required("Start Date is required"),
          EndDate: yup.string().required("End Date is required"),
          Priority: yup.string().required("Priority is required"),
          Budget: yup.number().required("Budget is required"),
           Status: yup.string()
  });

const CreateProject =({handleCreate, handleClose})=>
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
    } = useForm({ resolver: yupResolver(schema),
    });
  

  
  
    const onSubmit = (data) => {
    
           setLoading(true)
  
          const formdata = new FormData();
          formdata.append("ProjectName", data.ProjectName);
          formdata.append("ProjectDescription", data.ProjectDescription);
          formdata.append("StartDate", data.StartDate);
          formdata.append("EndDate", data.EndDate);
          formdata.append("Priority", data.Priority);
          formdata.append("Budget", data.Budget);
          formdata.append("Status", data.Status);
      
          const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`, 
             },
          };
      
          fetch(`${Base_url}/project`, requestOptions)
            .then((response) => response.text())
      
            .then((result) => {
      
              const res = JSON.parse(result)
      
              if(res.status==="success")
              {
                setLoading(false)
               
                toast.success("Project Created Successfully!")
                handleCreate(true)
                handleClose()
                reset();
              }
              else {
      
                setLoading(false)
                console.log("formsubmit",res)
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
              type="text"
              label={
                <>
                  Project Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("ProjectName")}
              error={!!errors.ProjectName}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.ProjectName?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Project Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("ProjectDescription")}
              error={!!errors.ProjectDescription}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.ProjectDescription?.message}
            </div>
          </Grid>
          
          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
               type="date"
                InputLabelProps={{ shrink:true}}
              label={
                <>
                   Start Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("StartDate")}
              error={!!errors.StartDate}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.StartDate?.message}
            </div>
          </Grid>
         
          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="date"
               InputLabelProps={{ shrink:true}}
              label={
                <>
                  End Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("EndDate")}
              error={!!errors.EndDate}

              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.EndDate?.message}
            </div>
          </Grid>

          < Grid item xs={12} sm={isSmScreen?12:6} md={6}>
          <FormControl fullWidth margin="normal" error={!!errors.Priority}>
              <InputLabel id="Priority-label">
                Priority<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>
              <Select
                labelId="Priority-label"
                id="Priority"
                label="Priority"
                defaultValue=""
                {...register("Priority")}
              >
                <MenuItem value="low">low</MenuItem>
                <MenuItem value="medium">medium</MenuItem>
                <MenuItem value="high">high</MenuItem>
              </Select>
              <FormHelperText>{errors.Priority?.message}</FormHelperText>
            </FormControl>
            </Grid>

         
          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Budget <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("Budget")}
              error={!!errors.Budget}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.Budget?.message}
            </div>
          </Grid>

          < Grid item xs={12} sm={12} md={12}>
          <FormControl fullWidth margin="normal" error={!!errors.Status}>
              <InputLabel id="Status-label">
                Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>
              <Select
                labelId="Status-label"
                id="Status"
                label="Status"
                defaultValue=""
                {...register("Status")}
              >
                <MenuItem value="complete">Complete</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="incomplete">Incomplete</MenuItem>
              </Select>
              <FormHelperText>{errors.Status?.message}</FormHelperText>
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
            "Submit"
            )}

          </Button>
        </Box>
      </form>

        </>
     )
}

export default CreateProject;