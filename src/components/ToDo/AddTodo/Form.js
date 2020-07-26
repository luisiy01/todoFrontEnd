import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const Form = (props) => {
  const {
    values: { todo, dueDate },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid xs={5} md={9} item style={{ paddingRight: 16 }}>
          <TextField
            id="todo"
            name="todo"
            helperText={touched.todo ? errors.todo : ""}
            error={touched.todo && Boolean(errors.todo)}
            label="Add Todo here"
            fullWidth
            value={todo}
            onChange={change.bind(null, "todo")}
          />
        </Grid>
        <Grid xs={5} md={2} item style={{ paddingRight: 8 }}>
          <TextField
            id="dueDate"
            label="Due Date"
            type="date"
            defaultValue={dueDate}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputProps: { min: dueDate } }}
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            type="submit"
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={props.onButtonClick}
            disabled={!isValid || todo.length === 0}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
