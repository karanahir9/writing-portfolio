import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import {CATEGORIES_DATA} from "../../data/categories.data";
import Categories from "../categories/categories.component";

export default class Portfolio extends React.Component  {

  componentWillMount() {
    this.setState({
      activeItemIndex: 0,
    });
  }

  
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const childrenArray = CATEGORIES_DATA.map((element,i) => <Categories key={i}categoriesData={element}/>);

    const { activeItemIndex } = this.state;
    return(
        <ItemsCarousel className="items-carousel"
          //Placeholder config
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

          // Carousel configurations
          numberOfCards={3}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}

          //Active Item Configuration
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}

          chevronWidth={50}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={true}
        >
          {childrenArray}
        </ItemsCarousel>
    );
  }
}