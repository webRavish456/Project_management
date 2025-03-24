import { Box, Button } from "@mui/material";
import React from "react"

const DeleteFinance = ({handleClose, handleDelete}) =>
{
     return (
     <>
           <Box sx={{height: '40px', width: '500px'}}>
             Are you sure want to delete?
           </Box>
           <Box className="submit" sx={{display: 'flex', justifyContent: 'flex-end', gap: '10px', alignItems:'center'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleDelete} className="primary_button">
              Delete
            </Button>
            </Box>
     </>
     )
}

export default DeleteFinance;