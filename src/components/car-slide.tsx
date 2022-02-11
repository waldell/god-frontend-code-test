import { Car } from "api/cars";
import React from "react";
import { Block, Flex, Link, Text } from "vcc-ui";

type CarSlideProps = {
  car: Car
}

const CarSlide: React.FC<CarSlideProps> = ({
  car
}) => {
  return (
    <div style={{
      padding: 20,
      display: 'inline-block'
    }}>
      <Text
        variant="bates"
        subStyle="emphasis"
        extend={{ textTransform:'uppercase' }}>{car.bodyType}</Text>

      <Text subStyle="emphasis">{car.modelName}</Text>
      <Text>{car.modelType}</Text>
      <picture>
        <img 
          style={{
            width: '100%'
          }}
          src={car.imageUrl} 
          alt={`Image of ${car.modelName}`} />
      </picture>
      <Flex extend={{
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Link style={{
          margin: '0 15px'
        }} href={`/learn/${car.id}`} arrow="right">Learn</Link>
        <Link style={{
          margin: '0 15px'
        }} href={`/shop/${car.id}`} arrow="right">Shop</Link>
      </Flex>
    </div>
  );
}

export default CarSlide;