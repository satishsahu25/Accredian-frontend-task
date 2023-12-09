import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import styles from "./register.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");


  const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !cpassword) {
      alert("Please enter all details!!");
    } else if (cpassword !== password) {
      alert("Your password does not match!!");
    } else {

      const data = {
        email: email,
        password: password,
        username: username,
      };

      try {
        await axios
          .post("http://localhost:5000/api/register", data)
          .then((resp) => {
            if(resp.status==200){
              navigate('/login');
            }
          })
          .catch((err) => {
           alert('User Already exits!!');
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="registerWrap">
        <h1>Create a new account</h1>
        <div className="registerbox">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className="inputBox"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            value={username}
          />
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
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
            className="inputBox"
          />
          <Button
            variant="contained"
            onClick={handleRegister}
            className="submitBtn"
          >
            Register
          </Button>

          <Link to="/login" className="alreadyAccount">
            Already have an account ?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
