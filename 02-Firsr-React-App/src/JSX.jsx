import React from "react";

function JSX() {
    //Without Jsx

    let element = React.createElement("h1", null, "Without jsx text")

    element = <h1>This is Text with jsx</h1>

    return <>{element}</>
}

export default JSX