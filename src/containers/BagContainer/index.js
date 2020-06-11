import { connect } from 'react-redux';
import { removeFromBag } from '../../redux/actions';
import { ShoppingBag } from '../../components';

const mapStateToProps = (state) => {
  return {
    shoppingBag: state.shoppingBag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromBag: (id) => dispatch(removeFromBag(id)),
  };
};

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);

export default BagContainer;
