import "./Carrosel.css";
import { url } from "../../helpers/variaveis";

const Carrosel = ({ lista }) => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={url+lista[0].url} className="d-block w-100" alt="..." />
          </div>
          {lista.map((item,index) => index != 0 &&(
            <div className="carousel-item" key={item.url}>
             <img src={url+item.url} className="d-block w-100" alt="..." />
           </div>
          ))
          }
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carrosel;
