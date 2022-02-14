import { Car } from "api/cars";
import React from "react";
import { Flex, Link, Text, useTheme } from "vcc-ui";

type CarSlideProps = {
  car: Car
}

const CarSlide: React.FC<CarSlideProps> = ({ car }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        padding: 20,
        display: 'inline-block'
      }}
    >
      <Text 
        variant="bates" 
        subStyle="emphasis" 
        foreground={theme.color.foreground.secondary} 
        extend={{ textTransform:'uppercase' }}
      >
        {car.bodyType}
      </Text>

      <Text 
        subStyle="emphasis" 
        foreground={theme.color.foreground.primary}
        extend={{ 
          marginRight: 5,
          fromL: {
            display: 'inline-block'
          }
        }}
      >
        {car.modelName}
      </Text>
      <Text 
        foreground={theme.color.foreground.secondary}
        extend={{ 
          fromL: {
            display: 'inline-block'
          }
        }}
      >
        {car.modelType}
      </Text>
      <picture>
        <img 
          style={{
            width: '100%'
          }}
          src={car.imageUrl} 
          alt={`Image of ${car.modelName}`}
        />
      </picture>
      <Flex
        extend={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Link 
          style={{
            margin: '0 15px'
          }}
          href={`/learn/${car.id}`} 
          arrow="right"
          aria-label={`Learn more about ${car.modelName}`}
        >
          Learn
        </Link>
        <Link 
          style={{
            margin: '0 15px'
          }}
          href={`/shop/${car.id}`} 
          arrow="right"
          aria-label={`Shop your ${car.modelName}`}
        >
          Shop
        </Link>
      </Flex>
    </div>
  );
}

export default CarSlide;