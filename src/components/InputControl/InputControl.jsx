import React from "react";
import TextField from '@mui/material/TextField';

import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
     <TextField id="outlined-basic" label={label} variant="outlined" {...props} />
    </div>
  );
}

export default InputControl;
