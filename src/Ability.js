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

export default function Ability({ label, score }) {
  const mod = score && Math.floor(score / 2) - 5;
  const sign = score && (mod > 0 ? '+' : (mod < 0 ? '-' : ''));

  return (
    <View style={styles.ability}>
      <Text style={styles.abilityText}>{label.slice(0, 3).toUpperCase()}</Text>
      <Text style={[styles.abilityText, styles.largeText]}>{score || '-'}</Text>
      <Text style={styles.abilityText}>{sign}{mod}</Text>
    </View>
  );
}
