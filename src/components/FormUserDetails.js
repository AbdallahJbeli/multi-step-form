import React, { Component } from 'react';
import { AppBar, TextField, Button, Typography, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant='h6'>
                Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ padding: '20px' }}>
            <TextField 
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              fullWidth
              margin="normal"
            />
            <br />
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;
