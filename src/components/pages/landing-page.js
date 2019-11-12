import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import FormRow from '@material-ui/core/FormRow';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Container className={'emi-calci'} maxWidth="md" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <Grid container spacing={1}>
            <Grid container item xs={12} sm={4} md={4} spacing={4}>
              <form noValidate autoComplete="off">
                <TextField 
                  id="standard-secondary"
                  label="Loan Amount" 
                  color="secondary"
                />
                <TextField
                  id="standard-secondary"
                  label="Tenure (Years)" 
                  color="secondary"
                />
                <TextField
                  id="standard-secondary"
                  label="Rate on Interest (%)" 
                  color="secondary"
                />
              </form>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default LandingPage;
