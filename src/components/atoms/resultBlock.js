import React from "react";
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

const ResultBlock = (props) => {
  const emiAmt = props.resultNumbers.loanAmt && props.resultNumbers.loanAmt;
  // const emiAmtCheck = isNaN(emiAmt) ? 0 : emiAmt;
  
  return (
    <React.Fragment>
      <Grid container xs={12} sm={4} md={4} spacing={4} className={'result-block'} item>
        <ListItem>
          <p>Loan Amount</p>
          <span className={'rupee-symbol'}>{emiAmt ? emiAmt : 0}</span>
        </ListItem>
        <ListItem>
          <p>Monthly EMI</p>
          <span className={'rupee-symbol'}>{props.resultNumbers.formatMonthlyEmi ? props.resultNumbers.formatMonthlyEmi : 0}</span>
        </ListItem>
        <ListItem>
          <p>Interest Amount Payable</p>
          <span className={'rupee-symbol'}>{props.resultNumbers.formatinterestAmt && props.resultNumbers.formatinterestAmt}</span>
        </ListItem>
        <ListItem>
          <p>Total Amount Payable</p>
          <span className={'rupee-symbol'}>{props.resultNumbers.formatTotalAmt && props.resultNumbers.formatTotalAmt}</span>
        </ListItem>
      </Grid>
    </React.Fragment>
  )
}

export default ResultBlock;
