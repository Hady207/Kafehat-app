import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

const CustomInput = ({ placeholderId, placeholderTitle, ...props }) => {
  const { t } = useTranslation();
  return (
    <Input placeholder={t(placeholderId) || placeholderTitle} {...props} />
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
