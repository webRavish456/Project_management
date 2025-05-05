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
   name: yup.string().required(" Name is required"),
      email: yup.string().required("Email is required"),
      mobileNo: yup.string().required("MobileNo is required"),
      address: yup.string().required("Address is required"),
      companyName: yup.string().required("Company Name is required"),
      status: yup.string()
});

const EditClient = ({ handleUpdate,  editData,  handleClose }) => {

          const isSmScreen = useMediaQuery("(max-width:768px)");

  const token = Cookies.get('token');

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
        name: editData.name || "",
       email: editData.email || "",
        mobileNo: editData.mobileNo || "",
        address: editData.addres || "",
        companyName: editData.companyName || "",
        status: editData.status || "",
      });
    }
  }, [editData, reset]);


  const onSubmit = (data) => {
  
         setLoading(true)

        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("mobileNo", data.mobileNo);
        formdata.append("address", data.address);
        formdata.append("companyName", data.companyName);
        formdata.append("status", data.status);
    
        const requestOptions = {
          method: "PATCH",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`, 
           },
        };
    
        fetch(`${Base_url}/client/${editData._id}`, requestOptions)
          .then((response) => response.text())
    
          .then((result) => {
    
            const res = JSON.parse(result)
    
            if(res.status==="success")
            {
              setLoading(false)
             
              toast.success("Client Updated Successfully!")
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
                  Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("name")}
              error={!!errors.name}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.name?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Email <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.email?.message}
            </div>
          </Grid>

          <Grid item xs={12}sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                 MobileNo <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("mobileNo")}
              error={!!errors.mobileNo}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.mobileNo?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Address <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("address")}
              error={!!errors.address}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.address?.message}
            </div>
          </Grid>

      
                
          <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Company Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("companyName")}
              error={!!errors.companyName}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.companyName?.message}
            </div>
          </Grid>


          <Grid item xs={12} sm={isSmScreen?12:6} md={6}> 
          <FormControl fullWidth margin="normal" error={!!errors.status}>
              <InputLabel id="status-label">
                Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                defaultValue=""
                {...register("status")}
              >
                <MenuItem value="complete">Complete</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="uncomplete">Uncomplete</MenuItem>
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

export default EditClient;