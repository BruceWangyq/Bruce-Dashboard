import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          editable: true,
          renderCell: (params)=>{
              return (
                  <div className="userListUser">
                    <img src="{params.row.avatar}" alt="" className="userListImg"/>
                    {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volumn',
          type: 'number',
          width: 160,
          editable: true,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 160,
          renderCell: (params) => {
              return (
              <div className="userListEdits">
                    <Link to ={"/user/"+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                  <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </div>);
          }
        },
      ];
      
      
      
    return (
        <div className="userList">
             <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}
