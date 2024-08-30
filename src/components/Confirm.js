import React, { Component } from "react";
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Toolbar,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Confirm user data</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ padding: "20px" }}>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
            <br />
            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={this.continue}
              fullWidth
              margin="normal"
            >
              Confirm & Continue
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
    marginTop: 15,
  },
};

export default Confirm;
