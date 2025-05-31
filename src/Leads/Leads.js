import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
import ViewLeads from "./View/View";
import CreateLeads from "./Create/Create";
import EditLeads from "./Edit/Edit";
import Search from "../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteLeads from "./Delete/Delete";

const Leads = () => {
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  
  const [filteredRows, setFilteredRows]=useState([]);
  

  const token= localStorage.getItem("token");
  const Base_url = process.env.REACT_APP_BASE_URL;

  const columns = [
    { id: "si", label: "SI.No", flex: 1, align: "center" },
    { id: "leadsName", label: "Leads Name", flex: 1, align: "center" },
    { id: "email", label: "email", flex: 1, align: "center" },
    {id: "mobileNo", label: "Mobile No", flex: 1, align: "center"},
    {id: "address", label: "Address", flex: 1, align: "center"},
    {id: "source", label: "Source", flex: 1, align: "center"},
    { id: "status", label: "Status", flex: 1, align: "center" },
    { id: "action", label: "Action", flex: 1, align: "center" },
  ];

  useEffect(() => {
    const fetchLeadsData = async () => {
      try {
        const response = await fetch(`${Base_url}/leads`, {
          method: "GET",
          headers: {
            Authorization:`Bearer ${token}`,
          },
        });

        const result = await response.text();
        const res = JSON.parse(result);

        if (res.status === "success") {
          setLoading(false);
          const formattedData = res.data.map((item, index) =>
            createData(
              index + 1,
              item,
              item.leadsName,
              item.email,
              item.mobileNo,
              item.address,
              item.source,
              item.status
            )
          );
          setRows(formattedData);
          setFilteredRows(formattedData);
        }
      } catch (error) {
        console.error("Error fetching Leads data:", error);
      }
    };

    if (loading) {
      fetchLeadsData();
    }
  }, [loading]);

  const createData = (si, row, leadsName, email, mobileNo, address, source, status) => ({
    si,
    row,
    leadsName,
    email,
    mobileNo,
    address,
    source,
    status,
    action: (
      <>
        <IconButton
          style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }}
          onClick={() => handleView(row)}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }}
          onClick={() => handleEdit(row)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          style={{ color: "#e6130b", padding: "4px", transform: "scale(0.8)" }}
          onClick={() => handleShowDelete(row._id)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
  });

  const handleView = (row) => {

    setViewData(row);
    setViewShow(true);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setEditShow(true);
  };

  const handleShowDelete = (id) => {
    setDeleteId(id);
    setDeleteShow(true);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    fetch(`${Base_url}/leads/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization:`Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {

        const res = JSON.parse(result);

        if (res.status === "success") {
          toast.success("Leads deleted successfully!");
          setLoading(true);
        } else {
          toast.error(res.message);
        }
        setIsDeleting(false);
        handleClose();
      })
      .catch((error) => {
        console.error("Delete error:", error);
        setIsDeleting(false);
      });
  };

  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
  };

  const handleCreate = (data) => {
    setLoading(data);
    setOpenData(false);
  };

  const handleUpdate = (data) => {
    setLoading(data);
    setEditShow(false);
  };

  const onAddClick = () => setOpenData(true);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


   useEffect(() => {
    
      const filtered = rows.filter(
        (row) =>
          row.leadsName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(row.email).includes(searchTerm.toLowerCase()) ||
          String(row.mobileNo).includes(searchTerm.toLowerCase()) ||
          row.source?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.status.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      setFilteredRows(filtered);
    }, [searchTerm, rows]); 


  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);

  };

  return (
    <>
      <ToastContainer />
      <Box className="container">
        <Search searchTerm={searchTerm}  setSearchTerm={setSearchTerm} onAddClick={onAddClick} buttonText="Add Leads" />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="branch table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ fontWeight: 700 }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                
                {filteredRows.length > 0 ?(
                  filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => (
                    <TableRow hover role="checkbox" key={idx}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) :(
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      No data found
                    </TableCell>
                  </TableRow>
                )
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        <CommonDialog
          open={openData || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            openData
              ? "Create New Leads"
              : viewShow
              ? "View Leads"
              : editShow
              ? "Edit Leads"
              : deleteShow
              ? "Delete Leads"
              : ""
          }
          dialogContent={
            openData ? (
              <CreateLeads handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewLeads viewData={viewData} />
            ) : editShow ? (
              <EditLeads
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteLeads
                handleDelete={handleDelete}
                isDeleting={isDeleting}
                handleClose={handleClose}
              />
            ) : null
          }
        />
      </Box>
    </>
  );
};

export default Leads;