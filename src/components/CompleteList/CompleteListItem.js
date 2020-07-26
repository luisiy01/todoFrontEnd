import React, { memo } from "react";
import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { connect, useDispatch } from "react-redux";
import { callDeleteToDo } from "../../api/Todo";

const CompleteListItem = memo((props) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(
      callDeleteToDo({
        _id: props._id,
      })
    );
  };

  return (
    <ListItem divider={props.divider}>
      <ListItemText primary={props.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={deleteTodo}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

const mapDispatchToProps = {
  callDeleteToDo,
};

export default connect(null, mapDispatchToProps)(CompleteListItem);
