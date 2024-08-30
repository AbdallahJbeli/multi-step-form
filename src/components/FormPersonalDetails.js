import React, { Component } from 'react';
import { AppBar, TextField, Button, Typography, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant='h6'>
                Enter Personal Details
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ padding: '20px' }}>
            <TextField 
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              fullWidth
              margin="normal"
            />
            <br />
            <TextField 
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              fullWidth
              margin="normal"
            />
            <br />
            <TextField 
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              fullWidth
              margin="normal"
            />
            <br />
            <Button 
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={this.continue}
              fullWidth
              margin="normal"

            >
              Continue
            </Button>
            <Button 
              variant="contained"
              color="inherit"
              style={styles.button}
              onClick={this.back}
              fullWidth
              margin="normal"

            >
              Back
            </Button>
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  button: {
    marginTop: 15
  }
}

export default FormPersonalDetails;
