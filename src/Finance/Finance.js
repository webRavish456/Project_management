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
import Search from "../Search/Search";




const columns = [
  { id: 'SN', label: ' SI. No', minWidth: 30 },
  { id: 'Name', label: ' Name', minWidth: 70 },
  { id: 'Amount', label: 'Amount', minWidth: 70 },
  {  id: 'Transaction', label: 'Transaction on Type',  minWidth: 70,  align: 'right', format: (value) => value.toLocaleString('en-US'), },
  { id: 'Category',label: 'Category',minWidth: 70, align: 'right', format: (value) => value.toLocaleString('en-US'), },
  { id: 'PaymentMode',  label: 'Payment mode',  minWidth: 70,  align: 'right', format: (value) => value.toFixed(2), },
  { id: 'TransactionDate', label: 'Transaction Date', minWidth: 70 },
  { id: 'Status', label: 'Status', minWidth: 70 },
  { id: 'Action', label: ' Action', minWidth: 100 },
];

function createData(SN, Name, Amount, Transaction,Category, PaymentMode, TransactionDate, Status) {
  //const density = population / size;
  return { SN, Name , Amount,Transaction, Category, PaymentMode, TransactionDate, Status, Action:( <><IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
    <VisibilityIcon />
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
  createData(1,'Ravish', 10000, 'Income/Expense', 'salary','cash','12-03-2025','Completed'),
  
  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    </Box>
  );
} 