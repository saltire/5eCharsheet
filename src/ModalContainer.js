import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
});

export default function ModalContainer({ visible, children, close }) {
  return (
    <Modal visible={visible} transparent animationType='fade' onRequestClose={close}>
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
}
