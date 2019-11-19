import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

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
      monthlyEmiAmount: '',
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

  // Reset input fields
  resetFields = (e) => {
    e.preventDefault();
    alert('4445')
    const {
      loanAmount,
      rateOfInt,
      tenure,
      monthlyEmiAmount
    } = this.state;

    this.setState({
      loanAmount: '',
      rateOfInt: '',
      tenure: '',
      monthlyEmiAmount: ''
    })
    document.querySelector('input[name=loanAmount]').value = '';
  }

  render() {
    return (
      <React.Fragment>
        <Container p={0} className={'emi-calci'} maxWidth="md" style={{ backgroundColor: '#cfe8fc', height: '95vh' }}>
          <h1 align={"center"} m={0}>Personal Loan EMI calci</h1>
          <Grid container spacing={1}>
            <Grid container item xs={12} sm={4} md={4} spacing={4}>
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
                  <Button variant="contained" color="primary">
                    Calculate
                  </Button>
                  <Button variant="contained" color="secondary" onClick={this.resetFields}>
                    Reset
                  </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default LandingPage;
