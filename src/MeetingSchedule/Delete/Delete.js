import { Box, Button } from "@mui/material";
import React from "react"

const DeleteMeeting = ({handleClose, isDelete, handleDelete}) =>
{
     return (
     <>
            <Box sx={{height: '40px', width:'500px'}}>
                        Are you sure want to delete?
                      </Box>
                      <Box className="submit" sx={{display:'flex', justifyContent:'flex-end' , gap:'10px'}}>
                       <Button onClick={handleClose} className="secondary_button" sx={{backgroundColor:"red"}} >Cancel</Button>
                       <Button onClick={handleDelete} className="delete_button">
                         Delete
                       </Button>
                       </Box>    
     </>
     )
}

export default DeleteMeeting;