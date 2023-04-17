import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Summary = (props) => {
    const { totalPrice } = props;
    const { updateTotalPrice } = props;
    const [couponCode, setCouponCode] = useState(0);
    const [editCoupon, setEditCoupon] = useState(false);

    const handleChange = (event) => {
        if (event.target.value > 100) {
            setCouponCode(0);
        } else {
            setCouponCode(parseInt(event.target.value));
        }
    }

    const handleEnterCouponCode = () => {
        setEditCoupon(!editCoupon);
    }

    useEffect(() => {
        const input = document.getElementById("couponInput");
        input.disabled = !editCoupon;
    }, [editCoupon]);

    return (
        <div className='container'>
            <h3>Summary</h3>
            <hr />
            <div className="row">
                <div className="col">
                    <div className='mb-2' style={{ display: 'flex', alignItems: 'center' }}>
                        <h6>ENTER COUPON CODE</h6>
                        <button onClick={handleEnterCouponCode}>{editCoupon ? '✔' : '✎'}</button>
                    </div>
                    <h6>SUBTOTAL</h6>
                    <h6>SHIPPING</h6>
                    <h6>COUPON</h6>
                    <hr />
                    <h4>TOTAL</h4>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input className='form-control' id='couponInput' type="number" min="0" max="100" value={couponCode} onChange={handleChange} />
                    </div>
                    <h6>${totalPrice}</h6>
                    <h6>FREE</h6>
                    <h6>${isNaN(couponCode) ? 0 : couponCode}</h6>
                    <hr />
                    <h4>${isNaN(couponCode) ? totalPrice : (totalPrice - couponCode)}</h4>
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