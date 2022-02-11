import carsApi, { Car } from "api/cars";
import CarSlide from "components/car-slide";
import Carousel from "components/carousel";
import React, { useEffect, useState } from "react";
import { Grid, Row, Col, Logo, View } from "vcc-ui";

const App = () => {
  const [cars, setCars] = useState<Car[]>();
  
  useEffect(() => {
    (async () => {
      setCars(await carsApi.get());
    })();
  }, []);

  const _slides = React.useMemo(() => {
    return cars?.map(c => {
      return {
        id: c.id,
        renderItem: <CarSlide car={c} />
      }
    });
  }, [cars])

  return (
    <Grid>
      <Row align="center">
        <Col size={12}>
          {_slides && <Carousel slideItems={_slides} />}
        </Col>
      </Row>
    </Grid>
  );
}

export default App;