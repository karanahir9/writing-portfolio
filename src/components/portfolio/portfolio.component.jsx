import React, { Fragment } from 'react';
import "./portfolio.styles.css";
import ItemsCarousel from 'react-items-carousel';
import {CATEGORIES_DATA} from "../../data/categories.data";
import Categories from "../categories/categories.component";
import CategoryDetails  from "../categoryDetails/categoryDetails.component";

export default class Portfolio extends React.Component  {

  componentWillMount() {
    this.setState({
      activeItemIndex: 0,
    });
  }

  
  changeActiveItem = (activeItemIndex) => {
      this.setState({ activeItemIndex })
    };

  render() {
    const childrenArray = CATEGORIES_DATA.map((element,i) => <Categories key={i}categoriesData={element}/>);

    const { activeItemIndex } = this.state;
    return(
      <Fragment>
      <div className="carousel-container">
        <ItemsCarousel
          //Placeholder config
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

          // Carousel configurations
          numberOfCards={1}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={false}
          freeScrolling={true}

          //Active Item Configuration
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}

          chevronWidth={50}
          rightChevron= {<div className="right-chevron"><i className="fa fa-chevron-right fa-3x" aria-hidden="true"></i></div>}
          leftChevron={<div className="left-chevron"><i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i></div>}
          outsideChevron={true}
        >
          {childrenArray}
        </ItemsCarousel>
      </div>
      <CategoryDetails activeIndex={this.state.activeItemIndex}/>
      </Fragment>
    );
  }
}