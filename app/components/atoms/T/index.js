import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

// <Text>{t('signin', { name: 'ahmad' })}</Text>
const T = ({ id, title, value, textStyle, ...props }) => {
  const { t, i18n } = useTranslation();
  return (
    <Text {...props} style={[textStyle]}>
      {title ?? t(id, { value })}
    </Text>
  );
};

export default T;
