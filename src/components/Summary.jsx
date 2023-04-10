import PropTypes from 'prop-types';

const Summary = (props) => {
    const { totalPrice } = props;
    const { updateTotalPrice } = props;

    return (
        <div className='container'>
            <h3>Summary</h3>
            <hr />
            <div className="row">
                <div className="col">
                    <h6>ENTER COUPON CODE</h6>
                    <h6>SUBTOTAL</h6>
                    <h6>SHIPPING</h6>
                    <h6>COUPON</h6>
                    <hr />
                    <h4>TOTAL</h4>
                </div>
                <div className="col">
                    <h6>10</h6>
                    <h6>{totalPrice}</h6>
                    <h6>FREE</h6>
                    <h6>$10</h6>
                    <hr />
                    <h4>${totalPrice}</h4>
                </div>
            </div>
        </div>
    );
}

Summary.propTypes = {
    totalPrice: PropTypes.number,
    updateTotalPrice: PropTypes.func
};

export default Summary;