import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import { url } from "../../helpers/variaveis";
import CardComponente from "../../components/Card/Card"
const Home = () => {
  const [truksList, setTruksList] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [search, setSearch] = useState("")

  async function getTrucks() {
    const res = await axios
      .get(`${url}caminhao`)
      .then((data) => data.data)
      .catch((err) => console.log(err));
    setTrucks(res);
    setTruksList(res);
  }
  function filterSearch(){
    if(search == ""){
      setTrucks(truksList)
    }else{
     setTrucks(() =>{
      return truksList.filter((item)=> item.nome.includes(search))
     })
    }
  }
  useEffect(()=>{
    filterSearch()
  },[search])

  useEffect(() => {
    getTrucks();
  }, []);

  return (
    <>
      <div className="home">
        <h4 className="title">Todos os veiculos</h4>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Pesquisar
          </span>
          <input
            type="search"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={search}
            onChange={(ev) => setSearch(ev.target.value.toUpperCase())}
          />
        </div>
      </div>

      <div className="lista_de_veiculos">
        {trucks &&
          trucks.map((item) => (
            <CardComponente
              key={item._id}
              id={item._id}
              name={item.nome}
              price={item.preco}
              url={url + item.fotos[0].url}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
