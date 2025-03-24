import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import CloseIcon from "@mui/icons-material/Close";
import Search from "../Search/Search";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow ,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  IconButton,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  useMediaQuery,
} from "@mui/material";
import CommonDialog from "../Component/CommonDialog/CommonDialog";
import ViewDiscount from "./View/View";
import CreateDiscount from "./Create/Create";
import EditDiscount from "./Edit/Edit";
import DeleteDiscount from "./Delete/Delete";

const Discount=()=>
{

  const [openData, setOpenData] = useState(false)

  const [viewData, setViewData] = useState(false)

  const [editData, setEditData] = useState(false)

  const [deleteData, setDeleteData] = useState(false)

 const handleView = () =>
  {
    setViewData(true)
  }

const handleEdit = () =>
{
   setEditData(true)
}

const handleDelete = () =>
  {
    setDeleteData(true)
  }

    const columns = [
        { id: 'si', label: 'SI. No', flex:1, align:'center' },
        { id: 'ProjectName', label: 'Project Name', flex:1,align:'center' },
        {
          id: 'ProjectDescription',
          label: 'Project Description',
          flex:1,
          align:'center'
        },
        {
          id: 'StartDate',
          label: 'Start Date',
          flex:1,
           align:'center'
        },
        {
          id: 'EndDate',
          label: 'End Date',
          flex:1,
          align:'center',
        },
        {
            id: 'Priority',
            label: 'Priority',
            flex:1,
            align:'center',
          },
          {
            id: 'Budget',
            label: 'Budget',
            flex:1,
            align:'center',
          },

          {
            id: 'Status',
            label: 'Status',
            flex:1,
            align:'center',
          },

          {
            id: 'actions',
            label: 'Action',
            flex:1,
            align:'center',
          },
      ];
      
      function createData(si, ProjectName, ProjectDescription, StartDate, EndDate, Priority, Budget, Status) {
        return {
          si,
          ProjectName,
          ProjectDescription,
          StartDate,
          EndDate,
          Priority,
          Budget,
          Status,
          actions: (
            <>
              <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}} onClick={handleView}>
                <VisibilityIcon  />
              </IconButton>
              <IconButton style={{color:"#000", padding:"4px",transform:"scale(0.8)"}} onClick={handleEdit} >
                <EditIcon />
              </IconButton>
              <IconButton style={{color:"#000", padding:"4px",transform:"scale(0.8)"}} onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </>
          ),
        };
      }
      
      const rows = [
        createData(1, "Ecommerce", "Ecommerce Description","10/03/2025", "10/10/2025", "High",10000, "Complete",),
        createData(2, "Learning", "Learning Mnagement","11/03/2025", "15/10/2025", "Low",20000, "On Hold",),
        createData(3, "Real State", "Real State Mnagement","15/03/2025", "16/10/2025", "High",30000, "Complete",),
        createData(4, "Inventory", "Inventory Mnagement","17/03/2025", "18/10/2025", "Medium",40000, "On Hold",),
        createData(5, "Clinic", "Clinic Mnagement","19/03/2025", "20/10/2025", "Low",10000, "Complete",),

      
      ];

      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(10);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      const onAddClick =()=>
        {
          setOpenData(true)
        }
   
        const handleClose = () => {
          setEditData(false)
          setViewData(false)
          setOpenData(false)
          setDeleteData(false)
       };
   
       const handleSubmit = (e) => {
         e.preventDefault();
         setOpenData(false)
         // console.log("Form Data Submitted:", formData);
       }

       const handleUpdate = (e) => {
          e.preventDefault();
          setEditData(false)
       }
  

    return (
      
      <Box className="container">
        <Search onAddClick={onAddClick}/>
     <Paper sx={{ width: '100%', overflow:"hidden" }}>
      <TableContainer  >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight:900 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
   
     <CommonDialog 
      open={openData || viewData || editData || deleteData} 
      onClose={handleClose}
      dialogTitle={ <>
         {openData? "Create New Project" : viewData ? "View Project Details": editData?"Edit Project Details":deleteData?"Delete Project Details ":null}
      </>}
      
      dialogContent = {
         openData ? <CreateDiscount handleSubmit={handleSubmit} handleClose={handleClose} /> :
          viewData ? <ViewDiscount /> : 
         editData ? <EditDiscount handleUpdate={handleUpdate} handleClose={handleClose} /> : 
         deleteData? <DeleteDiscount handleDelete={handleDelete} handleClose={handleClose} />:null
        
      }

      />

      
    </Box>
    )
}

export default Discount;