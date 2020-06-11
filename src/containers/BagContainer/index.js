import { connect } from 'react-redux';
import { addToBag, removeFromBag } from '../../redux/actions';
import { ShoppingBag } from '../../components';

const mapStateToProps = (state) => {
  return {
    shoppingBag: state.shoppingBag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBag: () => dispatch(addToBag()),
    removeFromBag: (id) => dispatch(removeFromBag(id)),
  };
};

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);

export default BagContainer;
