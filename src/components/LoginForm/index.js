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
import { callLoginUser } from "../../api/User";
import Spinner from "../common/Spinner";
import CSnackbar from "../common/SnackBar";
import { Redirect } from "react-router-dom";

function LoginForm(props) {
  const classes = useStyles();
  const values = { email: "", confirmPassword: "", password: "" };
  const {
    isLoading,
    errorMesssage,
    userCreated,
    isAuthUser,
    logOut,
    userLogOut,
  } = props;

  const dispatch = useDispatch();

  if (isAuthUser) return <Redirect to="/dashboard" />;
  else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            render={(props) => <Form {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              dispatch(
                callLoginUser({
                  email: values.email,
                  password: values.password,
                })
              );
            }}
          />
          <Grid container>
            <Grid item xs>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {isLoading ? <Spinner /> : null}
          {errorMesssage.length > 0 ? (
            <CSnackbar message={errorMesssage} severity="error" />
          ) : null}
          {logOut && !userLogOut ? (
            <CSnackbar message="Session Expired!" severity="error" />
          ) : null}
          {userCreated ? (
            <CSnackbar message="User Created!" severity="success" />
          ) : null}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLoading: state.user.isLoading,
    errorMesssage: state.user.error,
    authToken: state.user.authToken,
    userCreated: state.user.created,
    isAuthUser: state.user.isAuthUser,
    logOut: state.user.logOut,
    userLogOut: state.user.userLogOut,
  };
};

export default connect(mapStateToProps)(LoginForm);
