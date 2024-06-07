import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import axios from "axios";
import { url } from "./helpers/variaveis";

function App() {
  const navigate = useNavigate();
  async function verificarUsuario() {
    console.log(localStorage.getItem("porfirioToken"))
    const headers = {
      'Authorization':`Bearer ${localStorage.getItem("porfirioToken")}`,
      'Content-Type':'application/json' // Se você estiver enviando JSON
    }
      await axios
      .get(`${url}usuario/autenticacao`,{headers})
      .then((data) => {
        console.log(data.data)
      })
      .catch((err) => {
        console.log(err)
        navigate("/login")
      });
  }
  function logout(){
    localStorage.setItem("porfirioToken","")
    verificarUsuario()
  }
  useEffect(() => {
      verificarUsuario()
  }, []);
  return (
    <>
      <NavBar logout={logout}/>
      <Outlet />
    </>
  );
}

export default App;
