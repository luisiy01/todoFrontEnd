import React, { memo } from "react";
import { List, Paper } from "@material-ui/core";
import TodoListItem from "./TodoListItem";
const TodoList = memo((props) => {
  return (
    <>
      {props.items.length > 0 && (
        <div>
          <h2 style={{ margin: 16 }}>Pendding Tasks</h2>
          <Paper style={{ margin: 16 }}>
            <List>
              {props.items.map((todo, idx) => (
                <TodoListItem
                  {...todo}
                  key={`TodoItem.${idx}`}
                  divider={idx !== props.items.length - 1}
                />
              ))}
            </List>
          </Paper>
        </div>
      )}
    </>
  );
});
export default TodoList;
