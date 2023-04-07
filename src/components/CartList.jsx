import PropTypes from 'prop-types';
import CartItem from "./CartItem";

const CarList = (props) => {
    const { cartProducts } = props;
    const { setCartProducts } = props;
    const { updateTotalProducts } = props;
    const { updateTotalPrice } = props;
    return (
        <div>
            {cartProducts.map((cartProduct) => (
                <CartItem
                    key={cartProduct.id}
                    cartProduct={cartProduct}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    updateTotalProducts={updateTotalProducts}
                    updateTotalPrice={updateTotalPrice}
                />
            ))}
        </div>
    )
}

CarList.propTypes = {
    cartProducts: PropTypes.arrayOf(PropTypes.object),
    updateTotalProducts: PropTypes.func,
    updateTotalPrice: PropTypes.func
};

export default CarList;