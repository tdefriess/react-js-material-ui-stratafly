import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function ResultHeader({ classes, icon1, text, icon2 }) {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <HeaderIconAndLabel icon={icon1} text={text} />
      </Grid>

      <Grid item xs={4}>
        <HeaderRightIcon icon={icon2} />
      </Grid>
    </Grid>
  );
}
const styles = theme => ({ root: { flexGrow: 1, padding: theme.spacing.unit * 2 } });
export default withStyles(styles)(ResultHeader);

const HeaderIconAndLabel = props => {
  return (
    <Grid container direction="row" alignItems={'center'} spacing={16}>
      <Grid item> {props.icon}</Grid>

      <Grid item>
        <Typography variant="subtitle1" color="secondary">
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

const HeaderRightIcon = props => {
  return (
    <Grid container justify="flex-end">
      <Grid item>{props.icon}</Grid>
    </Grid>
  );
};