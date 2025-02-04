import "../public/css/styles.css";
import React, { useEffect, useState } from "react";
import carsApi, { Car } from "api/cars";
import CarSlide from "components/car-slide";
import { StyleProvider, ThemePicker } from 'vcc-ui';
import App from "views/app";


const HomePage = () => {
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
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <App />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
