import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./Style";

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
