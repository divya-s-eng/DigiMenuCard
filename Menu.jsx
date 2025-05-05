import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField
} from "@mui/material";

function Menu() {
  const [open, setOpen] = useState(false);
  const [mnm, setMn] = useState("");
  const [prz, setPrz] = useState(0);
  const [fid, setFid] = useState(0);
  const [qid, setQid] = useState(0);

  const [data, setData] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dt = {
      mname: mnm,
      price: parseFloat(prz),
      fid: parseInt(fid),
      qid: parseInt(qid)
    };

    axios.post("http://localhost:3000/addmenu", dt)
      .then(response => {
        if (response.data.status == 200) {
          alert("Success");
          cntapi();
        } else {
          alert("Failed to add menu");
        }
        handleClose(); // Always close the dialog after submission
      })
      .catch(err => {
        console.error("Error adding menu:", err);
        alert("Error occurred");
      });
  };

  const del = (id) => {
    axios.delete("http://localhost:3000/delmenuById", {
      data: { id: id }
    })
      .then(response => {
        if (response.data.status == 200) {
          alert("Delete success");
          cntapi();
        } else {
          alert("Failed to delete");
        }
      });
  };

  const cntapi = () => {
    axios.get("http://localhost:3000/menu")
      .then(response => {
        let ar = response.data.menu;
        setData(ar);
        console.log(ar)
      });
  };

  useEffect(() => {
    cntapi();
  }, []);

  return (
    <>
      <center>
       

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Menu</DialogTitle>
          <DialogContent>
            <TextField fullWidth margin="dense" label="Menu Name" onChange={(e) => setMn(e.target.value)} />
            <TextField fullWidth margin="dense" label="Price" type="number" onChange={(e) => setPrz(e.target.value)} />
            <TextField fullWidth margin="dense" label="Fid" type="number" onChange={(e) => setFid(e.target.value)} />
            <TextField fullWidth margin="dense" label="Qid" type="number" onChange={(e) => setQid(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancel</Button>
            <Button onClick={handleSubmit} color="primary" variant="contained">Submit</Button>
          </DialogActions>
        </Dialog>

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>M_ID</th>
              <th>MENU NAME</th>
              <th>PRICE</th>
              <th>FOOD_ID</th>
              <th>QUANTITY_ID</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((res) => (
              <tr key={res.mid}>
                <td>{res.mid}</td>
                <td>{res.mname}</td>
                <td>{res.price}</td>
                <td>{res.fid}</td>
                <td>{res.qid}</td>
                <td>
                
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

export default Menu;


    