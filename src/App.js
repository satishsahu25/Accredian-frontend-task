import './App.css';
import {BrowserRouter,Routes,Route, redirect} from 'react-router-dom';
import Main from './Pages/Main/Main';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { useEffect } from 'react';


function App() {

  // useEffect(()=>{
  //   if(JSON.parse(localStorage.getItem('userdata'))!=null)
  //   redirect('/');
  // })




  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
