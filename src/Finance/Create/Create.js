import React, {useState} from "react";


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
   name: yup.string().required("Finance Name is required"),
     amount: yup.string().required("Amount is required"),
     TransactionType: yup.string().required("Transaction Type is required"),
     Category: yup.string().required("Category is required"),
     PaymentMode: yup.string().required("Payment Mode is required"),
     TransactionDate: yup.string().required("Transaction Date is required"),

  });


const CreateFinance =({handleCreate, handleClose})=>
{   
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
       formdata.append("name", data.name);
       formdata.append("amount", data.amount);
       formdata.append("TransactionType", data.TransactionType);
       formdata.append("Category", data.Category);
       formdata.append("PaymentMode", data.PaymentMode);
       formdata.append("TransactionDate", data.TransactionDate);
       formdata.append("Status", data.Status);   
       const requestOptions = {
         method: "POST",
         body: formdata,
         headers: {
           Authorization: `Bearer ${token}`, 
          },
       };
   
       fetch(`${Base_url}/finance`, requestOptions)
         .then((response) => response.text())
   
         .then((result) => {
   
           const res = JSON.parse(result)
   
           if(res.status==="success")
           {
            setLoading(false)
               
            toast.success("Finance Created Successfully!")
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

    
    const isSmScreen = useMediaQuery("(max-width:768px)");
     return (
        <>   
            <form onSubmit={handleSubmit(onSubmit)}>

             <Grid container columnSpacing={2}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
                Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="name"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
               
              ₹ Amount <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="amount"
            variant="outlined"
            {...register("amount")}
            error={!!errors.amount}
            fullWidth

            margin="normal"
            />

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Transaction Type <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="TransactionType"
            variant="outlined"
            {...register("TransactionType")}
            error={!!errors.TransactionType}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Category <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Category"
            variant="outlined"
            {...register("Category")}
            error={!!errors.Category}
            fullWidth
            margin="normal"
            />
            </Grid>

            {/* <Grid item xs={12} sm={6} md={6}>
            <TextField
            label={
            <>
                Payment Mode <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Payment Mode"
            variant="outlined"
            {...register("PaymentMode")}
            error={!!errors.PaymentMode}
            fullWidth
            margin="normal"
            />
            </Grid> */}

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

            <Grid item xs={12} sm={6} md={6}>
            <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            label={
            <>
                Transaction Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="Transaction Date"
            variant="outlined"
            {...register("TransactionDate")}
            error={!!errors.TransactionDate}
            fullWidth
            margin="normal"
            />
            </Grid>

     <Grid item xs={12} sm={12} md={12}>
          <FormControl fullWidth margin="normal" error={!!errors.Status}>
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
                <MenuItem value="Complete">Complete</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Incomplete">Incomplete</MenuItem>
              </Select>
              <FormHelperText>{errors.Status?.message}</FormHelperText>
            </FormControl>
            </Grid>
   </Grid>
        

            <Box className="submit" sx={{display :'flex', justifyContent : 'flex-end', gap :'10px'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button type="submit" onClick={handleSubmit} className="primary_button">
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

export default CreateFinance;