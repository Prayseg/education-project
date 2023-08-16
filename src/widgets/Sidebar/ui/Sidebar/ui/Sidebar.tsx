import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher, LangSwitcher } from 'shared/ui';

import { useTranslation } from 'react-i18next';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button
        data-testid="sidebar-toggle-btn"
        type="button"
        onClick={onToggle}
      >
        {t('Toggle')}
      </button>
      <div className={classNames(cls.Switchers)}>
        <ThemeSwitcher className="test-css-class" />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
