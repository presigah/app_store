import PropTypes from 'prop-types';

const Summary = (props) => {
    const { totalPrice } = props;
    const { updateTotalPrice } = props;
    
    return(
        <div>
            <h3>Summary</h3>
            <p>enter cupon code</p>
            <p>Shipping free</p>
            <p>Coupon 10</p>
            <hr />
            <h3>PrecioTotal: {totalPrice}</h3>
        </div>
    );
}

Summary.propTypes = {
    totalPrice: PropTypes.number,
    updateTotalPrice: PropTypes.func
};

export default Summary;