import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PrivateRoute } from '../components/PrivateRoute';
import { AppHeader } from '../components/AppHeader';
import { BoardPage } from './BoardPage';
import {RegisterPage} from './RegisterPage';
import {LoginPage} from './LoginPage'
import {ProfilePage} from './ProfilePage';
import { Loader } from '../components/Loader';
import { logOutUser } from '../store/actions';
import {fetchUser} from '../store/actions';
import { history } from '../store' ;
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.userLogOut = this.userLogOut.bind(this);
  }
  userLogOut() {
    const { logOut } = this.props;
    logOut();
  }
  componentDidMount(){
    const {getUser} = this.props;
    getUser()
  }
  appRoutes() {
    const { isLogged, isLoad } = this.props;
    return (
      <ConnectedRouter  history={history}>
         <AppHeader  handleLogOut={this.userLogOut} status={isLogged}/>
        <Switch>
          <PrivateRoute exact  path="/" component={ BoardPage } status={isLogged} load={isLoad}/>
          <Route path="/register" component={ RegisterPage } />
          <Route path="/login" component={ LoginPage } />
          <PrivateRoute path="/profile" component={ ProfilePage } status={isLogged} load={isLoad}/>
        </Switch>
      </ConnectedRouter>
    )
  }
  render() {
    const {isLoad} = this.props;
    if(!isLoad){
      return(<Loader />)
    } 
    return(
      this.appRoutes()
    )
  }
}

const mapStateToProps = ({loginUser}) => ({
  isLogged: loginUser.loginStatus,
  isLoad: loginUser.isLoad,
})
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOutUser()),
  getUser: ()=> dispatch(fetchUser())

});
export default connect(mapStateToProps, mapDispatchToProps)(App);
