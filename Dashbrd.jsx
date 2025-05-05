import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Card1 from './Card1';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField
} from "@mui/material";

function Dashbrd() {
 

  const [data, setData] = useState([]);
  const cntapi = () => {
    axios.get("http://localhost:3000/menuCard")
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
       
<Card1/><br></br> <br></br>
      

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>M_ID</th>
              <th>MENU NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>SIZE</th>
            
            </tr>
          </thead>
          <tbody>
            {data.map((res) => (
              <tr key={res.mid}>
                <td>{res.mid}</td>
                <td>{res.mname}</td>
                <td>{res.price}</td>
                <td>{res.category}</td>
                <td>{res.size}</td>
             
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

export default Dashbrd;
