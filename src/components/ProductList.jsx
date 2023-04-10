import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    const { products } = props;
    const { cartProducts } = props;
    const { setCartProducts } = props;
    const { updateTotalProducts } = props;
    const { updateTotalPrice } = props;

    return (
        <div className='container'>
            <div className="row">
            {products.map((product) => (
                <div className="col-6 col-mb-4 " key={product.id}>
                <ProductItem
                    key={product.id}
                    product={product}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    updateTotalProducts={updateTotalProducts}
                    updateTotalPrice={updateTotalPrice}
                />
                </div>
            ))}
            </div>
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