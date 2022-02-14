import React from "react";
import { useSpringCarousel } from 'react-spring-carousel-js'
import { Flex, Icon } from "vcc-ui";
import Dot from "./dot";

type Slide = {
  id: string
  renderItem: JSX.Element
}
type CarouselProps = {
  slideItems: Slide[]
}
const Carousel: React.FC<CarouselProps> = ({ slideItems }) => {
  const { carouselFragment, thumbsFragment, slideToNextItem, slideToPrevItem, slideToItem } = useSpringCarousel({
    items: slideItems.map(x => { 
      return { 
        renderThumb: <Dot onClick={() => { slideToItem(x.id) }} />,
        ...x
      }
    }),
    itemsPerSlide: 4,
    withThumbs: true
  });
  
  return (
    <div>
      {carouselFragment}
      <Flex 
        extend={{
          flexDirection: 'row',
          justifyContent: 'right',
          display: 'none',
          paddingRight: 20,
          paddingLeft: 20,
          fromL: {
            display: 'flex'
          }
        }}
      >
        <button 
          style={{
            background: 'none',
            border: 'none'
          }}
          onClick={slideToPrevItem} 
          title="Show previous car"
        >
          <Icon type="media-previous-40" />
        </button>
        <button 
          style={{
            background: 'none',
            border: 'none'
          }}
          onClick={slideToNextItem}
          title="Show next car"
        >
          <Icon type="media-next-40" />
        </button>
      </Flex>
      <Flex 
        extend={{
          display: 'none',
          flexDirection: 'row',
          justifyContent: 'center',
          untilL: {
            display: 'flex'
          }
        }}
      >
        {thumbsFragment}
      </Flex>
      
    </div>
  );
}

export default Carousel;