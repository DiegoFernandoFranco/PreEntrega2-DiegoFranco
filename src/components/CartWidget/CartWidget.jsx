import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='carrito-container'>
            {/* <img src={require('./images/carrito.png')} /> */}
            <img src='./images/carrito.png' />
            <span className='carrito-items'>5</span>
        </div>
    )
}

export default CartWidget;