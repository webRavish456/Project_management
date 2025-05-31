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
import ViewProject from "./View/View";
import CreateProject from "./Create/Create";
import EditProject from "./Edit/Edit";
import Search from "../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteProject from "./Delete/Delete";

const Project = () => {
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [ViewData, setViewData] = useState(null);
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
    { id: "ProjectName", label: "Project Name", flex: 1, align: "center" },
    { id: "ProjectDescription", label: "Project Description", flex: 1, align: "center" },
    {id: "StartDate", label: " Start Date", flex: 1, align: "center"},
    {id: "EndDate", label: " End Date", flex: 1, align: "center"},
    {id: "Priority", label: "Priority", flex: 1, align: "center"},
    {id: "Budget", label: "Budget", flex: 1, align: "center"},
    { id: "Status", label: "Status", flex: 1, align: "center" },
    { id: "action", label: "Action", flex: 1, align: "center" },
  ];

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`${Base_url}/Project`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
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
              item.ProjectName,
              item.ProjectDescription,
              new Date(item.StartDate).toLocaleDateString("en-IN"),
              new Date(item.EndDate).toLocaleDateString("en-IN"),
              item.Priority,
              item.Budget,
              item.Status
            )
          );
          setRows(formattedData);
          setFilteredRows(formattedData);
        }
      } catch (error) {
        console.error("Error fetching Project data:", error);
      }
    };

    if (loading) {
      fetchProjectData();
    }
  }, [loading]);

  const createData = (si, row, ProjectName, ProjectDescription, StartDate, EndDate, Priority, Budget, Status) => ({
    si,
    row,
    ProjectName, 
    ProjectDescription,
    StartDate, 
    EndDate, 
    Priority,
    Budget: `₹${Budget}`,
    Status,
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
    console.log("row",row)
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
    fetch(`${Base_url}/project/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {

        const res = JSON.parse(result);

        if (res.status === "success") {
          toast.success("Project deleted successfully!");
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

   const handleSearch = (value) => {
    setSearchTerm(value);
  };

useEffect(() => {

  const filtered = rows.filter(
    (row) =>
      row.ProjectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.Priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.Status.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  setFilteredRows(filtered);
}, [searchTerm, rows]); 



  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <>
      <ToastContainer />
      <Box className="container">
        <Search onAddClick={onAddClick} buttonText="Add Project" 
        searchTerm={searchTerm}
         setSearchTerm={setSearchTerm}  />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="project table">
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
                {filteredRows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      No records found
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                 {filteredRows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, idx) => (
                          <TableRow hover role="checkbox" key={idx}>
                            {columns.map((column) => (
                              <TableCell key={column.id} align={column.align}>
                                {row[column.id]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </>
          )}
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
              ? "Create New Project"
              : viewShow
              ? "View Project"
              : editShow
              ? "Edit Project"
              : deleteShow
              ? "Delete Project"
              : ""
          }
          dialogContent={
            openData ? (
              <CreateProject handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewProject viewData={ViewData} />
            ) : editShow ? (
              <EditProject
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteProject
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

export default Project;