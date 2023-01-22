import './Item.css'

import { Link } from 'react-router-dom';

const Item = ({info}) => {
    return (
       
        // <div className="card-todo">
            <li className="card-contenedor">
                
                <div className="flex-card">
                    {/* <img src={process.env.PUBLIC_URL + image} alt={name}/> */}
                    {/* process.env.PUBLIC_URL + image */}
                    <img className="card-imagen" src={process.env.PUBLIC_URL + info.pictureUrl} width="100px" alt="Foto" />
                    <div className="card-datos">
                        <h3 className="flex-card-heading">{info.title}</h3>
                        <p>Categoria: {info.category}</p>
                        <p>Stock: {info.stock}</p>
                        <p className="precio">Precio: ${info.price}</p>
                    </div>
                </div>
                <Link to={`/item/${info.id}`}>
                    <span className="card-button">Ver Detalle</span>
                </Link>
          </li>
        // </div>
    )
}

export default Item;