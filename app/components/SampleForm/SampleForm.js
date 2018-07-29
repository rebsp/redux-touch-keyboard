import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable' // <--- immutable import
import ReactModal from 'react-modal';


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

class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      focus: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  putKey(value) {
    console.log(value);
    this.props.change(this.state.focus, value);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
            onFocus={(e, name) => {
              this.setState({ showModal: true, focus: name })
              document.activeElement.blur()
            }}
        />
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field name="age" type="number" component={renderField} label="Age" />
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
        >
          <p onClick={() => this.putKey('juhu')}>Modal text!</p>
        </ReactModal>
      </form>
    );
  }
}

export default reduxForm({
  form: 'sample', // a unique identifier for this form
  destroyOnUnmount: false
})(SampleForm)
