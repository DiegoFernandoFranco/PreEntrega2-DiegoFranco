import { useState } from "react";
import { useEffect } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);    


    const quitar = () => {
        if (count > initial) {
            setCount(count - 1);
        }   else {
            console.log('Contador al Minimo');
        }
    }



    const agregar = () => {
        if (count < stock) {
            setCount(count + 1);            
        }   else {
            console.log('Contador al Maximo');
        }
    }

    useEffect (() => {
        setCount(initial);
    }, [initial])
    return (
        <div>
            <button onClick={quitar}>-</button>
            <span>{count}</span>
            <button onClick={agregar}>+</button>
            <div>
                <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
                {/* <button disabled={stock < 1} onClick={() => onAdd(count)}>Agregar al Carrito</button> */}
            </div>
        </div>
    );
};

export default ItemCount;