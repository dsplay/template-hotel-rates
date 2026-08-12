import { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import {
  Loader, useScreenInfo, useTemplateVal, useConfig,
} from '@dsplay/react-template-utils';
import Intro from '../intro';
import Main from '../main';
import i18n from '../../i18n';
import './style.sass';

const MIN_LOADING_DURATION = 2000;

// other tasks (Promises) to run during template intro
const tasks = [
  Promise.resolve('my promise result'),
];

function App() {
  const { screenFormat } = useScreenInfo();
  const logo = useTemplateVal('logo');
  const bgColor = useTemplateVal('background_color');
  const { locale } = useConfig();

  // images to preload
  const images = useMemo(() => [logo], [logo]);

  const [lng] = (locale || 'en').split('_');
  i18n.changeLanguage(lng);

  return (
    <I18nextProvider i18n={i18n}>
      <Loader
        placeholder={<Intro />}
        images={images}
        minDuration={MIN_LOADING_DURATION}
        tasks={tasks}
      >
        <div
          className={`app fade-in ${screenFormat}`}
          style={{ backgroundColor: `${bgColor}` }}
        >
          <Main />
        </div>
      </Loader>
    </I18nextProvider>
  );
}

export default App;
