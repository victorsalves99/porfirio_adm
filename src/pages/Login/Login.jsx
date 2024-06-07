import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { url } from "../../helpers/variaveis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [usuario,setUsuario] = useState("")
    const [senha,setSenha] = useState("")
    const navigate = useNavigate();

    async function logar(ev){
        ev.preventDefault()
        const dados = {
            usuario,
            senha,
        }
        await axios.post(`${url}usuario/login`,dados).then((data)=> {
            localStorage.setItem("porfirioToken",data.data.token)
            navigate("/")
        }).catch((err)=> {
            toast.error(err.response.data.msg)
        })
    }


  return (
    <div className="login">
      <form className="login_fomulario" onSubmit={logar}>
        <h2>Login</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Usuário:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="JoséArtur"
            value={usuario}
            onChange={(ev) => setUsuario(ev.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Senha:
          </label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">Logar</button>
      </form>
    </div>
  );
};

export default Login;
