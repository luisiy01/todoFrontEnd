import React, { memo } from "react";
import { Paper } from "@material-ui/core";
import { Formik } from "formik";
import Form from "./Form";
import { validationSchema } from "./Validation";
import CDialog from "../../common/Dialog";
import { connect, useDispatch } from "react-redux";
import { openDialog } from "../../../redux/actions/todo";
import CSnackbar from "../../common/SnackBar";
import { Redirect } from "react-router-dom";

const AddTodo = memo((props) => {
  const { newTodo, errorMesssage, logOut, added } = props;
  const values = { todo: newTodo.todo, dueDate: newTodo.dueDate };
  const dispatch = useDispatch();

  if (logOut) return <Redirect to="/login" />;
  else
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Formik
          render={(props) => <Form {...props} />}
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            dispatch(openDialog(values));
          }}
        />
        <CDialog />
        {errorMesssage.length > 0 ? (
          <CSnackbar message={errorMesssage} severity="error" />
        ) : null}
        {added ? (
          <CSnackbar message="Added Correctly!" severity="success" />
        ) : null}
      </Paper>
    );
});

const mapStateToProps = (state) => {
  return {
    newTodo: state.todo.newTodo,
    errorMesssage: state.todo.error,
    logOut: state.user.logOut,
    added: state.todo.added,
  };
};

const mapDispatchToProps = {
  openDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
