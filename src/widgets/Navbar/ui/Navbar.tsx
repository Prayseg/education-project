import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { ThemeSwitcher } from "shared/ui";

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const {className} = props;
  const { SECONDARY } = AppLinkTheme;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={SECONDARY} to="/">Home</AppLink>
        <AppLink theme={SECONDARY} to="/about">About</AppLink>
      </div>
    </div>
  );
};

