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
   taskTitle: yup.string().required("Task Title is required"),
      taskAssignee: yup.string().required("Task assignee is required"),
      taskStartDate: yup.string().required("Task StartDate is required"),
      taskEndDate: yup.string().required("Task EndDate is required"),
      taskPriority: yup.string().required("Task Priority is required"),
     taskStatus: yup.string()
});

const EditTask = ({ handleUpdate,  editData,  handleClose }) => {

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
        taskTitle: editData.taskTitle || "",
        taskAssignee: editData.taskAssignee || "",
        taskStartDate: editData.taskStartDate ? new Date(editData.taskStartDate).toISOString().split("T")[0] : "",
        taskEndDate: editData.taskEndDate ? new Date(editData.taskEndDate).toISOString().split("T")[0] : "",
        taskPriority: editData.taskPriority || "",
        taskStatus: editData.taskstatus || "",
      });
    }
  }, [editData, reset]);


  const onSubmit = (data) => {
  
         setLoading(true)

        const formdata = new FormData();
        formdata.append("taskTitle", data.taskTitle);
        formdata.append("taskAssignee", data.taskAssignee);
        formdata.append("taskStartDate", data.taskStartDate);
        formdata.append("taskEndDate", data.taskEndDate);
        formdata.append("taskPriority", data.taskPriority);
        formdata.append("taskStatus", data.taskStatus);
    
        const requestOptions = {
          method: "PATCH",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`, 
           },
        };
    
        fetch(`${Base_url}/Task/${editData._id}`, requestOptions)
          .then((response) => response.text())
    
          .then((result) => {
    
            const res = JSON.parse(result)
    
            if(res.status==="success")
            {
              setLoading(false)
             
              toast.success("Task Updated Successfully!")
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


          
                // const handleStatusChange = (event) => setPriority(event.target.value); 
                //                                const [Status, setPriority] = useState(""); 
                                               
                //    const handleStatusChange1 = (event) => setPriority1(event.target.value);
                //                                       const [Priority, setPriority1] = useState(""); 

  return (
    <>
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Task Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("taskTitle")}
              error={!!errors.taskTitle}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.taskTitle?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Task Assignee <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("taskAssignee")}
              error={!!errors.taskAssignee}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.taskAssignee?.message}
            </div>
          </Grid>

          <Grid item xs={12}sm={isSmScreen?12:6} md={6}>
            <TextField
               type="date"
               InputLabelProps={{ shrink:true}}
              label={
                <>
                  Task StartDate <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("taskStartDate")}
              error={!!errors.taskStartDate}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.taskStartDate?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
               type="date"
               InputLabelProps={{ shrink:true}}
              label={
                <>
                  Task EndDate <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("taskEndDate")}
              error={!!errors.taskEndDate}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.taskEndDate?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
          
               
                
                 {/* <TextField
                              type="text"
                              label={
                                <>
                                  Task Priority <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                              }
                              variant="outlined"
                              {...register("taskPriority")}
                              error={!!errors.taskPriority}
                              fullWidth
                              margin="normal"
                            />
                            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                              {errors.taskPriority?.message}
                            </div> */}

                            <FormControl fullWidth margin="normal" error={!!errors.taskStatus}>
                                          <InputLabel id="taskPriority-label">
                                            task Priority<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                          </InputLabel>
                                          <Select
                                            labelId="taskPriority-label"
                                            id="taskPriority"
                                            label="taskPriority"
                                            defaultValue={editData.taskPriority}
                                            {...register("taskPriority")}
                                          >
                                            <MenuItem value="low">low</MenuItem>
                                            <MenuItem value="medium">medium</MenuItem>
                                            <MenuItem value="high">high</MenuItem>
                                          </Select>
                                          <FormHelperText>{errors.taskPriority?.message}</FormHelperText>
                                        </FormControl>

          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
         
                      {/* 
                            <TextField
                        type="text"
                        label={
                          <>
                            taskStatus <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                          </>
                        }
                        variant="outlined"
                        {...register("taskStatus")}
                        error={!!errors.taskStatus}
                        fullWidth
                        margin="normal"
                      />
                      <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                        {errors.taskStatus?.message}
                      </div> */}

                      <FormControl fullWidth margin="normal" error={!!errors.taskStatus}>
                                    <InputLabel id="taskStatus-label">
                                      task Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                    </InputLabel>
                                    <Select
                                      labelId="taskStatus-label"
                                      id="taskStatus"
                                      defaultValue={editData.taskStatus}
                                      {...register("taskStatus")}
                                    >
                                      <MenuItem value="complete">Complete</MenuItem>
                                      <MenuItem value="active">Active</MenuItem>
                                      <MenuItem value="incomplete">Incomplete</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.taskStatus?.message}</FormHelperText>
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

export default EditTask;