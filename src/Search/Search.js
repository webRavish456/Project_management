import React from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

<<<<<<< HEAD
const Search = ({ searchTerm, setSearchTerm, onAddClick }) => {
=======
const Search = ({ searchTerm, setSearchTerm, handleClickOpen }) => {
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7
  return (

    <Box
 
     style={{ display:"flex", 
     justifyContent:"flex-end", 
     width:"100%",
      alignItems:"center", 
      gridColumnGap:"20px", marginBottom:"10px", marginTop:"10px", marginRight:"0px"}}
     
    >
  
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: <SearchIcon style={{ marginRight: 0 }} />,
        }}
        className="search"
      />
       <Box className="buttonContainer">
<<<<<<< HEAD
      <Button variant="contained" color="primary" className="primary_button"   marginLeft="0px" tartIcon={<AddIcon />} onClick={onAddClick}>
=======
      <Button variant="contained" color="primary" className="primary_button"   marginLeft="0px" tartIcon={<AddIcon />} onClick={handleClickOpen}>
>>>>>>> ff2621e1ed2298b1442f34f8f04b64545a378ad7
        Add New
      </Button>
      </Box>
    </Box>
    
  );
};

export default Search;