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

import CloseIcon from "@mui/icons-material/Close";
//import Header from "../Component/Header/Header";
import Search from "../Search/Search";
import CommonDialog from "../Component/CommonDialog/CommonDialog";
import ViewFinance from "./View/View";
import CreateFinance from "./Create/Create";
import EditFinance from "./Edit/Edit";
import DeleteFinance from "./Delete/Delete";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Finance=()=>
{

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

  const token = Cookies.get("token");
  const Base_url = process.env.REACT_APP_BASE_URL;

    const columns = [
        { id: 'si', label: 'SI. No', flex:1, align:'center' },
        { id: 'name', label: 'Name', flex:1,align:'center' },
        {
          id: 'amount',
          label: 'Amount',
          flex:1,
          align:'center'
        },
        {
          id: 'TransactionType',
          label: 'Transaction Type',
          flex:1,
           align:'center'
        },
        {
          id: 'Category',
          label: 'Category ',
          flex:1,
          align:'center',
        },
        {
            id: 'PaymentMode',
            label: 'Payment Mode',
            flex:1,
            align:'center',
          },
          {
            id: 'TransactionDate',
            label: 'Transaction Date',
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

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const response = await fetch(`${Base_url}/finance`, {
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
          item.name, 
          item.amount, 
          item.TransactionType,
          item.Category,
          item.PaymentMode,
          item.TransactionDate, 
          item.Status,
    
            )
          );
          setRows(formattedData);
        }
      } catch (error) {
        console.error("Error fetching Finance data:", error);
      }
    };

    if (loading) {
      fetchFinanceData();
    }
  }, [loading]);

  const createData = (si,row, name, amount, TransactionType,Category,PaymentMode,TransactionDate, Status) => ({
    si,
    row,
    name, 
    amount:`₹${amount}`, 
    TransactionType,
    Category,
    PaymentMode,
    TransactionDate, 
    Status,
    actions: (
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
    //console.log("row : ",row);
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
    fetch(`${Base_url}/finance/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        if (res.status === "success") {
          toast.success("Finance deleted successfully!");
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

  const handleCreate = (refresh = true) => {
    if (refresh) setLoading(true);
    setOpenData(false);
  };

  const handleUpdate = (refresh = true) => {
    if (refresh) setLoading(true);
    setEditShow(false);
  };

  const onAddClick = () => setOpenData(true);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

   // 🔍 Filtered rows based on search input
   const filteredRows = rows.filter((row) => {
    if (!searchTerm) return true;
    
    const searchValue = searchTerm.toLowerCase();


    return (
      row.name?.toLowerCase().includes(searchValue) ||
      row.TransactionDate?.toLowerCase().includes(searchValue) ||
      row.PaymentMode?.toLowerCase().includes(searchValue) ||
      row.Status?.toLowerCase().includes(searchValue)||
      row.TransactionType?.toString().includes(searchValue)
    );
  }
 );

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
        <Search onAddClick={onAddClick} ButtonText="Add finance" searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}/>
     <Paper sx={{ width: '100%', overflow:"hidden" }}>
      <TableContainer sx={{ maxHeight: 440, overflowY: 'auto', overflowX:'auto' }}>
        <Table stickyHeader aria-label="sticky table">
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
                  ))) : (
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
      open={openData ||viewShow || editShow || deleteShow} 
      onClose={handleClose}
      dialogTitle={ 
        openData
              ? "Create New Finance"
              : viewShow
              ? "View Finance"
              : editShow
              ? "Edit Finance"
              : deleteShow
              ? "Delete Finance"
              : ""
            }
      
            dialogContent={
              openData ? (
                <CreateFinance handleCreate={handleCreate} handleClose={handleClose} />
              ) : viewShow ? (
                <ViewFinance viewData={viewData} />
              ) : editShow ? (
                <EditFinance
                  editData={editData}
                  handleUpdate={handleUpdate}
                  handleClose={handleClose}
                />
              ) : deleteShow ? (
                <DeleteFinance
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
  
export default Finance;

                      