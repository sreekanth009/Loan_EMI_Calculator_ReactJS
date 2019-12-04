import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import ResultBlock from '../atoms/resultBlock';
import ResultChart from '../atoms/resultChart';

const monthlyEmi = (loanAmount, interest, tenure) => {
	let rateOfInt = interest/100/12;
	let paymentTenure = tenure*12;
	let length = Math.pow(1+rateOfInt, paymentTenure);
  let monthlyPayable = Math.floor((loanAmount*length*rateOfInt)/(length-1));
	return monthlyPayable;
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: '',
      tenure: '',
      rateOfInt: '',
      monthlyEmiAmount: ''
    }
    this.calculateEmi = this.calculateEmi.bind(this);
    this.inputHandleChange = this.inputHandleChange.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  // On input change
  inputHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // On calculate Btn click
  calculateEmi = (e) => {
    e.preventDefault();
    const {
      loanAmount,
      tenure,
      rateOfInt
    } = this.state;

    this.setState({
      monthlyEmiAmount: monthlyEmi(loanAmount, rateOfInt, tenure),
    });
  }

  // Number formatting 
  numberFormat = (num) => {
    return num.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    // return num.replace(/['"]+/g, '');
  }

  // Reset input fields
  resetFields = (e) => {
    e.preventDefault();
    this.setState({
      loanAmount: '',
      rateOfInt: '',
      tenure: '',
      monthlyEmiAmount: ''
    })
    const allInputFields = document.querySelectorAll('input');
    const fieldsLength = allInputFields.length;
    for (var i = 0; i < fieldsLength; ++i) {
      allInputFields[i].value = '';
    }
  }

  render() {
    const {
      loanAmount,
      tenure,
      monthlyEmiAmount
    } = this.state;

    let resultNumbers = {}
    let resultChartNumbers = {}

    const totalAmt = Math.floor(monthlyEmiAmount ? monthlyEmiAmount * (tenure*12) : 0);
    const interestAmt = Math.floor(totalAmt ? totalAmt - loanAmount : 0);

    // Formatting numbers and assiging to an object
    resultNumbers = Object.assign(resultNumbers, {
      loanAmt: this.numberFormat(loanAmount),
      formatMonthlyEmi: this.numberFormat(monthlyEmiAmount),
      formatTotalAmt: this.numberFormat(totalAmt),
      formatinterestAmt: this.numberFormat(interestAmt)
    });

    // Result number charts
    resultChartNumbers = Object.assign(resultChartNumbers, {
      totalAmt: totalAmt,
      interestAmount: interestAmt
    })

    return (
      <React.Fragment>
        <Container p={0} className={'emi-calci'} maxWidth="md">
          <h1 align={"center"} m={0}>Personal Loan EMI calci</h1>
          <Grid container spacing={1}>
            <Grid container xs={12} sm={4} md={4} spacing={4} item>
              <form noValidate autoComplete="off">
                <TextField 
                  id="standard-secondary"
                  label="Loan Amount" 
                  color="secondary"
                  name="loanAmount"
                  onChange={this.inputHandleChange}
                />
                <TextField
                  id="standard-secondary"
                  label="Tenure (Years)" 
                  color="secondary"
                  name="tenure"
                  onChange={this.inputHandleChange}
                />
                <TextField
                  id="standard-secondary"
                  label="Rate on Interest (%)" 
                  color="secondary"
                  name="rateOfInt"
                  onChange={this.inputHandleChange}
                />
                <div className={'operation-btns'}>
                  <Button variant="contained"
                    color="primary"
                    onClick={this.calculateEmi}
                  >
                    Calculate
                  </Button>
                  <Button variant="contained" color="secondary" onClick={this.resetFields}>
                    Reset
                  </Button>
                </div>
              </form>
            </Grid>
            <ResultBlock resultNumbers={resultNumbers} />
            <ResultChart resultChartNumbers={resultChartNumbers} />
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default LandingPage;
