import React from 'react';
import { Pressable, StyleSheet, View, I18nManager } from 'react-native';
import { T, Modal } from '_atoms';
import RNRestart from 'react-native-restart';
import { useTranslation } from 'react-i18next';
import { Colors } from '_styles';

const LanguageModal = ({ visible, visibleFun }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      RNRestart.Restart();
    });
  };
  return (
    <Modal isVisible={visible} closing={visibleFun}>
      <View style={styles.box}>
        <T id="choose_language" />
        <View style={styles.choiceContainer}>
          <Pressable
            style={styles.buttons}
            onPress={() => handleLanguageChange('ar')}>
            <T title="Arabic" />
          </Pressable>
          <Pressable
            style={styles.buttons}
            onPress={() => handleLanguageChange('en')}>
            <T title="English" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 20,
  },
  choiceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    marginHorizontal: 10,
  },
});
