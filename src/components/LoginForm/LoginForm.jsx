import React from 'react';
import { 
  Field, 
  reduxForm 
} from 'redux-form';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { RenderField } from '../RenderField';
import styles from './style';


let LoginForm = ({ 
  onSubmitHandler, 
  handleSubmit, 
  errors,
  classes
}) => (
  <form onSubmit={handleSubmit(onSubmitHandler)}>
    <Card className={classes.loginFormWrap}>
      <CardContent>
        <Typography  component="h2" variant="h5">
          Вход
        </Typography>
        <Typography component="div">
          <Field 
            name="email"
            label="Email"
            component={RenderField}
            className={classes.loginFormField}
            labelClass={classes.loginFormLabel}
            type="email"
            placeholder="Введите email"
          />
          <Typography component="div" className="register-form-required">{errors ? (<span>{errors.email}</span>) : ''}</Typography>
        </Typography>
        <Typography component="div">
          <Field 
            name="password"
            label="Пароль"
            component={RenderField}
            className={classes.loginFormField}
            labelClass={classes.loginFormLabel}
            type="password"
            placeholder="Введите пароль"
          />
          <Typography component="div" className="register-form-required">{errors ? (<span>{errors.password}</span>) : ''}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          className={classes.loginFormSubmit}
        >
          Войти
        </Button>
      </CardActions>
    </Card>
  </form>
);

LoginForm = reduxForm({
  form: 'login_form',
})(LoginForm);

export default withStyles(styles)(LoginForm);
