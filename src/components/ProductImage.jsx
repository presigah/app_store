import PropTypes from 'prop-types';

const ProductImage = (props) => {
    const { productImage } = props;
    return(
        <div> Imagen </div>
    );
};

ProductImage.propTypes = {
    productImage: PropTypes.string
};

export default ProductImage;