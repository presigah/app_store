import PropTypes from 'prop-types';

const CartItem = (props) => {
    const { cartProduct } = props;
    const { cartProducts } = props;
    const { setCartProducts } = props;
    const { updateTotalProducts } = props;
    const { updateTotalPrice } = props;

    const handleIncrement = () => {
        if (cartProduct.cantProductos !== cartProduct.cantidad) {
            const updatedProducts = cartProducts.map((cartItemProduct) =>
                cartProduct.id === cartItemProduct.id ? { ...cartProduct, cantProductos: cartProduct.cantProductos + 1 } : cartItemProduct
            );
            setCartProducts(updatedProducts);
            updateTotalProducts(1);
            updateTotalPrice(cartProduct.precio);
        }
    };

    const handleDecrement = () => {
        if (cartProduct.cantProductos === 1) {
            DeleteProducto(cartProduct)
            return
        }
        const updatedProducts = cartProducts.map((cartItemProduct) =>
            cartProduct.id === cartItemProduct.id ? { ...cartProduct, cantProductos: cartProduct.cantProductos - 1 } : cartItemProduct
        );
        setCartProducts(updatedProducts);
        updateTotalProducts(-1)
        updateTotalPrice(-cartProduct.precio)
    };

    const DeleteProducto = (cartProduct) => {
        updateTotalProducts(-1)
        updateTotalPrice(-cartProduct.precio)
        const newCartProducts = cartProducts.filter((cartItemProduct) => cartItemProduct.id !== cartProduct.id)
        setCartProducts(newCartProducts);
    }

    return (
        <div>
            <h2>{cartProduct.nombre}</h2>
            <p>{cartProduct.descripcion}</p>
            <p>{cartProduct.precio}</p>
            <p>{cartProduct.img}</p>
            <div>
                <button onClick={handleDecrement}>-</button>
                <h2>{cartProduct.cantProductos} pcs</h2>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    cartProduct: PropTypes.object,
    updateTotalProducts: PropTypes.func,
    cartProducts: PropTypes.arrayOf(PropTypes.object),
    updateTotalPrice: PropTypes.func
};

export default CartItem;