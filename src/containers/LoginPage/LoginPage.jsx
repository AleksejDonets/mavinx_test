import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/LoginForm';
import { userLogin } from '../../store/actions';
class LoginPage extends Component {

  handlelogin(data) {
    const { loginUser } = this.props;
    loginUser(data);
  }
  render() {
    const { message } = this.props;
    return (
      <LoginForm onSubmitHandler={values => this.handlelogin(values)} errors={message}/>
    );
  }
};

const mapStateToProps = ({loginUser}) => ({
  message: loginUser.loginErrors,
})


const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(userLogin(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
