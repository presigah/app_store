import PropTypes from 'prop-types';

const ProductImage = (props) => {
    const { productImage } = props;
    return(
        <img src={productImage} className="img-fluid rounded-start" alt="Product" style={{width: "300px", height: "210px"}}/>
    );
};

ProductImage.propTypes = {
    productImage: PropTypes.string
};

export default ProductImage;