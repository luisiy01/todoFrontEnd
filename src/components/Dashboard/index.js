import React, { Fragment, memo, useLayoutEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import CDashBoard from "./dashboard";
import AddTodo from "../ToDo/AddTodo";
import TodoList from "../ToDo/TodoList";
import { clearMessage } from "../../redux/actions/todo";
import { callGetToDo } from "../../api/Todo";
import { connect, useDispatch } from "react-redux";
import CSnackbar from "../common/SnackBar";
import { Redirect } from "react-router-dom";
import CompleteList from "../CompleteList/CompleteList";

const DashBoard = memo((props) => {
  const { todoList, completed, logOut, deleted, completeList } = props;
  const dispatch = useDispatch();
  const pendding = todoList.filter((todo) => !todo.complete);
  const completedTasks = todoList.filter((todo) => todo.complete);

  useLayoutEffect(() => {
    dispatch(callGetToDo());
  }, []);

  if (logOut) return <Redirect to="/login" />;
  else
    return (
      <Fragment>
        <CssBaseline />
        <CDashBoard />
        {!completeList ? (
          <div>
            <AddTodo />
            <TodoList items={pendding} />
          </div>
        ) : (
          <div>
            <CompleteList items={completedTasks} />
          </div>
        )}

        {completed ? (
          <CSnackbar message="Congrats task completed!!" severity="success" />
        ) : null}
        {deleted ? <CSnackbar message="Task deleted" severity="info" /> : null}
      </Fragment>
    );
});

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
    completed: state.todo.completed,
    deleted: state.todo.deleted,
    logOut: state.user.logOut,
    completeList: state.dashboard.completeList,
  };
};

const mapDispatchToProps = {
  callGetToDo,
  clearMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
