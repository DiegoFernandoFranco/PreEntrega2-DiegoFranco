// import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const cosas = [
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
    }
];


const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    const {id} = useParams();
    
    useEffect(() =>{
        const getData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(cosas);
            }, 2000)
        })

        if (id) {
            getData
            .then(respuesta => setData(respuesta.filter(cosas => cosas.category === id)))
            .catch(error => console.log(error))
        }   else {
                getData
                .then(respuesta => setData(respuesta))
                .catch(error => console.log(error))
            }

        
    }, [id]);

    const onAdd = (cantidad) => {
        cantidad === 1 
        ? console.log(`${cantidad} Item agregados al Carrito`)
        : console.log(`${cantidad} Items agregados al Carrito`)
        
    }

    return (
        <>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data}/>
        </>
    );
};

export default ItemListContainer;