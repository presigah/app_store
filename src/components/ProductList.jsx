import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    const { products } = props;
    const { cartProducts } = props;
    const { setCartProducts } = props;
    const { updateTotalProducts } = props;
    const { updateTotalPrice } = props;

    return (
        <div>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    updateTotalProducts={updateTotalProducts}
                    updateTotalPrice={updateTotalPrice}
                />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    cartProducts: PropTypes.arrayOf(PropTypes.object),
    updateTotalProducts: PropTypes.func,
    updateTotalPrice: PropTypes.func
};

export default ProductList;