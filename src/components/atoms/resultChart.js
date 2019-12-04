import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Chart } from "react-google-charts";

const ResultChart = (props) => {
  const principalAmt = props.resultChartNumbers.totalAmt - props.resultChartNumbers.interestAmount;

  return (
    <React.Fragment>
      <Grid container xs={12} sm={4} md={4} spacing={4} className={'result-block'} item>
      <Chart
        width={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Personal Loan, Intreset & Principal Amount'],
          ['Principal Amount', principalAmt],
          ['Interest Amount', props.resultChartNumbers.interestAmount],
        ]}
        rootProps={{ 'data-testid': '1' }}
      />
      </Grid>
    </React.Fragment>
  )
}

export default ResultChart;
