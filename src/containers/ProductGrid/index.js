import { connect } from 'react-redux';
import { Home } from '../../components';

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const ProductGrid = connect(mapStateToProps)(Home);

export default ProductGrid;
