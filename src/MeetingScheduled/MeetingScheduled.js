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

const MeetingScheduled=()=>
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
        { id: 'ProjectTittle', label: 'Project  Name', flex:1,align:'center' },
        { id: 'Description', label: 'description',  flex:1,  align:'center' },
        { id: 'Scheduledby', label: 'Scheduled by', flex:1,  align:'center' },
        { id: 'MeetingDate',   label: 'Meeting Date', flex:1, align:'center', },
        { id: 'Duration', label: 'Duration', flex:1, align:'center',},
        { id: 'status',label: 'Status', flex:1, align:'center', },
        { id: 'actions', label: 'Action',flex:1, align:'center', },
      ];
      
      function createData(si, ProjectTittle, Description, Scheduledby, MeetingDate, Duration, status) {
        return { si, ProjectTittle, Description, Scheduledby, MeetingDate, Duration, status, actions: (
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
        createData(1, "ecommerce", "Meeting Agenda", "01/03/2025", "01/09/2025", "45 mintues","Completed", ),
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
   
       
       const handleSubmit = (e) => { e.preventDefault(); setOpenData(false)
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
         {openData? "Create New Meeting" : viewData ? "View Meeting Details": editData?"Edit Meeting Details":deleteData?"Delete Meeting":null}
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

export default MeetingScheduled;