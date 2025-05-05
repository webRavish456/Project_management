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
  leadsName: yup.string().required("leads Name is required"),
  email: yup.string().required("email is required"),
  status: yup.string()
});

const EditLeads = ({ handleUpdate,  editData,  handleClose }) => {

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
        leadsName: editData.leadsName || "",
        email: editData.email|| "",
        mobileNo: editData.mobileNo || "",
        address: editData.address || "",
        source: editData.source || "",
        status: editData.status || "",
      });
    }
  }, [editData, reset]);


  const onSubmit = (data) => {
  
         setLoading(true)

        const formdata = new FormData();
        formdata.append("leadsName", data.leadsName);
        formdata.append("email", data.email);
        formdata.append("mobileNo", data.mobileNo);
        formdata.append("address", data.address);
        formdata.append("source", data.source);
        formdata.append("status", data.status);
    
        const requestOptions = {
          method: "PATCH",
          body: formdata,
          headers: {
            Authorization: ` Bearer ${token}`, 
           },
        };
    
        fetch(`${Base_url}/leads/${editData._id}`, requestOptions)
          .then((response) => response.text())
    
          .then((result) => {
    
            const res = JSON.parse(result)
    
            if(res.status==="success")
            {
              setLoading(false)
             
              toast.success("leads Updated Successfully!")
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
                         Leads Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                       </>
                     }
                     variant="outlined"
                     {...register("leadsName")}
                     error={!!errors.eadsName}
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.leadsName?.message}
                   </div>
                 </Grid>
       
                 <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                   <TextField
                     type="String"
                     label={
                       <>
                       Email<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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
       
                 <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                   <TextField
                     type="String"
                     label={
                       <>
                       Mobile No<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                       </>
                     }
                     variant="outlined"
                     {...register("mobileNo")}
                     error={!!errors.mobileNo}
                   
                     
                     fullWidth
                     margin="normal"
                   />
                   <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                     {errors.moblieNo?.message}
                   </div>
                 </Grid>
       
                 <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                   <TextField
                     type="String"
                     label={
                       <>
                       Address<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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
       
        
        
       
                   < Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                           <FormControl fullWidth margin="normal" error={!!errors.source}>
                               <InputLabel id="source-label">
                                 Source<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                               </InputLabel>
                               <Select
                                 labelId="source-label"
                                 id="source"
                                 label="source"
                                 defaultValue=""
                                 {...register("source")}
                               >
                                 <MenuItem value="complete">Webside</MenuItem>
                                 <MenuItem value="active">Social Media</MenuItem>
                                 <MenuItem value="uncomplete">Referral</MenuItem>
                               </Select>
                               <FormHelperText>{errors.source?.message}</FormHelperText>
                             </FormControl>
                             </Grid>
            
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

export default EditLeads;