import React from "react";
import { useSpringCarousel } from 'react-spring-carousel-js'
import { Block, Button, Flex, Icon, View } from "vcc-ui";

const nextPrevStyle: React.CSSProperties = {
  background: 'none',
  border: 'none'
}
const dotStyle: React.CSSProperties = {
    background: '#000',
    border: 'none',
    width: 10,
    height: 10,
    marginLeft: 10,
    padding:0,
    borderRadius: '50%',
    overflow: 'hidden',
    transition: 'background 300ms ease 0s',
}

type Slide = {
  id: string
  renderItem: JSX.Element
}
type CarouselProps = {
  slideItems: Slide[]
}

type DotProps = {
  onClick: React.MouseEventHandler
}
const Dot: React.FC<DotProps> = ({ onClick }) => {
  return (
    <button style={dotStyle} onClick={onClick}></button>
  );
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
      <Flex extend={{
        flexDirection: 'row',
        justifyContent: 'right',
        display: 'none',
        fromL: {
          display: 'flex'
        }
      }}>
        <button onClick={slideToPrevItem} style={nextPrevStyle}>
          <Icon type="media-previous-40" />
        </button>
        <button onClick={slideToNextItem} style={nextPrevStyle} >
          <Icon type="media-next-40" />
        </button>
      </Flex>
      <Flex extend={{
        display: 'none',
        flexDirection: 'row',
        justifyContent: 'center',
        untilL: {
          display: 'flex'
        }
        }}>
        {thumbsFragment}
      </Flex>
      
    </div>
  );
}

export default Carousel;