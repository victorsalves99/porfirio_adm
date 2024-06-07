import "./Perfil.css";
import Carrosel from "../../components/Carrosel/Carrosel.jsx";
import { useEffect, useState } from "react";
import { url } from "../../helpers/variaveis.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Perfil = () => {
  const navigate = useNavigate();
  const [caminhao, setCaminhao] = useState();
  const { id } = useParams();

  async function getTrucks() {
    const res = await axios
      .get(`${url}caminhao/${id}`)
      .then((data) => data.data)
      .catch((err) => console.log(err));
    setCaminhao(res);
  }

  async function deletarCaminhão() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGJlMmE1NDdkNDA5ZDdjMjk1ZDhjOSIsImlhdCI6MTcxNjMzMzY5NH0.99heBIii94AYn0_hRSJnTUEavI9of2dUT9W8pMCHNj4"

    const headers = {
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json' // Se você estiver enviando JSON
    }
    await axios
    .delete(`${url}caminhao/${id}`,{headers})
    .then((data) => {
      console.log(data)
      toast.success(data.data.msg)
      navigate("/")
    })
    .catch((err) => {
      toast.error(err.response.data.msg)
    });

  }

  useEffect(() => {
    getTrucks();
  }, []);

  return (
    <section className="perfil">
      <div className="perfil_content">
        <p>{caminhao && caminhao.nome}</p>
        <p>R${caminhao && caminhao.preco}</p>
      </div>
      <div className="box_carrosel">
        {caminhao && <Carrosel key={caminhao._id} lista={caminhao.fotos}/>}
      </div>
      <p className="perfil_title_description">Descrição e Especificações</p>

      <div className="perfil_description">
        {caminhao && caminhao.descricao.replace(/\\/g, '\n')}
      </div>
      <button type="button" className="btn btn-danger" onClick={deletarCaminhão}>Deletar Caminhão</button>
    </section>
  );
};

export default Perfil;
