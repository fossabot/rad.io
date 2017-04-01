import { connect } from 'react-redux';
import { login } from '../../state/actionCreators/auth';
import Auth from './Auth';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
