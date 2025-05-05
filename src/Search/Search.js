import React from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Search = ({ searchTerm, setSearchTerm, onAddClick, buttonText }) => {
  return (

    <Box
      
     style={{ display:"flex", 
     justifyContent:"flex-end", 
     width:"100%",
      alignItems:"center", 
      gridColumnGap:"20px",
      paddingTop:"0px",
      marginBottom:"10px", 
      marginTop:"0px", 
      marginRight:"0px"}}
     
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
      <Button variant="contained" color="primary" className="primary_button"  padding="10px" marginLeft="0px" startIcon={<AddIcon />} onClick={onAddClick}>
       {buttonText}
      </Button>
      </Box>
    </Box>
    
  );
};

export default Search;