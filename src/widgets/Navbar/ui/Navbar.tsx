import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: NavbarProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { SECONDARY } = AppLinkTheme;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={SECONDARY} to="/">{t('Главная')}</AppLink>
        {/* eslint-disable-next-line  */}
        <AppLink theme={SECONDARY} to="/about">{t('О нас')}</AppLink>
      </div>
    </div>
  );
}
