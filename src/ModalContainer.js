import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modal: {
    maxHeight: 600,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  header: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function ModalContainer({ visible, title, children, close }) {
  return (
    <Modal visible={visible} transparent animationType='fade' onRequestClose={close}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.header}>{title}</Text>

          {children}
        </View>
      </View>
    </Modal>
  );
}
