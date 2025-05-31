import { Box, Button, CircularProgress } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react"

const DeleteLeads = ({handleClose, handleDelete, isDeleting}) =>
{
     return (
     <>
         <Box sx={{height:'40px', width:'450px'}}>
                     Are you sure want to delete?
                   </Box>
                   <Box className="submit" sx={{display :'flex', justifyContent : 'flex-end', gap :'10px'}}>
                    <Button onClick={handleClose} className="secondary_button" sx={{backgroundColor:"grey"}} >Cancel</Button>
                    <Button onClick={handleDelete}  className="delete_button">
                    {isDeleting ? ( <>
                    <CircularProgress
                    size={18}
                    style={{ marginRight: 8, color: "#fff" }}
                     /> 
                      Deleting
                     </> 
                    )   : 
                       "Delete"
                   }
        
        
                    </Button>
                    </Box>
     </>
     )
}

export default DeleteLeads;