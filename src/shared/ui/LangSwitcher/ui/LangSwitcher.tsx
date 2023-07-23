import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Button } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher(props: LangSwitcherProps) {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggleLangHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleLangHandler}
    >
      {t('Язык')}
    </Button>
  );
}
