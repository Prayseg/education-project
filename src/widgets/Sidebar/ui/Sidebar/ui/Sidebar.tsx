import { useState } from "react";
import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher, LangSwitcher } from "shared/ui";

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const {className} = props;
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={classNames(cls.Switchers)}>
        <ThemeSwitcher className="test-css-class" />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

