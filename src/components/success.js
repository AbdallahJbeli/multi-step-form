import React, { Component } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
  

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Success</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ padding: "20px" }}>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Success;
