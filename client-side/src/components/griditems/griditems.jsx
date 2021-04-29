import React from "react";
import "./griditems.scss";

const GridItems = ({title,subject})=>{
    return (
        <div className="grid-items">
            <h3>
                {title}
            </h3>
            <p>
                {subject}
            </p>
        </div>
    );
};

export default GridItems;