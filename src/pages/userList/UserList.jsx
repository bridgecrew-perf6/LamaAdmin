import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from '../../dummyData';
import { Link } from "react-router-dom";


export default function UserList() {

    const [data,setData]=useState(userRows);

    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id));
    }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell:(params) =>{
        return(
            <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
        )
      },
    },
    {
      field: "firstName",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "email",
      headerName: "Mail",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    
    },
    {
        field: "transactions",
        headerName: "Transaction Volume",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
      
    },
    {
        field: "status",
        headerName: "Status",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
      
    },
    {
        field: "action",
        headerName: "Action",
        width: 160,
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/user/"+params.row.id}>
                <button className="userListEdit">
                   Edit
               </button>
                </Link>
               
               <DeleteOutline className="userListEditDelete" onClick={()=>handleDelete(params.row.id)}/>
               </>
            )
        }
      
    },
   
  ];

  

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
