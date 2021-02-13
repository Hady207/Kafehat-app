import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({ children, closing, ...props }) => {
  return (
    <Modal
      backdropOpacity={0.5}
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionOutTiming={0}
      swipeDirection={['down', 'left', 'right', 'up']}
      onSwipeComplete={closing}
      onBackdropPress={closing}
      onBackButtonPress={closing}
      {...props}>
      {children}
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
