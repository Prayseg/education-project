import React from 'react';
import { useTranslation } from "react-i18next";

export default () => {
  const {t} = useTranslation('main')

  return (
    <div>
      <h2>{t('Главная страница')}</h2>
    </div>
  );
};
