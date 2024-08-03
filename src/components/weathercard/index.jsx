import {
  FitText,
  useTemplateVal,
} from '@dsplay/react-template-utils';
import './style.sass';
import Weather from '../weather';

function WeatherCard() {
  const city = useTemplateVal('city');
  return (
    <div>
      <div className="grid grid-cols-2 items-center">
        <div className="col-span-2 h-10">
          <FitText>
            {`${city}`}
          </FitText>
        </div>
        <div className="col-span-2 h-24">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
