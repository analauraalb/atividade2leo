import React from "react";

import "./styles.css";
import { removePropertiesDeep } from "@babel/types";

function HelloWorld(props) {
    return <h1>Hello {props.name}!</h1>;
}

export default HelloWorld;