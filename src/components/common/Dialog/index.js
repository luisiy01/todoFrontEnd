import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { connect, useDispatch } from "react-redux";
import { closeDialog } from "../../../redux/actions/todo";
import { callAddToDo } from "../../../api/Todo";
import Spinner from "../Spinner";

function CDialog(props) {
  const { showDialog, newTodo, authToken, isLoading, user_id } = props;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const addToDoToList = () => {
    dispatch(
      callAddToDo({
        toDo: newTodo,
        authToken: authToken,
        user_id: user_id,
      })
    );
  };

  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"ToDo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to add this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={addToDoToList} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      {isLoading ? <Spinner /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showDialog: state.todo.showDialog,
    newTodo: state.todo.newTodo,
    authToken: state.user.authToken,
    isLoading: state.todo.isLoading,
    user_id: state.user.user._id,
  };
};

const mapDispatchToProps = {
  closeDialog,
  callAddToDo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CDialog);
