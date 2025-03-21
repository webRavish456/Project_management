import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Search from '../Search/Search';
import Box from '@mui/material/Box';

const columns = [
  {
    id: 'Sln',
    label: 'Sl.no',
    format: (value) => value.toLocaleString('en-US'),
  },
  
  { id: 'name', label: 'Project Tittle', minWidth: 170 },
  
  {
    id: 'assigne',
    label: 'Project Assigne',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Sdate',
    label: 'Project Start Date',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'edate',
    label: 'Project End Date',
    format: (value) => value.toLocaleString('en-US'),
  },
 
  {
    id: 'Priority',
    label: 'Priority',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Status',
    label: 'Project Status',
    format: (value) => value.toLocaleString('en-US'),
    
},
{
  id: 'action',
  label: 'Action',
  format: (value) => value.toLocaleString('en-US'),
},
];

function createData( sln, name, assigne, sdate, edate, priority, status, action) 
{
  
  return { sln, name, assigne, sdate, edate, priority, status, action };
}

const rows = [
  createData('1','Ecommerce', 'Megha','15/03/25','13/04/25','High','Complete',),
  createData('2','Inventory', 'Anjali','16/03/25','17/04/25','Medium','Complete',),
  createData('3','Mobile App', 'Kavita','17/03/25','18/04/25','Law','On Hold',),
  createData('4','Learning', 'Neha','18/03/25','19/04/25','High','On Hold',),
  createData('5','Media', 'Sonal','14/03/25','16/04/25','High','Complete',),
  
  
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
    <Box>
      <Search/>
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
