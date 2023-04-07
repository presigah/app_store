import PropTypes from 'prop-types';

const AddToCart = (props) => {
    const { product } = props;
    const { addProductToCart } = props;
    return (
        <button onClick={() => addProductToCart(product)}>Add To cart</button>
    );
};

AddToCart.propTypes = {
    product: PropTypes.object,
    addProductToCart: PropTypes.func
};

export default AddToCart;