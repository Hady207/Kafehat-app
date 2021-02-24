import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

// <Text>{t('signin', { value: 'ahmad' })}</Text>
const T = ({ id, title, value, textStyle, color, size, ...props }) => {
  const { t } = useTranslation();
  return (
    <Text {...props} style={[{ color, fontSize: size }, textStyle]}>
      {title ?? t(id, { value })}
    </Text>
  );
};

export default T;
