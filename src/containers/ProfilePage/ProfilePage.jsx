import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { UserCard } from '../../components/UserCard';
import { EditUserForm } from '../../components/EditUserForm';
import {editUser, userEdit} from '../../store/actions';
class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.editUserToggle = this.editUserToggle.bind(this);
    this.saveEditUser = this.saveEditUser.bind(this);
  }

  editUserToggle() {
    const { toggleEdit } = this.props;
    toggleEdit();
  }

  saveEditUser(user) {
    const { saveEdit } = this.props;
    const newUser = {
      name: user.name,
      surname: user.surname,
      name_customer: user.name_customer,
      role:user.role,
    };
    saveEdit(newUser)
  }
  render() {
    const { user, editStatus } = this.props;
    if(editStatus) {
      return(
        <EditUserForm initialValues={user}  onSubmitHandler={values => this.saveEditUser(values)}/>
      )
    }
    return(

        
        <UserCard user={user} toggleEdit={this.editUserToggle}/>
      
    )
  }
}
const mapStateToProps = ({loginUser}) => ({
  user: loginUser.user,
  editStatus: loginUser.editUser,
});

const mapDispatchToProps = dispatch => ({
  toggleEdit: () => dispatch(editUser()),
  saveEdit: user => dispatch(userEdit(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
