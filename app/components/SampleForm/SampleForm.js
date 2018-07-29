import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable' // <--- immutable import
import ReactModal from 'react-modal';
import Keyboard from 'components/Keyboard';


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      focus: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.removeKey = this.removeKey.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  putKey(value) {
    this.props.change(this.state.focus, (this.props.formValues[this.state.focus] || "") + value);
  }

  removeKey() {
    let curVal = this.props.formValues[this.state.focus] || "";
    this.props.change(this.state.focus, curVal.slice(0, -1));
  }

  focusElement(name) {
    this.setState({ showModal: true, focus: name });
    document.activeElement.blur();
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} label="Username" onFocus={(e, name) => this.focusElement(name)} />
        <Field name="email" type="email" component={renderField} label="Email" onFocus={(e, name) => this.focusElement(name)} />
        <Field name="age" type="number" component={renderField} label="Age" onFocus={(e, name) => this.focusElement(name)} />
        <div>
            <button type="submit" disabled={submitting}>
            Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
            </button>
        </div>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
           ariaHideApp={false}
           style={customStyles}
        >
          <Keyboard preview={this.props.formValues[this.state.focus]} backspacePressed={this.removeKey} keyPressed={(value) => this.putKey(value)} onRequestClose={this.handleCloseModal} />
        </ReactModal>
      </form>
    );
  }
}

export default reduxForm({
  form: 'sample', // a unique identifier for this form
  destroyOnUnmount: false
})(SampleForm)
