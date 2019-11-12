import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class LandingPage extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <React.Fragment>
        <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
    )
  }
}

export default LandingPage;
