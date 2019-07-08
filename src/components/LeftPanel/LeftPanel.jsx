import React from 'react';
import { Typography, Container, FormControl , Select, MenuItem, Chip  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const LeftPanel = ({ classes}) => {
  return (
    <Container maxWidth="sm" className={classes.leftPanel}>
      <div className={classes.leftPanelWrap}>
        <div className={classes.leftPanelHead}>
          <Typography component="h3" variant="h6" >
            Фильтры
          </Typography>
          <Typography component="span" className={classes.headSubtitle}>
            Очистить
          </Typography>
        </div>
        <div className={classes.leftPanelCategory}>
          <div className="leftPanelCategoryHead">
            <Typography component="h3" variant="h6" className={classes.catTitle}>
              Категории  
            </Typography>
            <Typography component="span" className={classes.headSubtitle}>
              (4)
            </Typography>
          </div>
          <div className={classes.leftPanelCategoryMain}>
            <FormControl className={classes.categorySelect}>
              <Select
                value="Название"
              >
                <MenuItem value="Название" disabled>
                  Название
                </MenuItem>
              </Select>
            </FormControl>
            <AddIcon className={classes.doneColor}/>
          </div>
          <div className={classes.leftPanelCategoryChipsWrap}>
            <Chip label="#Логотип" className={classes.leftPanelCategoryChips}/>
            <Chip label="#Landing-page" className={classes.leftPanelCategoryChips}/>
            <Chip label="#Промо-сайт" className={classes.leftPanelCategoryChips}/>
            <Chip icon={<ClearIcon className={classes.clearIconColor}/>}/>
          </div>
        </div> 
      </div>
    </Container>
    
    

  )
};

export default withStyles(styles)(LeftPanel);
