import {
  FitText,
  useTemplateVal,
} from '@dsplay/react-template-utils';
import './style.sass';
import ImageCard from '../imagecard';
import WeatherCard from '../weathercard';
import DirectionArrows from '../directionarrows';

function Main() {
  const hotelLogo = useTemplateVal('logo');
  const primaryCardColor = useTemplateVal('primary_card_color');
  const primaryCardFontColor = useTemplateVal('primary_card_font_color');
  const secondaryCardColor = useTemplateVal('secondary_card_color');
  const secondaryCardFontColor = useTemplateVal('secondary_card_font_color');
  const counterTitle = useTemplateVal('counter_title');
  const room01 = useTemplateVal('room_01');
  const room01Price = useTemplateVal('room_01_price');
  const room01Description = useTemplateVal('room_01_desc');
  const room02 = useTemplateVal('room_02');
  const room02Price = useTemplateVal('room_02_price');
  const room02Description = useTemplateVal('room_02_desc');
  const room03 = useTemplateVal('room_03');
  const room03Price = useTemplateVal('room_03_price');
  const room03Description = useTemplateVal('room_03_desc');
  const room04 = useTemplateVal('room_04');
  const room04Price = useTemplateVal('room_04_price');
  const room04Description = useTemplateVal('room_04_desc');
  const room05 = useTemplateVal('room_05');
  const room05Price = useTemplateVal('room_05_price');
  const room05Description = useTemplateVal('room_05_desc');
  const exchangeCardTitle = useTemplateVal('exchange_card_title');
  const exchangeRateUSD = useTemplateVal('exchange_rate_usd');
  const exchangeRateEUR = useTemplateVal('exchange_rate_eur');

  return (
    <div className="main">
      <div className="flex flex-col h-screen">
        <div className="flex flex-row h-full gap-x-4 p-4">
          {/* Col I */}
          <div className="flex flex-col w-1/2">
            <div className="grid grid-cols-2 grid-rows-3 grid-flow-row gap-4 h-full">
              <div className="col-span-2">
                <ImageCard source={useTemplateVal('image_01')} />
              </div>
              {/* Master Room/ Sale Room */}
              <div
                className="grid grid-flow-row justify-start p-4 rounded-lg"
                style={{
                  backgroundColor: `${secondaryCardColor}`,
                  color: `${secondaryCardFontColor}`,
                }}
              >
                <div className="h-12 w-fit">
                  <FitText>{room01}</FitText>
                </div>
                <div className="h-6 w-fit">
                  <FitText>{room01Description}</FitText>
                </div>
                <div className="h-16 w-fit">
                  <FitText>{room01Price}</FitText>
                </div>
              </div>
              <div
                className="row-span-2 p-4 rounded-lg"
                style={{
                  backgroundColor: `${primaryCardColor}`,
                  color: `${primaryCardFontColor}`,
                }}
              >
                {/* Menu item 01 */}
                <div className="grid grid-flow-row justify-start">
                  <div className="h-8 w-fit font-semibold">
                    <FitText>{room02}</FitText>
                  </div>
                  <div className="h-6 w-fit">
                    <FitText>{room02Description}</FitText>
                  </div>
                  <div className="h-9 w-fit">
                    <FitText>{room02Price}</FitText>
                  </div>
                </div>
                {/* Menu item 02 */}
                <div className="grid grid-flow-row justify-start pt-2">
                  <div className="h-8 w-fit font-semibold">
                    <FitText>{room03}</FitText>
                  </div>
                  <div className="h-6 w-fit">
                    <FitText>{room03Description}</FitText>
                  </div>
                  <div className="h-9 w-fit">
                    <FitText>{room03Price}</FitText>
                  </div>
                </div>
                {/* Menu item 03 */}
                <div className="grid grid-flow-row justify-start pt-2">
                  <div className="h-8 w-fit font-semibold">
                    <FitText>{room04}</FitText>
                  </div>
                  <div className="h-6 w-fit">
                    <FitText>{room04Description}</FitText>
                  </div>
                  <div className="h-9 w-fit">
                    <FitText>{room04Price}</FitText>
                  </div>
                </div>
                {/* Menu item 04 */}
                <div className="grid grid-flow-row justify-start pt-2">
                  <div className="h-8 w-fit font-semibold">
                    <FitText>{room05}</FitText>
                  </div>
                  <div className="h-6 w-fit">
                    <FitText>{room05Description}</FitText>
                  </div>
                  <div className="h-9 w-fit">
                    <FitText>{room05Price}</FitText>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4 rounded-lg"
                style={{
                  backgroundColor: `${primaryCardColor}`,
                  color: `${primaryCardFontColor}`,
                }}
              >
                <div
                  className="h-28 w-28 rounded-full"
                  style={{
                    backgroundImage: `url(${hotelLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center',
                  }}
                >
                  &nbsp;
                </div>
                <div className="h-8 w-full mt-1">
                  <FitText>{counterTitle}</FitText>
                </div>
                <div className="h-9">
                  <DirectionArrows number={useTemplateVal('arrow_direction')} />
                </div>
              </div>
            </div>
          </div>
          {/* Col II */}
          <div className="flex flex-col w-1/2">
            <div className="grid grid-cols-2 grid-rows-3 grid-flow-row gap-4 h-full">
              <div className="row-span-2 rounded-lg">
                <ImageCard source={useTemplateVal('image_02')} />
              </div>
              <div
                className="grid grid-flow-row p-4 rounded-lg"
                style={{
                  backgroundColor: `${primaryCardColor}`,
                  color: `${primaryCardFontColor}`,
                }}
              >
                <WeatherCard />
              </div>
              <div className="row-span-2 rounded-lg bg-slate-400">
                <ImageCard source={useTemplateVal('image_03')} />
              </div>
              <div
                className="grid grid-flow-row p-4 rounded-lg"
                style={{
                  backgroundColor: `${secondaryCardColor}`,
                  color: `${secondaryCardFontColor}`,
                }}
              >
                <div className="h-10 max-w-full">
                  <FitText>{exchangeCardTitle}</FitText>
                </div>
                <div className="flex flex-row justify-between gap-4">
                  <div className="h-10"><FitText>Dollar</FitText></div>
                  <div className="h-10"><FitText>{exchangeRateUSD}</FitText></div>
                </div>
                <div className="flex flex-row justify-between gap-4">
                  <div className="h-10"><FitText>Euro</FitText></div>
                  <div className="h-10"><FitText>{exchangeRateEUR}</FitText></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Main;
