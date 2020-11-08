import Layout from "./Layout/Layout";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {CssBaseline} from '@material-ui/core';

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <Layout />
    </React.Fragment>, 
document.getElementById("root"));