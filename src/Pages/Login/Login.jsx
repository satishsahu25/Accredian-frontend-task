import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import './login.css'
import Button from "@mui/material/Button";
import { Link, redirect, useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate=useNavigate();

  useEffect(()=>{
      if(JSON.parse(localStorage.getItem('userdata'))!=null){
        navigate('/');
      }
  })

  const handlelogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter all details");
    } else {
      const data = {
        email: email,
        password: password,
      };

      try {
        await axios
          .post("http://localhost:5000/api/login", data)
          .then((resp) => {
            if(resp.status==200){
             localStorage.setItem('userdata', JSON.stringify(resp.data.data));
             navigate('/');
            }else{
              alert('Invalid credentials');
            }
          }).catch((err) => {
            console.log(err)
          });
      }catch(err){
        alert('User does not exist or Some error occurred');
      }
    }
  };
  
  return (
    <>
      <div className="loginWrap">
        <h1>Login to your account</h1>
        <div className="loginbox">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="inputBox"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="inputBox"
          />
          <Button
            variant="contained"
            onClick={handlelogin}
            className="submitBtn"
          >
            Login
          </Button>

          <Link to="/register" className="createnewAccount">Create a new account</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
