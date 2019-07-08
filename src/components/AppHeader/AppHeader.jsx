import React from 'react';
import { 
  AppBar, 
  Toolbar ,
  Typography,
  Button,
  InputBase,
  MenuItem,
  Menu,

} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { AccountCircle } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import  styles from './styles';

const AppHeader = ({classes, handleLogOut, status}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  if(status){
    return(
      <AppBar className={classes.root}>
      <Toolbar>
        <div className={classes.blockLogo}>
          <NavLink to="/" className={classes.noDecoration}>
            Exprts
          </NavLink>
        </div>
        <div className={classes.searchBlock}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            className={classes.searchInput}
            placeholder="Поиск экспертов, навыки"
            inputProps={{ 'aria-label': 'Search' }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.blockButtons}>
          <Button className={classes.blockButtonsItem}>
            Эксперты
          </Button>
          <Button className={classes.blockButtonsItem}>
            Вопросы
          </Button>
          <Button className={classes.blockButtonsItem}>
            О нас
          </Button>
          <Button className={classes.blockButtonsLastElem}>
            Создать проект
          </Button>
        </div>
        <div className="blockUserMenu">
          <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleClick}>
            <AccountCircle />
          </Button>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/profile" className={classes.noDecoration}>
                Профиль
              </NavLink>

            </MenuItem>
            <MenuItem onClick={handleLogOut}>Выйти</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
    )
  }
  return(
    <AppBar className={classes.root}>
      <Toolbar>
        <div className={classes.blockLogo}>
          <NavLink to="/" className={classes.noDecoration}>
            Exprts
          </NavLink>
        </div>
        
        <div className={classes.grow} />
        <div className={classes.blockButtons}>
          <NavLink to='/login' className={classes.noDecoration}>
            <Button className={classes.blockButtonsItem}>
              Войти
            </Button>
          </NavLink>
          
          <NavLink to='/register' className={classes.noDecoration}>
            <Button className={classes.blockButtonsItem}>
              Регистрация
            </Button>
          </NavLink>
        </div>

      </Toolbar>
    </AppBar>
  )
};

export default withStyles(styles)(AppHeader);