import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from "lodash/range";


export default class Portfolio extends React.Component  {

  createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(20),
      })
    }, 100);
  }

  
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;
    return(
        <ItemsCarousel
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

          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
        >
          {children}
        </ItemsCarousel>
    );
  }
}