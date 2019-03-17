import React from 'react';
import { Switch } from 'react-native';


export default function Toggle({ value, disabled, colorOn, colorOff, trackColor, onChange }) {
  return (
    <Switch
      style={{ opacity: disabled ? 0.35 : 1 }}
      trackColor={{ false: trackColor, true: trackColor }}
      thumbColor={value ? colorOn : colorOff}
      value={value}
      disabled={disabled}
      onValueChange={onChange}
    />
  );
}
