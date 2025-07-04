import * as React from 'react';
import {Box ,Typography ,Tooltip,Menu}from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from '../../hook/useStockCall';

function getRowId(row) {
  return row._id;
}

export default function ProductsTable() {

    const {products}=useSelector((state)=>state.stock)
    const {deleteStockData}=useStockCall()

   
    
const columns = [
  { field: '_id', headerName: '#', width: 300 },
  {
    field: 'categoryId',
    headerName: 'Category',
    width: 250,
    editable: true,
    valueGetter:(value)=>value.name
  },
  {
    field: 'brandId',
    headerName: 'Brand',
    width: 250,
    editable: true,
    valueGetter:(value)=>value.name
  },
  {
    field: 'name',
    headerName: 'Name',
    type: 'number',
    width: 250,
    editable: true,
        align:"left",
    headerAlign:"left",
  },

,
  {
    field: 'quantity',
    headerName: 'Stock',
    type: 'number',
    width: 150,
    editable: true,
  },


  {
    field: 'actions',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    align:"center",
    headerAlign:"center",
    width: 200,
    renderCell:(params)=>(
        // console.log("param",params)

        <DeleteIcon onClick={()=>deleteStockData("products",params.id)}/>

    )
    
  },
];

console.log("Table içindeyim",products)

  return (
    <Box sx={{ height: 400, width: '100%',mt:"1rem" }}>
      <DataGrid
      getRowId={getRowId}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15,20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
