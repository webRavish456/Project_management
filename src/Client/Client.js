import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// import CloseIcon from "@mui/icons-material/Close";
import Search from "../Search/Search";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  IconButton,
} from "@mui/material";
import CommonDialog from "../Component/CommonDialog/CommonDialog";
import ViewClient from "./View/View";
import CreateClient from "./Create/Create";
import EditClient from "./Edit/Edit";
import DeleteClient from "./Delete/Delete";

const Client = () => {

  const [openData, setOpenData] = useState(false)

  const [viewData, setViewData] = useState(false)

  const [editData, setEditData] = useState(false)

  const [deleteData, setDeleteData] = useState(false)

  const handleView = () => {
    setViewData(true)
  }

  const handleEdit = () => {
    setEditData(true)
  }

  const handleDelete = () => {
    setDeleteData(true)
  }

  const columns = [
    { id: 'si', label: 'SI. No', flex: 1, align: 'center' },
    { id: 'Name', label: 'Name', flex: 1, align: 'center' },
    {
      id: 'Email',
      label: 'Email',
      flex: 1,
      align: 'center'
    },
    {
      id: 'MobileNo',
      label: 'Mobile No',
      flex: 1,
      align: 'center'
    },
    {
      id: 'Address',
      label: 'Address',
      flex: 1,
      align: 'center',
    },
    {
      id: 'CompanyName',
      label: 'Company Name',
      flex: 1,
      align: 'center',
    },
    {
      id: 'status',
      label: 'Status',
      flex: 1,
      align: 'center',
    },
    {
      id: 'actions',
      label: 'Action',
      flex: 1,
      align: 'center',
    },
  ];

  function createData(si, Name, Email, MobileNo, Address, CompanyName, status) {
    return {
      si,
      Name,
      Email,
      MobileNo,
      Address,
      CompanyName,
      status,
      actions: (
        <>
          <IconButton style={{ color: "#000", padding: "4px", transform: "scale(0.8)" }} onClick={handleView}>
            <VisibilityIcon />
          </IconButton>
          <IconButton style={{ color: "#000", padding: "4px", transform: "scale(0.8)" }} onClick={handleEdit} >
            <EditIcon />
          </IconButton>
          <IconButton style={{ color: "#000", padding: "4px", transform: "scale(0.8)" }} onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    };
  }

  const rows = [
    createData(1, "Neha", "nkumari7785@gmail.com", 9709337742, "Jamshedpur", "Ved", "Active")
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

  const onAddClick = () => {
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
      <Search onAddClick={onAddClick} />
      <Paper sx={{ width: '100%', overflow: "hidden" }}>
        <TableContainer  >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 900 }}
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
        dialogTitle={<>
          {openData ? "Create New Client" : viewData ? "View Client Details" : editData ? "Edit Client Details" : deleteData ? "Delete Client Details" : null}
        </>}

        dialogContent={
          openData ? <CreateClient handleSubmit={handleSubmit} handleClose={handleClose} /> :
            viewData ? <ViewClient /> :
              editData ? <EditClient handleUpdate={handleUpdate} handleClose={handleClose} /> :
                deleteData ? <DeleteClient handleDelete={handleDelete} handleClose={handleClose} /> : null

        }

      />


    </Box>
  )
}

export default Client;