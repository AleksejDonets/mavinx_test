import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LeftPanel } from '../../components/LeftPanel';
import { MainPanel } from '../../components/MainPanel';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import styles from './style';

class BoardPage extends Component {
 
  render() {
    const { classes } = this.props;
    return( 
      <Container component="div" maxWidth={false} className={classes.root}>
        <LeftPanel />
        <MainPanel />
      </Container>
      
    );
  }
};

export default connect(null, null)(withStyles(styles)(BoardPage));