import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle }) => (
  <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
    <CardContent>
      <Typography className={styles.pp} gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h4" component="h2">
        <CountUp start={0} end={value} duration={2.75} separator="," />
      </Typography>
      <Typography color="textPrimary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography color="textPrimary" variant="body2" component="p" className={styles.pp}>
        {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;
