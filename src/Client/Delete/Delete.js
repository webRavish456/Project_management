import { Box, Button } from "@mui/material";
import React from "react"

const DeleteClient = ({ handleClose, handleDelete }) => {
    return (
        <>
            <Box sx={{ height: '30px', width: '600px' }}>
                Are you sure want to delete?
            </Box>
            <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px' }}>
                <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
                <Button onClick={handleDelete} className="primary_button">
                    Delete
                </Button>
            </Box>
        </>
    )
}

export default DeleteClient;