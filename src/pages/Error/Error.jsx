import { Link } from "react-router-dom"
import "./Error.css"

const Error = () => {
  return (
    <div className="error">
        <p>Error 404 </p>
        <Link to={"/"}>
            Voltar ao menu
        </Link>

    </div>
  )
}

export default Error