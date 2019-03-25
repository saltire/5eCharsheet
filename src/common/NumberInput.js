import React from 'react';
import { TextInput } from 'react-native';


export function normalize(value) {
  return Math.max(0, parseInt(value) || 0);
}

export default function NumberInput({ value, onChange, ...props }) {
  return (
    <TextInput
      {...props}
      value={`${value}`}
      keyboardType='numeric'
      onChangeText={onChange}
      onEndEditing={() => onChange(normalize(value))}
    />
  );
}
