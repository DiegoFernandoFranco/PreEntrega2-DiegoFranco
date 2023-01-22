import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({data = [] }) => {
    return (
        <ul className="card-todo">
            {data.map(cosas =>  <Item key={cosas.id} info={cosas} />)}
        </ul>
    )
}
    
    // <div>
    //     <p>ItemList</p>
    //     <Item />
    // </div>

export default ItemList;