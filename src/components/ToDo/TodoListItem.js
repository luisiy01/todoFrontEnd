import React, { memo } from "react";
import moment from "moment";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { connect, useDispatch } from "react-redux";
import { callCompleteToDo, callDeleteToDo } from "../../api/Todo";

const TodoListItem = memo((props) => {
  const dispatch = useDispatch();

  const checkTodo = () => {
    dispatch(
      callCompleteToDo({
        _id: props._id,
      })
    );
  };

  const deleteTodo = () => {
    dispatch(
      callDeleteToDo({
        _id: props._id,
      })
    );
  };

  return (
    <ListItem divider={props.divider}>
      <Checkbox onClick={checkTodo} checked={false} disableRipple />
      <ListItemText
        primary={props.text}
        secondary={
          "Due Date: " + moment.utc(props.dueDate).format("YYYY-MM-DD")
        }
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={deleteTodo}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

const mapDispatchToProps = {
  callCompleteToDo,
  callDeleteToDo,
};

export default connect(null, mapDispatchToProps)(TodoListItem);
