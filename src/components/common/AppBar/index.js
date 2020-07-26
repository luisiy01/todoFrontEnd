import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import { userLogout } from "../../../redux/actions/user";
import { clearMessage } from "../../../redux/actions/todo";
import { showCompleteList } from "../../../redux/actions/dashboard";
import { connect, useDispatch } from "react-redux";
import { useStyles } from "./Style";

function CAppBar(props) {
  const { completeList } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLogout(true));
  };

  const showCompletedList = () => {
    dispatch(showCompleteList(!completeList));
    if (completeList) {
      dispatch(clearMessage());
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {JSON.parse(localStorage.getItem("user"))
              ? JSON.parse(localStorage.getItem("user")).email
              : ""}
          </Typography>
          <Button color="inherit" onClick={showCompletedList}>
            {!completeList ? "Completed Tasks" : "Pendding Tasks"}
          </Button>
          <Button color="inherit" onClick={logOut}>
            Logout
          </Button>
          <AccountCircle />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    completeList: state.dashboard.completeList,
  };
};

const mapDispatchToProps = {
  userLogout,
  showCompleteList,
  clearMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(CAppBar);
