import { Button } from "@mui/material";
import { width } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

export const DisplayDataWithCrudAPI = (props) => {
  const { open, handleOpen } = props;
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  const deleteInfo = (id) => {
    fetch("https://6629e68567df268010a1ebcf.mockapi.io/api/v1/CrudApi/" + id, {
      method: "DELETE",
    })
      .then((y) => y.json())
      .then((y) => {
        setId(id);
      });
  };

  useEffect(() => {
    fetch("https://6629e68567df268010a1ebcf.mockapi.io/api/v1/CrudApi")
      .then((y) => y.json())
      .then((y) => {
        setData(y);
      });
  }, [open, id]);

  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    {
      field: "avatar",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return <img src={params.row.avatar} />;
      },
    },
    {
      field: "",
      headerName: "Actions",
      width: 400,
      renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                handleOpen(params.row);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                deleteInfo(params.id);
              }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={data} columns={columns} />
      </div>
    </div>
  );
};
