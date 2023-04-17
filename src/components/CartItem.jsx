import PropTypes from 'prop-types';
import ProductImage from './ProductImage';

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
            return null
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
            <div className='container'>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <ProductImage
                                productImage={cartProduct.img}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{cartProduct.nombre}</h3>
                                <p className="card-text">{cartProduct.descripcion}</p>
                                <h4 className="card-text text-warning">$ {cartProduct.precio}</h4>
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <h2 className='border border-light rounded bg-secondary bg-opacity-25' style={{paddingBottom: '10px'}}><center>{cartProduct.cantProductos} pcs</center></h2>
                                        </div>
                                        <div className="col">
                                            <button className='border border-success' onClick={handleIncrement}>+</button>
                                            <button className='border border-danger' onClick={handleDecrement}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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