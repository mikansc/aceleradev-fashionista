import { connect } from 'react-redux';
import { addToBag } from '../../redux/actions';
import { ProductDetail } from '../../components';

const mapDispatchToProps = (dispatch) => {
  return {
    addToBag: (product, quantity) => dispatch(addToBag(product, quantity)),
  };
};

const ProductContainer = connect(null, mapDispatchToProps)(ProductDetail);

export default ProductContainer;
