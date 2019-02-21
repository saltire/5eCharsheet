import React from 'react';
import { Picker, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  select: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: '#fff',
  },
});

export default function Dropdown({ title, values, value, onUpdate }) {
  return (
    <Picker
      style={styles.select}
      selectedValue={value}
      onValueChange={newVal => (newVal && onUpdate(newVal))}
    >
      <Picker.Item label={title} value='' color='#999' />
      {values.map(val => <Picker.Item key={val} label={val} value={val} />)}
    </Picker>
  );
}
