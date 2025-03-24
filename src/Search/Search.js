import React from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Search = ({ searchTerm, setSearchTerm, onAddClick }) => {
  return (

    <Box

      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "center",
        gridColumnGap: "20px", marginBottom: "10px", marginTop: "10px", marginRight: "0px"
      }}

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
<<<<<<< HEAD
       <Box className="buttonContainer">
      <Button variant="contained" color="primary" className="primary_button"   marginLeft="0px" tartIcon={<AddIcon />} onClick={onAddClick}>
        Add New
      </Button>
=======
      <Box className="buttonContainer">
        <Button variant="contained" color="primary" className="primary_button" marginLeft="0px" tartIcon={<AddIcon />} onClick={onAddClick}>
          Add New
        </Button>
>>>>>>> ebeda794dbe6328105050e4b23a2c8e5abc5ed6b
      </Box>
    </Box>

  );
};

export default Search;