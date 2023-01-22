import ItemDetail from "../ItemDetail/ItemDetail";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const cosa = [
    {
        id: 1,
        title: "Zapatilla 1",
        description: "Model One",
        price: 500,
        category: "Zapatillas",
        stock: 5,
        pictureUrl: '/images/ojotas-verdes.png',
    },
    {
        id: 2,
        title: "Zapatilla 2",
        description: "Model One",
        price: 1000,
        category: "Zapatillas",
        stock: 5,
        pictureUrl: '/images/ojotas-verdes.png',
    },
    {
        id: 3,
        title: "Ojota 1",
        description: "Model One",
        price: 1500,
        category: "Ojotas",
        stock: 5,
        pictureUrl: '/images/ojotas-rojo-ferrari.png',
    },
    {
        id: 4,
        title: "Ojota 2",
        description: "Model One",
        price: 2000,
        category: "Ojotas",
        stock: 5,
        pictureUrl: '/images/ojotas-rojo-ferrari.png',
    },
    {
        id: 5,
        title: "Zapato 1",
        description: "Model One",
        price: 2500,
        category: "Zapatos",
        stock: 5,
        pictureUrl: '/images/ojotas-celestes.png',
    },
    {
        id: 6,
        title: "Zapato 2",
        description: "Model One",
        price: 2150,
        category: "Zapatos",
        stock: 5,
        pictureUrl: '/images/ojotas-celestes.png',
    },
];

const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(cosa);
            }, 2000);
        });

        getData
        .then(respuesta => setData(respuesta.find(cosa => cosa.id === parseInt(id))));
    }, [id]);

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;