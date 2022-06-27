import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index.js';
import Services from './pages/Services.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Main from './pages/Main.js';
import UpdateModal from './pages/UpdateModal';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path = "/" element={<Index/>}>
          </Route>
          <Route path = "/services" element={<Services/>}>
          </Route>
          <Route path = "/main" element={<Main/>}>
          </Route>
          <Route path = "/login" element={ <Login/>}>
          </Route>
          <Route path = "/register" element={<Register/>}>
          </Route>
          <Route path = {`/update/:id`} element={<UpdateModal/>}>
          </Route>
      </Routes>
      </BrowserRouter>
    </>  
  );
}

export default App;
