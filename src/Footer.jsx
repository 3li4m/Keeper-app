import React from "react";

const date = new Date();
let year = date.getFullYear();

function Footer(){
    return (
        <div className="footer">
            <p>Copyright © CenoDigital {year}</p>
        </div>
    );
}

export default Footer;