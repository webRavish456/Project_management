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
    // formData,
    // handleChange,
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
    taskTitle: yup.string().required("Task Title is required"),
    taskAssignee: yup.string().required("Task assignee is required"),
    // TaskStartDate: yup.string().required("Task StartDate is required"),
    // TaskEndDate: yup.string().required("Task EndDate is required"),
    // TaskPriority: yup.string().required("Task Priority is required"),
  });

const CreateTask =({handleCreate, handleClose})=>
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
          formdata.append("taskTitle", data.taskTitle);
          formdata.append("taskAssignee", data.taskAssignee);
          formdata.append("taskStartDate", data.taskStartDate);
          formdata.append("taskEndDate", data.taskEndDate);
          formdata.append("taskPriority", data.taskPriority);
          formdata.append("taskStatus", data.taskStatus);
      
          const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`, 
             },
          };
      
          fetch(`${Base_url}/task`, requestOptions)
            .then((response) => response.text())
      
            .then((result) => {
      
              const res = JSON.parse(result)
      
              if(res.status==="success")
              {
                setLoading(false)
               
                toast.success("Task Created Successfully!")
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

      // const handletaskStatusChange = (event) => setPriority(event.target.value); 
      //                                const [taskStatus, setPriority] = useState(""); 
                                     
      //    const handletaskStatusChange1 = (event) => setPriority1(event.target.value);
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
                  Task 
                  Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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

          
          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
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
                defaultValue=""
                {...register("taskPriority")}
              >
                <MenuItem value="low">low</MenuItem>
                <MenuItem value="medium">medium</MenuItem>
                <MenuItem value="high">high</MenuItem>
              </Select>
              <FormHelperText>{errors.taskPriority?.message}</FormHelperText>
            </FormControl>

           {/* <FormControl fullWidth margin="normal">
                          <InputLabel>Priority <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                          <Select name="Priority" value={Priority} onChange={handletaskStatusChange1} label= "taskStatus">
                          <MenuItem value="low">Low</MenuItem>
                          <MenuItem value="medium">Medium</MenuItem>
                          <MenuItem value="high">High</MenuItem>
                          </Select>
                           </FormControl> */}

          </Grid>

          < Grid item xs={12} sm={isSmScreen?12:6} md={6}>
          <FormControl fullWidth margin="normal" error={!!errors.taskStatus}>
              <InputLabel id="taskStatus-label">
                task Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>
              <Select
                 labelId="taskStatus-label"
                 id="taskStatus"
                label="taskStatus"
                defaultValue=""
                {...register("taskStatus")}
              >
                <MenuItem value="complete">Complete</MenuItem> 
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="incomplete">Incomplete</MenuItem>
              </Select>
     <FormHelperText>{errors.taskStatus?.message}</FormHelperText>
            </FormControl>
            </Grid>

                        {/* <FormControl fullWidth margin="normal">
                           <InputLabel>taskStatus <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                          <Select name="taskStatus" value={taskStatus} onChange={handletaskStatusChange} label= "taskStatus">
                           <MenuItem value="active">Active</MenuItem>
                           <MenuItem value="inactive">Inactive</MenuItem>
                           <MenuItem value="upcoming">Upcoming</MenuItem>
                           </Select>
                           </FormControl> */}



      

                    

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

export default CreateTask;