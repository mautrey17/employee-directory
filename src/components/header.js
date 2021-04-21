import React from "react";

const style = {
    header: {
        background: "#7709F6",
        color: "#E4DD1B"
    }
}

//#88F609

function Header() {
    return (
            <h1 className="text-center p-5" style={style.header}>Employee Directory</h1>
    )
}

export default Header;