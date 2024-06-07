import "./Card.css";
import { Link } from "react-router-dom";

const CardComponente = ({ id, url, name, price }) => {
  return (
    <>
      <Link className="card" to={`/perfil/${id}`}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <br />
          <br />
          <p className="btn btn-primary">
            R$ {price}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CardComponente;
