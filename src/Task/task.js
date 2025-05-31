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
import ViewTask from "./View/View";
import CreateTask from "./Create/Create";
import EditTask from "./Edit/Edit";
import Search from "../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteTask from "./Delete/Delete";

const Task = () => {
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

    const [filteredRows, setFilteredRows]=useState([]);

  // const [rows, setRows] = useState([]);
  // const [filteredRows]=useState([]);
  // const [loading, setLoading] = useState(true);

  const [rows, setRows] = useState([]);
  // const [filteredRows, setFilteredRows] = useState([]);//new line 1
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");// 2


  const token= localStorage.getItem("token");
  const Base_url = process.env.REACT_APP_BASE_URL;

  const columns = [
    { id: "si", label: "SI.No", flex: 1, align: "center" },
    { id: "taskTitle", label: "task Title", flex: 1, align: "center" },
    { id: "taskAssignee", label: "task Assignee", flex: 1, align: "center" },
    {id: "taskStartDate", label: "task StartDate", flex: 1, align: "center"},
    {id: "taskEndDate", label: "task EndDate", flex: 1, align: "center"},
    {id: "taskPriority", label: "task Priority", flex: 1, align: "center"},
    { id: "taskStatus", label: "task Status", flex: 1, align: "center" },
    { id: "action", label: "Action", flex: 1, align: "center" },
  ];

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await fetch(`${Base_url}/task`, {
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
              item.taskTitle,
              item.taskAssignee,
              new Date(item.taskStartDate).toLocaleDateString("en-IN"),
              new Date(item.taskEndDate).toLocaleDateString("en-IN"),
              item.taskPriority,
              item.taskStatus
            )
          );
          setRows(formattedData);
          // setRows(formattedData);
           setFilteredRows(formattedData); // Initialize filteredRows with all data // 4
        }
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };

    if (loading) {
      fetchTaskData();
    }
  }, [loading]);

  const createData = (si, row, taskTitle, taskAssignee, taskStartDate, taskEndDate, taskPriority,taskStatus) => ({
    si,
    row,
    taskTitle, 
    taskAssignee,
     taskStartDate, 
     taskEndDate, 
     taskPriority,
     taskStatus,
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


  useEffect(() => {
    const filtered = rows.filter(
      (row) =>
        row.taskTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.taskAssignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.taskPriority?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.taskStatus?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
  }, [searchTerm, rows]); 


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
    fetch(`${Base_url}/task/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization:`Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {

        const res = JSON.parse(result);

        if (res.status === "success") {
          toast.success("task deleted successfully!");
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

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <>
      <ToastContainer />
      <Box className="container">
        {/* <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm} onAddClick={onAddClick} buttonText=" + Add Task" /> */}
        {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddClick={onAddClick} // Add button action
          buttonText="Add Task"
        />

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="task table">
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
                {filteredRows.length > 0 ? (
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
                ) : (
                  <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    No  records found
                  </TableCell>
                </TableRow>
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
              ? "Create New task"
              : viewShow
              ? "View task"
              : editShow
              ? "Edit task"
              : deleteShow
              ? "Delete task"
              : ""
          }
          dialogContent={
            openData ? (
              <CreateTask handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewTask viewData={ViewData} />
            ) : editShow ? (
              <EditTask
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteTask
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

export default Task;