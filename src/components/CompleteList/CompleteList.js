import React, { memo } from "react";
import { List, Paper } from "@material-ui/core";
import CompleteListItem from "./CompleteListItem";
const CompleteList = memo((props) => {
  return (
    <>
      {props.items.length > 0 && (
        <div>
          <h2 style={{ margin: 16 }}>Completed Tasks</h2>
          <Paper style={{ margin: 16 }}>
            <List>
              {props.items.map((todo, idx) => (
                <CompleteListItem
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
export default CompleteList;
