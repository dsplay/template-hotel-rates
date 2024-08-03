import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from 'react-icons/fa';
import {
  useTemplateVal,
} from '@dsplay/react-template-utils';
import './style.sass';

function DirectionArrows({ number }) {
  const primaryCardFontColor = useTemplateVal('primary_card_font_color');

  const renderIcon = () => {
    switch (number) {
      case 'down':
        return <FaAngleDown style={{ color: `${primaryCardFontColor}`, fontSize: '3em' }} />;
      case 'left':
        return <FaAngleLeft style={{ color: `${primaryCardFontColor}`, fontSize: '3em' }} />;
      case 'right':
        return <FaAngleRight style={{ color: `${primaryCardFontColor}`, fontSize: '3em' }} />;
      case 'up':
        return <FaAngleUp style={{ color: `${primaryCardFontColor}`, fontSize: '3em' }} />;
      default:
        return null;
    }
  };
  return (
    <div>
      {renderIcon(number)}
    </div>
  );
}

export default DirectionArrows;
