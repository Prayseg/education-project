import React from 'react';
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation('about')
  return (
    <div>
      <h2>{t('О нас')}</h2>
    </div>
  );
};
