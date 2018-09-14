import React from 'react';
// import { cleanSession } from 'selenium-webdriver/safari';
import classes from "./Spinner.css";

const spinner = () => (
    <div className={classes.loader}>Loading...</div>
);

export default spinner;