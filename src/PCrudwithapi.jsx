import React, { useState } from "react";
import { FormforCRUDAPI } from "./FormforCRUDAPI";
import { DisplayDataWithCrudAPI } from "./DisplayDataWithCrudAPI";
import Button from "@mui/material/Button";

export const PCrudwithapi = () => {
  const [open, setOpen] = useState(false);
  const [d, setD] = useState(null);
  
  const handleClose = () => {
    setOpen(false);
    setD(null)
  };
  const handleOpen = (data) => {
    setOpen(true);
    setD(data);
  };
  const handleOpenForAdd= ()=>{

    setOpen(true);
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleOpenForAdd}>
        ADD USER
      </Button>
      <DisplayDataWithCrudAPI open={open} handleOpen={handleOpen} />
      <FormforCRUDAPI handleClose={handleClose} open={open} d={d} />
    </div>
  );
};
