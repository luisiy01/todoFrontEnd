import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const NotFound = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1>Page not found :( </h1>
        <h2>
          Maybe the page you are looking for has been removed, or you typed in
          the wrong URL
        </h2>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.history.goBack}
        >
          Go Back
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
