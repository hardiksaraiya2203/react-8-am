import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormForCRUD = (props) => {

    const {open,handleClose,data,setData,index} = props;
    const [form,setForm] = useState({
      firstName:"",
      lastName:"",
      id:0
    })

    useEffect(()=>{
      if(index>=0){
        setForm(data[index]);
      }
    },[])

    const handleSave = () =>{
      let d = [...data];

      if(index<0){

        d.push({...form,id: d.length});
      }
      else{
        d[index]= form;
      }
      setData(d);
      handleClose();
    }
    const handleInput = (e) =>{
      setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill up the details
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="firstName"
            name="firstName"
            label="firstName"
            type="text"
            value={form.firstName}
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            value={form.lastName}
            id="lastName"
            name="lastName"
            label="lastName"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="button" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormForCRUD;
