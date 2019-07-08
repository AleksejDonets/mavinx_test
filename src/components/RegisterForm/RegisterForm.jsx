import React from 'react';
import { connect } from 'react-redux';
import { 
  Field, 
  reduxForm, 
  formValueSelector 
} from 'redux-form';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { createTextMask } from 'redux-form-input-masks';
import { RenderField } from '../RenderField';
import styles from './style';

const phoneMask = createTextMask({
  pattern: '3809999999',
});

let RegisterForm = ({
  onSubmitHandler,
  handleSubmit,
  roleValues,
  message,
  classes
} ) => (
  <div>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card  className={classes.registerFormBlock}>
        <CardContent>
          <Typography component="h2" variant="h5">
            Регистрация
          </Typography>
          <Typography component="div">
            <Field 
                name="name"
                label="Имя"
                component={RenderField}
                className={classes.registerFormField}
                labelClass={classes.registerFormLabel}
                type="text"
                placeholder="Введите свое имя"
              />
            <Typography component="div" className={classes.registerFormRequired}><span>{message.name}</span></Typography>
          </Typography>
          <Typography component="div">
            <Field 
                name="surname"
                label="Фамилия"
                component={RenderField}
                className={classes.registerFormField}
                labelClass={classes.registerFormLabel}
                type="text"
                placeholder="Введите свою фамилию"
              />
              <Typography component="div" className={classes.registerFormRequired}><span>{message.surname}</span></Typography>
          </Typography>
          <Typography component="div">
            <Field 
                name="role"
                component={RenderField}
                className={classes.registerFormField}
                labelClass={classes.registerFormLabel}
                type="number"
                label="Роль пользователя(1-поставщик, 2-заказчик) "
                placeholder="Введите роль пользователя "
              />
              <Typography component="div" className={classes.registerFormRequired}><span>{message.role}</span></Typography>
          </Typography>
          {
            roleValues === '2' ? (
              <Typography component="div">
                  <Field 
                    name="name_customer"
                    label="Название заказчика"
                    component={RenderField}
                    className={classes.registerFormField}
                    type="text"
                    placeholder="Введите назваие заказчика"
                    labelClass={classes.registerFormLabel}
                  />
              </Typography>
            ) : null
          }
          <Typography component="div">
            <Field 
              name="email"
              label="Email"
              component={RenderField}
              className={classes.registerFormField}
              labelClass={classes.registerFormLabel}
              type="email"
              placeholder="Введите email"
            />
            <Typography component="div" className={classes.registerFormRequired}><span>{message.email}</span></Typography>
          </Typography>
          <Typography component="div">
            <Field 
              name="phone"
              label="Телефон"
              component={RenderField}
              className={classes.registerFormField}
              labelClass={classes.registerFormLabel}
              type="tel"
              placeholder="38 099 99 99 999"
              required='false'
              {...phoneMask}
            />
            <Typography component="div" className={classes.registerFormRequired}><span>{message.phone}</span></Typography>
          </Typography>
          <Typography component="div">
            <Field 
              name="password"
              label="Пароль"
              component={RenderField}
              className={classes.registerFormField}
              labelClass={classes.registerFormLabel}
              type="password"
              placeholder="Введите пароль"
            />
          </Typography>
          <Typography component="div">
            <Field 
              name="password_confirmation"
              label="Подтверждение"
              component={RenderField}
              className={classes.registerFormField}
              labelClass={classes.registerFormLabel}
              type="password"
              placeholder="Подтвердите свой пароль"
            />
          </Typography>
        </CardContent>
        <CardActions>
            <Button
              type="submit"
              className={classes.registerFormSubmit}
            >
              Зарегистрироватся
            </Button>
          </CardActions>
      </Card>
    </form>
  </div>
);

  


RegisterForm = reduxForm({
  form: 'register_form',
})(RegisterForm);

const selector = formValueSelector('register_form');

const mapStateToProps = state => ({
  roleValues: selector(state, 'role'),
  message: state.registerUser.errMessage,
})
export default connect(mapStateToProps, null)(withStyles(styles)(RegisterForm));