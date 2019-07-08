import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from '../../components/RegisterForm';
import { PopUp } from './../../components/PopUp';
import { userRegister } from '../../store/actions';


class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(data) {
    const { registerUser } = this.props;
    registerUser(data)
  }
  render() {
    const { registerStatus, registerMessage } = this.props;
   
    return (
      <div>
      <RegisterForm onSubmitHandler={values => this.handleRegister(values)}/>
      {registerStatus ? (<PopUp open={registerStatus} message={registerMessage}/>): ''}</div>
    )
  }
}

const mapStateToProps = ({ registerUser }) => ({
  registerStatus: registerUser.status,
  registerMessage: registerUser.message,
});
const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(userRegister(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
