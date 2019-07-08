import React from 'react';
import { Typography, Container  } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';
const MainPanel = ({classes}) => (
  <Container maxWidth="lg" className={classes.mainPanel}>
    <div className={classes.mainPanelHead}>
    <Typography component="div">
      <Typography component="h3" variant="h6" className={classes.headTitle}>
        Найдено
      </Typography>
      <Typography component="span" className={classes.headSubtitle}>
         (192 услуги)
      </Typography>
    </Typography>
    </div>
    <div className={classes.mainPanelContent}>
      <div className={classes.mainPanelItem}>
        <Typography component="div" className={classes.mainPanelItemLeft}>
            <Typography component="h4" variant="h6" className={classes.mainPanelItemHead}>
              Дизайн сайта UI и UX
            </Typography>
            <Typography className={classes.mainPanelItemContent}>
              Рекламные компании говорят что реклама необходима и важна. Он информирует людей о новых продуктах. Рекламные щиты на улице делают нашу среду яркой
            </Typography>
            <Typography component="div" className={classes.mainPanelItemTags}>
              <Typography component="span">#Landing-Page</Typography>
              <Typography component="span">#Логотип</Typography>
              <Typography component="span">#Промо-сайт</Typography>
            </Typography>
        </Typography>
        <Typography component="div" className={classes.mainPanelItemRight}>
          <Typography component="div" className={classes.mainPanelItemRightPrice}>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPrice}>
                1 840$
            </Typography>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPriceDesc}>
              1 - 2 месяца
            </Typography>
          </Typography>
        </Typography>
      </div>
      <div className={classes.mainPanelItem}>
        <Typography component="div" className={classes.mainPanelItemLeft}>
            <Typography component="h4" variant="h6" className={classes.mainPanelItemHead}>
              Дизайн сайта UI и UX
            </Typography>
            <Typography className={classes.mainPanelItemContent}>
              Рекламные компании говорят что реклама необходима и важна. Он информирует людей о новых продуктах. Рекламные щиты на улице делают нашу среду яркой
            </Typography>
            <Typography component="div" className={classes.mainPanelItemTags}>
              <Typography component="span">#Landing-Page</Typography>
              <Typography component="span">#Логотип</Typography>
              <Typography component="span">#Промо-сайт</Typography>
            </Typography>
        </Typography>
        <Typography component="div" className={classes.mainPanelItemRight}>
          <Typography component="div" className={classes.mainPanelItemRightPrice}>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPrice}>
                1 840$
            </Typography>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPriceDesc}>
              1 - 2 месяца
            </Typography>
          </Typography>
        </Typography>
      </div>
      <div className={classes.mainPanelItem}>
        <Typography component="div" className={classes.mainPanelItemLeft}>
            <Typography component="h4" variant="h6" className={classes.mainPanelItemHead}>
              Дизайн сайта UI и UX
            </Typography>
            <Typography className={classes.mainPanelItemContent}>
              Рекламные компании говорят что реклама необходима и важна. Он информирует людей о новых продуктах. Рекламные щиты на улице делают нашу среду яркой
            </Typography>
            <Typography component="div" className={classes.mainPanelItemTags}>
              <Typography component="span">#Landing-Page</Typography>
              <Typography component="span">#Логотип</Typography>
              <Typography component="span">#Промо-сайт</Typography>
            </Typography>
        </Typography>
        <Typography component="div" className={classes.mainPanelItemRight}>
          <Typography component="div" className={classes.mainPanelItemRightPrice}>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPrice}>
                1 840$
            </Typography>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPriceDesc}>
              1 - 2 месяца
            </Typography>
          </Typography>
        </Typography>
      </div>
      <div className={classes.mainPanelItem}>
        <Typography component="div" className={classes.mainPanelItemLeft}>
            <Typography component="h4" variant="h6" className={classes.mainPanelItemHead}>
              Дизайн сайта UI и UX
            </Typography>
            <Typography className={classes.mainPanelItemContent}>
              Рекламные компании говорят что реклама необходима и важна. Он информирует людей о новых продуктах. Рекламные щиты на улице делают нашу среду яркой
            </Typography>
            <Typography component="div" className={classes.mainPanelItemTags}>
              <Typography component="span" className={classes.mainPanelItemTagsItem}>#Landing-Page</Typography>
              <Typography component="span" className={classes.mainPanelItemTagsItem}>#Логотип</Typography>
              <Typography component="span" className={classes.mainPanelItemTagsItem}>#Промо-сайт</Typography>
            </Typography>
        </Typography>
        <Typography component="div" className={classes.mainPanelItemRight}>
          <Typography component="div" className={classes.mainPanelItemRightPrice}>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPrice}>
                1 840$
            </Typography>
            <Typography component="span" variant="h6" className={classes.mainPanelItemRightPriceDesc}>
              1 - 2 месяца
            </Typography>
          </Typography>
        </Typography>
      </div>
    </div>
  </Container>
);

export default withStyles(styles)(MainPanel);