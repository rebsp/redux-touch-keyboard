// export { default } from './App';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeSelectFormValues } from './selectors';
import reducer from './reducer';
import App from './App';


const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (values) => {
    console.log(values);
  }
});

const mapStateToProps = createStructuredSelector({
  formValues: makeSelectFormValues()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
export default compose(withReducer, withConnect)(App);
export { mapDispatchToProps };
