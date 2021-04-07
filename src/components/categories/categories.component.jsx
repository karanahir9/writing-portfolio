import React from "react";
import "./categories.styles.css";

const Categories = (props) => {
    
    const { title} = props.categoriesData;
    return(
        <div className="categories">
            <h1>{title}</h1>
        </div>
    );
}

export default Categories;