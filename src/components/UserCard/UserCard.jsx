import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import {Edit} from '@material-ui/icons';
import styles from './style';

const UserCard = ({user, toggleEdit, classes}) => {
  return (
    <Card className={classes.userCardWrap}>
      <CardContent>
        <Typography component="div">
            <Typography  className={classes.userCardFieldDesc}>Имя: </Typography>
            <Typography component="span">{user.name}</Typography>
          </Typography>
          <Typography  component="div">
            <Typography  className={classes.userCardFieldDesc}>Фамилия: </Typography>
            <Typography component="span">{user.surname}</Typography>
          </Typography>
          <Typography component="div">
            <Typography  className={classes.userCardFieldDesc}>Роль: </Typography>
            <Typography component="span">{user.role}</Typography>
          </Typography>
          {
            user.name_customer ? (
              <Typography  component="div">
                <Typography  className={classes.userCardFieldDesc}>Название заказчика: </Typography>
                <Typography component="span">{user.name_customer}</Typography>
              </Typography>
            ): null
          }
          
      </CardContent>
      <CardActions>
        <Button
         onClick={toggleEdit}
         component="span"
        >
          Редактировать 
          <Edit />
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(UserCard);
