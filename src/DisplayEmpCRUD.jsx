import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const DisplayEmpCRUD = (props) => {
  // const { data } = props;
  // console.log(data);

  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "id", headerName: " ", width: 300, renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                props.editEmp(params.id);
              }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                props.deleteEmp(params.id);
              }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  console.log(props);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={props.data} columns={columns} />
    </div>
  );
};

export default DisplayEmpCRUD;
