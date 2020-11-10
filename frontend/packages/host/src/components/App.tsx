import React from "react";
import ReactDOM from "react-dom";
import ContainerHost from "./containerHost/ContainerHost";

const AppHost = () => (
    <ContainerHost />
)


ReactDOM.render(<AppHost />, document.getElementById("root"))