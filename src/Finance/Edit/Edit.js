import React, { useEffect, useState } from "react";
import {

  TextField,
  Grid,
  useMediaQuery,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const schema = yup.object().shape({
  name: yup.string().required("Finance Name is required"),
  amount: yup.string().required("leads Name is required"),
  TransactionType: yup.string().required("leads Name is required"),
  Category: yup.string().required("leads Name is required"),
  PaymentMode: yup.string().required("leads Name is required"),
  TransactionDate: yup.string().required("email is required"),
  //Status: yup.string()
});

const EditFinance = ({ handleUpdate,  editData,  handleClose }) => {

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
        amount: editData.amount|| "",
        TransactionType: editData.TransactionType || "",
        Category: editData.Category || "",
        PaymentMode: editData.PaymentMode || "",
        TransactionDate: editData.TransactionDate || "",
        Status: editData.Status || "",
      });
    }
  }, [editData, reset]);


  const onSubmit = (data) => {
  
         setLoading(true)

        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("amount", data.amount);
        formdata.append("TransactionType", data.TransactionType);
        formdata.append("Category", data.Category);
        formdata.append("PaymentMode", data.PaymentMode);
        formdata.append("TransactionDate", data.TransactionDate);
        formdata.append("Status", data.Status);
    
        const requestOptions = {
          method: "PATCH",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`, 
           },
        };
    
        fetch(`${Base_url}/finance/${editData._id}`, requestOptions)
          .then((response) => response.text())
    
          .then((result) => {
    
            const res = JSON.parse(result)
    
            if(res.status==="success")
            {
              setLoading(false)
             
              toast.success("Finance Updated Successfully!")
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
                     type="String"
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
                     type="String"
                     label={
                       <>
                       ₹ Amount <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                       </>
                     }
                     variant="outlined"
                     {...register("amount")}
                     error={!!errors.amount}
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.amount?.message}
                   </div>
                 </Grid>
       
                 <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                   <TextField
                     type="String"
                     label={
                       <>
                       Transaction Type<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                       </>
                     }
                     variant="outlined"
                     {...register("TransactionType")}
                     error={!!errors.TransactionType}
                   
                     
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.TransactionType?.message}
                   </div>
                 </Grid>
       
                 <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                   <TextField
                     type="String"
                     label={
                       <>
                       Category <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                       </>
                     }
                     variant="outlined"
                     {...register("Category")}
                     error={!!errors.Category}
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.Category?.message}
                   </div>
                 </Grid>
       
        
                <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                          <FormControl fullWidth margin="normal" error={!!errors.PaymentMode}>
                              <InputLabel id="PaymentMode">
                                Payment Mode<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                              </InputLabel>
                              <Select
                                labelId="PaymentMode"
                                id="PaymentMode"
                                label="PaymentMode"
                                defaultValue=""
                                {...register("PaymentMode")}
                              >  
                                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                                <MenuItem value="Credit Card">Credit Card</MenuItem>
                                <MenuItem value="Cash">Cash</MenuItem>
                                <MenuItem value="Debit Card">Debit Card</MenuItem>
                                <MenuItem value="UPI">UPI</MenuItem>
                              </Select>
                              <FormHelperText>{errors.PaymentMode?.message}</FormHelperText>
                            </FormControl>
                            </Grid>
       
                 {/* <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                   <TextField
                     type="String"
                     label={
                       <>
                       Payment Mode <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                       </>
                     }
                     variant="outlined"
                     {...register("PaymentMode")} 
                     error={!!errors.PaymentMode}
                   
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.PaymentMode?.message}
                   </div>
                 </Grid> */}

                 <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                   <TextField
                     type="date"
                     InputLabelProps={{ shrink: true }}
                     label={
                       <>
                       Transaction Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                       </>
                     }
                     variant="outlined"
                     {...register("TransactionDate")} 
                     error={!!errors.TransactionDate}
                   
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.TransactionDate?.message}
                   </div>
                 </Grid>

                 < Grid item xs={12} sm={isSmScreen?12:6} md={6}>
          <FormControl fullWidth margin="normal" error={!!errors.taskStatus}>
              <InputLabel id="Status">
                Status<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>
              <Select
                labelId="Status"
                id="Status"
                label="Status"
                defaultValue=""
                {...register("Status")}
              >
                <MenuItem value="complete">Complete</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="Incomplete">Incomplete</MenuItem>
              </Select>
              <FormHelperText>{errors.Status?.message}</FormHelperText>
            </FormControl>
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
                     {...register("Status")}
                     error={!!errors.Status}
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.Status?.message}
                   </div>
                 </Grid> */}

              {/* <FormControl fullWidth margin="normal" error={!!errors.status}>
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
</FormControl>      */}
       
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

export default EditFinance;