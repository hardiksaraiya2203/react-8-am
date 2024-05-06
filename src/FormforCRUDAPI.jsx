import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const FormforCRUDAPI = (props) => {
  const { handleClose, open, d } = props;
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (d) {
      setData({ ...d, firstName: d.firstName, lastName: d.lastName });
      console.log(d);
    }
  }, [d]);

  const handleSave = () => {
    let method1 = d ? "PUT" : "POST";
    let url = d
      ? `https://6629e68567df268010a1ebcf.mockapi.io/api/v1/CrudApi/${data.id}`
      : "https://6629e68567df268010a1ebcf.mockapi.io/api/v1/CrudApi";
    fetch(url, {
      method: d ? "PUT" : "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((y) => y.json())
      .then((y) => {
        setData({ firstName: "", lastName: "" });
        handleClose();
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
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
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="firstName"
          name="firstName"
          label="firstName"
          type="text"
          fullWidth
          value={data?.firstName}
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="lastName"
          name="lastName"
          label="lastName"
          type="text"
          value={data?.lastName}
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="button" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
