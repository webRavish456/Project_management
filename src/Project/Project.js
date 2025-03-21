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
import { Box, IconButton ,Button,MenuItem,InputLabel,Select,FormControl} from '@mui/material';
import Search from "../Search/Search";
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
//import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';




const columns = [
  { id: 'SN', label: ' SI. No', minWidth: 30 },
  { id: 'ProjectTittle', label: ' Project Tittle', minWidth: 70 },
  { id: 'Description', label: 'Project Description', minWidth: 70 },
  {  id: 'StartDate', label: 'Project Start date',  minWidth: 70,align: 'center', format: (value) => value.toLocaleString('en-US'), },
  { id: 'Budget',  label: 'Budget',  minWidth: 70,align: 'centert', format: (value) => value.toLocaleString('en-US'), },
  { id: 'EndDate',label: 'Project end Date',minWidth: 70,align: 'center', format: (value) => value.toLocaleString('en-US'), },
  { id: 'Priority', label: ' Priority', minWidth: 70,align: 'center', format: (value) => value.toLocaleString('en-US'), },
  { id: 'ProjectStatus', label: ' Project Status', minWidth: 70,align: 'center', format: (value) => value.toLocaleString('en-US'), },
  { id: 'Action', label: ' Action', minWidth: 100 },
];



export default function StickyHeadTable() {
 
   const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    

  
  const [viewData, setViewData] =useState(false)

  const handleView=()=>
  {
    setViewData(true)
  }

  const handleClose=()=>
  {
    setViewData(false)
  }

  const handlePriorityChange = (event) => setPriority(event.target.value); // Priority Change


  const [priority, setPriority] = useState(""); // Priority State

  const handlePojectStutsChange = (event) => setProjectStuts(event.target.value); // Priority Change


  const [ProjectStatus, setProjectStuts] = useState(""); // Priority State



  const [editData, setEditData] =useState(false)

  const handleEdit=()=>
  {
    setEditData(true)
  }
  const handleClose1=()=>
    {
      setEditData(false)
    }
  

  


  const [deleteData, setDeleteData] =useState(false)

  const handleDelete=()=>
  {
    setDeleteData(true)
  }
  const handleClose2=()=>
    {
      setDeleteData(false)
    }
  



  
  function createData(SN, ProjectTittle, Description, StartDate, EndDate, Budget, Priority, ProjectStatus, ) {
    //const density = population / size;
    return { SN, ProjectTittle, Description, StartDate, EndDate, Budget, Priority, ProjectStatus, Action:( <><IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
      <VisibilityIcon  onClick={handleView} />
    </IconButton>
    <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
      <EditIcon  onClick={handleEdit}/>
    </IconButton>
    <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
      <DeleteIcon  onClick={handleDelete}/>
    </IconButton>
    </>)} 
     
  }
  
  const rows = [
    createData(1,'Ecommerce', 'Ecommerce Description', '01/03/2023', '01/09/2025',10000,'low','Completed'),
    createData(2,'Inventory', 'Inventory Management', '01/03/2023', '01/09/2025',10000,'High','Completed'),
    createData(3,'Learning', 'Learning Mnagement', '01/03/2023', '01/09/2025',10000,'Medium','On Hold'),
    createData(4,'Mobile App', 'Mobile App Development', '01/03/2023', '01/09/2025',10000,'low','Completed'),
    createData(5,'Media', 'Social Media', '01/03/2023', '01/09/2025',10000,'High','Active'),
    
  
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
       <Search/>
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
      
      <Dialog
        open={editData}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='dialogTitle'>
          Edit Project's Details
          <CloseIcon onClick={handleClose1}/>
        </DialogTitle>
        <DialogContent  className='DialogContent'>
          
            
            <DialogContentText id="alert-dialog-description"  className='DialogContent'/>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}> 
        {/* Row 1 */}
        <Grid item xs={6}>
          <TextField label="Project Title" variant="outlined" fullWidth sx={{ height: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Project Start Date" variant="outlined" fullWidth />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={6}>
          <TextField label="Project End Date" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6}>
          {/* <TextField label="Priority" variant="outlined" fullWidth /> */}
          <InputLabel>Priority</InputLabel>
            <Select value={priority} onChange={handlePriorityChange} label="Priority">
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
        </Grid>

        {/* Row 3 */}
        <Grid item xs={6}>
        <InputLabel>ProjectStatus</InputLabel>
            <Select value={ProjectStatus} onChange={handlePojectStutsChange} label="Project Stuts">
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Complete">Complete</MenuItem>
            </Select>

        </Grid>

        {/* Row 4 */}
        <Grid item xs={6}>
          <TextField label="Budget" variant="outlined" fullWidth />
        </Grid>
        
        {/* Row 3 */}
        <Grid item xs={12}>
          <TextField label="Project Description" variant="outlined" fullWidth />
        </Grid>
 
      </Grid>
    </Box>
           <Box sx={{ display:'flex', justifyContent:'flex-end', gap:'10px',marginTop:'10px'}}>
               <Button className="primary_button">Cancel</Button>
               <Button className="primary_button">Update</Button>
            </Box >
            
 
          
        </DialogContent>
   
      </Dialog>
     
      <Dialog
        open={deleteData}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='dialogTitle'>
          View Project's Details
          <CloseIcon onClick={handleClose2}/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}> 
        {/* Row 1 */}
        <Grid item xs={6}>
          <TextField label="Project Title" variant="outlined" fullWidth sx={{ height: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Project Start Date" variant="outlined" fullWidth />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={6}>
          <TextField label="Project End Date" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6}>
          {/* <TextField label="Priority" variant="outlined" fullWidth /> */}
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Priority</InputLabel>
            <Select value={priority} onChange={handlePriorityChange} label="Priority">
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
      
        </Grid>

        {/* Row 3 */}
        <Grid item xs={6}>
          <TextField label="Project Status" variant="outlined" fullWidth />
        </Grid>

        {/* Row 4 */}
        <Grid item xs={6}>
          <TextField label="Budget" variant="outlined" fullWidth />
        </Grid>
        
        {/* Row 3 */}
        <Grid item xs={12}>
          <TextField label="Project Description" variant="outlined" fullWidth />
        </Grid>
 
      </Grid>
    </Box>
           <Box sx={{ display:'flex', justifyContent:'flex-end', gap:'10px',marginTop:'10px'}}>
               <Button className="primary_button">Cancel</Button>
               <Button className="primary_button">Delete</Button>
            </Box >          
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