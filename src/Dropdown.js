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
  disabled: {
    opacity: 0.8,
  },
});

export default function Dropdown({ title, values, value, enabled, onUpdate }) {
  return (
    <Picker
      style={[styles.select, enabled === false ? styles.disabled : {}]}
      enabled={enabled}
      selectedValue={value}
      onValueChange={newVal => (newVal && onUpdate(newVal))}
    >
      <Picker.Item label={title} value='' color='#999' />
      {values.map(val => <Picker.Item key={val} label={val} value={val} />)}
    </Picker>
  );
}
