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
        <div>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
            <AddToCart
                product={product}
                addProductToCart={addProductToCart}
            />
            <ProductImage 
                productImage={product.img}
            />
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