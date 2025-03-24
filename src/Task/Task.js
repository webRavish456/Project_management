import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import SearchAppBar from "../Search/SearchBar";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import CloseIcon from '@mui/icons-material/Close';


export default function StickyHeadTable() {


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] =useState(10);

  const [viewData, setViewData] =useState(false)

  const handleView=()=>
  {
    setViewData(true)
  }

  const handleClose=()=>
  {
    setViewData(false)
  }

  const columns = [
    { id: 'SN', label: ' SI. No', minWidth: 40 ,  align: 'center'},
    { id: 'ProjectTittle', label: ' Project Tittle', minWidth: 70,  align: 'center' },
    { id: 'Assignee', label: 'Assignee', minWidth: 70,  align: 'center' },
    {  id: 'StartDate', label: 'Start date',  minWidth: 70,  align: 'center' },
    { id: 'EndDate',label: 'End Date',minWidth: 70, align: 'center' },
    { id: 'Priority', label: ' Priority', minWidth: 70 ,  align: 'center'},
    { id: 'ProjectStatus', label: ' Project Status', minWidth: 70 ,  align: 'center'},
    { id: 'Action', label: ' Action', minWidth: 100 ,  align: 'center'},
  ];
  
  
  function createData(SN, ProjectTittle, Assignee, StartDate, EndDate, Priority, ProjectStatus, ) {
    //const density = population / size;
    return { SN, ProjectTittle, Assignee, StartDate, EndDate, Priority, ProjectStatus, Action:( <><IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
      <VisibilityIcon  onClick={handleView} />
    </IconButton>
    <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
      <EditIcon />
    </IconButton>
    <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
      <DeleteIcon />
    </IconButton>
    </>)} 
     
  }
  
  const rows = [
    createData(1,'Ecommerce', 'Anjali', '01/03/2023', '01/09/2025',10000,'low','Completed'),
    createData(2,'Inventory', 'Megha', '01/03/2023', '01/09/2025',10000,'High','Completed'),
    createData(3,'Learning', 'Sonal', '01/03/2023', '01/09/2025',10000,'Medium','To-Do'),
    createData(4,'Mobile App', 'Neha', '01/03/2023', '01/09/2025',10000,'low','To-Do'),
    createData(5,'Media', 'Kavita', '01/03/2023', '01/09/2025',10000,'High','In progress'),
    
  
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box classname="container" > 
       <SearchAppBar/>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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

    <Dialog
        open={viewData}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='dialogTitle'>
          View Project's Details
          <CloseIcon onClick={handleClose}/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
   
      </Dialog>

      
    </Box>
  );
}



/*      <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>*/