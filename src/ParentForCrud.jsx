import React, { useState } from "react";
import FormForCRUD from "./FormForCRUD";
import DisplayEmpCRUD from "./DisplayEmpCRUD";
import Button from "@mui/material/Button";

const ParentForCrud = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Open form dialog
      </Button>
      <FormForCRUD open={open} handleClose={handleClose} />
      <DisplayEmpCRUD />
    </div>
  );
};

export default ParentForCrud;
