import React, { useState } from "react";
import FormForCRUD from "./FormForCRUD";
import DisplayEmpCRUD from "./DisplayEmpCRUD";
import Button from "@mui/material/Button";

const ParentForCrud = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [index,setIndex]= useState(-1);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteEmp = (index)=>{

    let p = [...data];

    p.splice(index,1);

    setData(p);

  }

  const editEmp = (index)=>{

    setOpen(true);
    setIndex(index);

  }
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Open form dialog
      </Button>
      <FormForCRUD open={open} handleClose={handleClose} data={data} setData={setData} index={index}/>
      <DisplayEmpCRUD data={data} deleteEmp={deleteEmp} editEmp={editEmp}/>
    </div>
  );
};

export default ParentForCrud;
