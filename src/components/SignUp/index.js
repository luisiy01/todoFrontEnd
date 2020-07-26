import React from "react";
import { Formik } from "formik";
import { Form } from "./Form";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { validationSchema } from "./Validation";
import { useStyles } from "./Style";
import { connect, useDispatch } from "react-redux";
import { callCreateUser } from "../../api/User";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import CSnackbar from "../common/SnackBar";

function SignUp(props) {
  const classes = useStyles();
  const values = { email: "", confirmPassword: "", password: "" };
  const { isLoading, errorMesssage, userCreated, isAuthUser } = props;
  const dispatch = useDispatch();

  if (userCreated) return <Redirect to="/login" />;
  else if (isAuthUser) return <Redirect to="/dashboard" />;
  else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Formik
            render={(props) => <Form {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              dispatch(
                callCreateUser({
                  email: values.email,
                  password: values.password,
                })
              );
            }}
          />
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
          {isLoading ? <Spinner /> : null}
          {errorMesssage.length > 0 ? (
            <CSnackbar message={errorMesssage} severity="error" />
          ) : null}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    errorMesssage: state.user.error,
    userCreated: state.user.created,
    isAuthUser: state.user.isAuthUser,
  };
};

export default connect(mapStateToProps)(SignUp);
