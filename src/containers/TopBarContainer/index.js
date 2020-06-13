import { connect } from 'react-redux';
import { removeFromBag } from '../../redux/actions';
import { TopBar } from '../../components';

const mapStateToProps = (state) => {
  return {
    shoppingBag: state.shoppingBag,
  };
};

const TopBarContainer = connect(mapStateToProps)(TopBar);

export default TopBarContainer;
