import React, { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  useMediaQuery,
  Box,
  Button,
  CircularProgress,
  MenuItem, 
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
  
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const schema = yup.object().shape({
      ProjectName: yup.string().required("Project Name is required"),
      ProjectDescription: yup.string().required("Project Description is required"),
      StartDate: yup.string().required("Start Date is required"),
      EndDate: yup.string().required("End Date is required"),
      Priority: yup.string().required("Priority is required"),
      Budget: yup.string().required("Budget is required"),
       Status: yup.string()
});

const EditProject = ({ handleUpdate,  editData,  handleClose }) => {

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

  useEffect(() => {
    if (editData) {
      reset({
        ProjectName: editData.ProjectName || "",
        ProjectDescription: editData.ProjectDescription || "",
        StartDate: editData.StartDate ? new Date(editData.StartDate).toISOString().split("T")[0] : "",
        EndDate: editData.EndDate ? new Date(editData.EndDate).toISOString().split("T")[0] : "",
        Priority: editData.Priority || "",
        Budget: editData.Budget || "",
        Status: editData.Status || "",
      });
    }
  }, [editData, reset]);


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
          method: "PATCH",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`, 
           },
        };
    
        fetch(`${Base_url}/Project/${editData._id}`, requestOptions)
          .then((response) => response.text())
    
          .then((result) => {
    
            const res = JSON.parse(result)
    
            if(res.status==="success")
            {
              setLoading(false)
             
              toast.success("Project Updated Successfully!")
              handleUpdate(true)
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

          <Grid item xs={12}sm={isSmScreen?12:6} md={6}>
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

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
          
                {/* <FormControl fullWidth margin="normal">
                                          <InputLabel>Priority <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                                          <Select name="Priority" value={Priority} onChange={handleStatusChange1}  
                                          // {...register("Prority")}
                                          label= "Status">
                                          error={!!errors.Priority}
                                          <MenuItem value="low">Low</MenuItem>
                                          <MenuItem value="medium">Medium</MenuItem>
                                          <MenuItem value="high">High</MenuItem>
                                          </Select>
                                           </FormControl>
                                           <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.Priority?.message}
            </div> */}
                
                 <TextField
                              type="text"
                              label={
                                <>
                                  Priority <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                              }
                              variant="outlined"
                              {...register("Priority")}
                              error={!!errors.Priority}
                              fullWidth
                              margin="normal"
                            />
                            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                              {errors.Priority?.message}
                            </div>

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

          <Grid item xs={12} sm={12} md={12}> 
          <FormControl fullWidth margin="normal" error={!!errors.Status}>
              <InputLabel id="status-label">
                Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                defaultValue={editData.Status}
                {...register("status")}
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

          {loading ? ( <>
          <CircularProgress
           size={18}
           style={{ marginRight: 8, color: "#fff" }}
          /> 
            Updating
          </> 
          )   : "Update"}
            
         
          </Button>
        </Box>
      </form>
    </>
  );
};

export default EditProject;