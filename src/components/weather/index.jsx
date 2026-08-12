import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  FitText,
  useTemplateVal,
} from '@dsplay/react-template-utils';

const KEY_VERSION = 'weather_version';
const VERSION = '1.1';

function WeatherContent({ lat, lon }) {
  const [result, setResult] = useState();

  useEffect(() => {
    const url = `https://api.dsplay.tv/weather/current?lat=${lat}&lon=${lon}`;
    const storageKey = `tv.dsplay.info-bar.weather-(${lat},${lon})`;

    let weather;
    const storedWeather = localStorage.getItem(storageKey);
    const storedVersion = localStorage.getItem(KEY_VERSION);

    if (storedWeather) {
      try {
        weather = JSON.parse(storedWeather);
      } catch (e) {
        localStorage.removeItem(storageKey);
      }
    }

    if (storedVersion !== VERSION || !weather || (moment().utc().isAfter(moment.utc(weather.value && weather.value.expiresAt)))) {
      (async () => {
        try {
          const response = await axios.get(url);
          const json = response.data;
          setResult(json);

          localStorage.setItem(storageKey, JSON.stringify({
            value: json,
          }));
          localStorage.setItem(KEY_VERSION, VERSION.toString());
        } catch (e) {
          console.error(`[weather] error fetching weather data: ${e.message}`, e);
          localStorage.removeItem(storageKey);
        }
      })();
    } else {
      setResult(weather.value);
    }
  }, [lat, lon]);

  if (result) {
    const {
      data: {
        weather: {
          current: {
            temp,
            icon,
          },
        },
      },
    } = result;

    return (
      <div className="col-span-2 flex flex-row justify-between gap-2">
        <div className="h-1/2 w-2/5">
          <img alt="Weather icon" height="100%" width="100%" src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} />
        </div>
        <div className="h-1/2 w-3/5">
          <FitText>{Math.round(temp)}º</FitText>
        </div>
      </div>
    );
  }

  return null;
}

function Weather() {
  const lat = useTemplateVal('latitude');
  const lon = useTemplateVal('longitude');

  if (!lat || !lon) {
    return null;
  }

  return <WeatherContent lat={lat} lon={lon} />;
}

export default Weather;
