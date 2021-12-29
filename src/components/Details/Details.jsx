import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

ChartJS.register(ArcElement, Tooltip, Legend);

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={'Expenses chart'} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">£{total.toFixed(2)}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
