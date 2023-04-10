import PropTypes from 'prop-types';

const Header = (props) => {
    const { totalProducts } = props;
    return (
        <div className="container">
            <nav className="navbar justify-content-between">
                <a className="navbar-brand"><p style={{ fontSize: '50px', marginLeft: '30px'}}>Taller 1</p> </a>
                <button type="button" className="btn btn-light">
                    <h4>🛒 {totalProducts} products </h4>
                </button>
            </nav>
            <hr />
        </div>
    );
};

Header.propTypes = {
    totalProducts: PropTypes.number,
};

export default Header;
