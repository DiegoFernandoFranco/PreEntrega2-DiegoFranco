import './ItemDetail.css'

const ItemDetail = ({ data }) => {
    return (
        <div className="todoDetail">
            <li className="card-contenedor">

                <div className="flex-card">


                    <img className="card-imagen" src={process.env.PUBLIC_URL + data.pictureUrl} width="100px" alt="Foto de Calzado" />

                    <div className="card-datos">

                        <h3 className="flex-card-heading">{data.title}</h3>

                        <p>Categoria: {data.category}</p>

                        <p>Stock: {data.stock}</p>

                        <p className="precio">Precio: ${data.price}</p>
                    </div>


                </div>
                {/* <span className="card-button">Ver Detalle</span> */}


            </li>
        </div>
    );
};

export default ItemDetail;