import React from "react";
import {CATEGORY_DETAILS} from "../../data/category.details.data";


class CategoryDetails extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            title: "Tech",
            image: ""
        }
    }

    static getDerivedStateFromProps( props, state) {
        const { title, image } = CATEGORY_DETAILS[props.activeIndex];    
        return { title,  image }    
    }
    render(){
        console.log(this.state.image);
        return(
            <div>
                
               {this.state.title}
               <img src={this.state.image}/>
            </div>
        );

    }
}

export default CategoryDetails;

