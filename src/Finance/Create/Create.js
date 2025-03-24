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
  } from "@mui/material";

const CreateFinance =({handleSubmit, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        discountCode: "",
        discountDescription: "",
        discountValue: "",
        validFrom: "",  
        validTo: "",
        status: "",
     });

     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

     return (
        <>
             <Grid container columnSpacing={2}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
                Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
                Amount <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="amount"
            value={formData.amount}
            onChange={handleChange}
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
            value={formData.TransactionType}
            onChange={handleChange}
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
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            

            <Grid item xs={12} sm={12} md={6}>
            <TextField
            label={
            <>
                Payment mode <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="paymentMode"
            value={formData.PaymentMode}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

<TextField
label={
<>
    Transaction Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
</>
}
name="TransactionDate
"
value={formData.TransactionDate}
onChange={handleChange}
fullWidth
margin="normal"
/>
</Grid>


            </Grid>

            <Box className="submit" sx={{display: 'flex', justifyContent: 'flex-end', gap: '10px', alignItems:'center'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleSubmit} className="primary_button">
             Submit
            </Button>
            </Box>

        </>
     )
}

export default CreateFinance