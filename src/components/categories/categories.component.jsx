import React from "react";
import "./categories.styles.css";

const Categories = (props) => {
    
    const { title, index} = props.categoriesData;
    return(
        <div className="categories">
            <h1>{title}</h1>
            <h3>{index}</h3>
        </div>
    );
}

export default Categories;