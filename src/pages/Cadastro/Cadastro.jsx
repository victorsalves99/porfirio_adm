import "./Cadastro.css";
import { marcas, url } from "../../helpers/variaveis";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [marca, setMarca] = useState("");
  const [files, setFiles] = useState();
  const [descricao, setDescricao] = useState("");

  async function cadastrar(ev) {
    ev.preventDefault();
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem("porfirioToken")}`,
      "Content-Type": "multipart/form-data", // Se você estiver enviando JSON
    };
    const descricao_formatada = descricao
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    formData.append("nome", nome);
    formData.append("preco", preco);
    formData.append("marca", marca);
    formData.append("descricao", descricao_formatada);
    await axios
      .post(`${url}caminhao`,formData,{
        headers
      })
      .then((data) => {
        toast.success(data.data.msg)
        setNome("")
        setPreco("")
        setMarca("")
        setFiles()
        setDescricao("");
      })
      .catch((err) => {
        toast.error(err.response.data.msg)
      });
  }

  return (
    <div>
      <form className="formulario" onSubmit={cadastrar}>
        <h3>Cadastrar Caminhões</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome do caminhão"
            aria-label="First name"
            onChange={(ev) => setNome(ev.target.value.toUpperCase())}
            value={nome}
          />
        </div>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Preço do caminhão"
              aria-label="First name"
              onChange={(ev) => setPreco(ev.target.value)}
              value={preco}
            />
          </div>
          <div className="col">
            <select
              className="form-select form-select mb-3"
              aria-label=".form-select example"
              onChange={(ev) => setMarca(ev.target.value)}
              value={marca}
            >
              <option value="" selected disabled>
                Selecione a marca
              </option>
              {marcas.map((item) => (
                <option value={item.value} key={item.value}>{item.text}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(ev) => setFiles(ev.target.files)}
            multiple
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Descrição do veiculo
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(ev) => setDescricao(ev.target.value)}
            value={descricao}
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
