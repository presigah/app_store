import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import ProductImage from './ProductImage';

const ProductItem = (props) => {
    const { product } = props;
    const { cartProducts } = props;
    const { setCartProducts } = props;
    const { updateTotalProducts } = props;
    const { updateTotalPrice } = props;

    const addProductToCart = (product) => {
        const cartProduct = cartProducts.filter(cartProduct => cartProduct.id === product.id)
        if (cartProduct.length === 0) {
            product.cantProductos = 1
            setCartProducts([...cartProducts, product]);
            updateTotalProducts(1)
            updateTotalPrice(product.precio)
        } else {
            if (cartProduct[0].cantProductos < product.cantidad) {
                const updatedProducts = cartProducts.map((cartProduct) =>
                    product.id === cartProduct.id ? { ...cartProduct, cantProductos: cartProduct.cantProductos + 1 } : cartProduct
                );
                setCartProducts(updatedProducts);
                updateTotalProducts(1)
                updateTotalPrice(product.precio)
            }
        };
    }

    return (
            <div className="card m-3" style={{ width: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <ProductImage
                            productImage={product.img}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{product.nombre}</h3>
                            <h3 className="card-text text-warning">$ {product.precio}</h3>
                            <AddToCart
                                product={product}
                                addProductToCart={addProductToCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
    cartProducts: PropTypes.arrayOf(PropTypes.object),
    updateTotalProducts: PropTypes.func,
    updateTotalPrice: PropTypes.func
};

export default ProductItem;