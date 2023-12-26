import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ producto }) => {

  return (
    <div className="item">
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo"> {producto.nombre} </p>
      <p className="precio">$ {producto.precio} </p>
      <ItemCount stock={producto.stock}/>
      <Link to={`/detalle/${producto.id}`} className="link">
        Ver detalles
      </Link>
    </div>
  );
};
export default Item;
