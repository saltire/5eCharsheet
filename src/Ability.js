import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  ability: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  abilityText: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  largeText: {
    fontSize: 30,
  },
});

export function mod(score) {
  const modVal = score ? Math.floor(score / 2) - 5 : '';
  const sign = score ? (modVal > 0 ? '+' : (modVal < 0 ? '-' : '')) : '';

  return `${sign}${modVal}`;
}

export default function Ability({ label, score }) {
  return (
    <View style={styles.ability}>
      <Text style={styles.abilityText}>{label.slice(0, 3).toUpperCase()}</Text>
      <Text style={[styles.abilityText, styles.largeText]}>{score || '-'}</Text>
      <Text style={styles.abilityText}>{mod(score)}</Text>
    </View>
  );
}
