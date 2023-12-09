import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userdata"))==undefined) {
      navigate("/login");
    }
  });

  return (
    <>
      <div className="mainWrap">
        <h1 className="title">Welcome to World of Accredian !</h1>
      </div>
    </>
  );
};

export default Main;
