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

const EditUserForm = ({handleSubmit, classes, onSubmitHandler}) => {
  return(
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card className={classes.editFormWrap}>
        <CardContent>
          <Typography component="h2">
            Редактирование информации пользователя
          </Typography>
          <Typography component="div" className={classes.editFormFieldWrap}>
            <Field 
              name="name"
              label="Имя"
              component={RenderField}
              className={classes.editFormField}
              labelClass={classes.editFormLabel}
              type="text"
            />
          </Typography>
          <Typography component="div" className={classes.editFormFieldWrap}>
            <Field 
              name="surname"
              label="Фамилия"
              component={RenderField}
              className={classes.editFormField}
              labelClass={classes.editFormLabel}
              type="text"
            />
          </Typography>
          <Typography component="div" className={classes.editFormFieldWrap}>
            <Field 
              name="name_customer"
              label="Название заказчика"
              component={RenderField}
              className={classes.editFormField}
              labelClass={classes.editFormLabel}
              type="text"
            />
          </Typography>
          <Typography component="div" className={classes.editFormFieldWrap}>
            <Field 
              name="role"
              label="Роль пользователя(1-поставщик, 2-заказчик) "
              component={RenderField}
              className={classes.editFormField}
              labelClass={classes.editFormLabel}
              type="text"
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            type="submit"
            className={classes.editFormSubmit}
          >
            Сохранить
          </Button>
        </CardActions>
      </Card>

    </form>
  )
}

export default reduxForm({
  form: 'editUserForm',
  enableReinitialize: true,
})(withStyles(styles)(EditUserForm));