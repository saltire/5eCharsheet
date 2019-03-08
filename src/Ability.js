import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { mod } from './utils';


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

export default function Ability({ label, score, racialMod }) {
  return (
    <View style={styles.ability}>
      <Text style={styles.abilityText}>{label.slice(0, 3).toUpperCase()}</Text>
      <Text style={[styles.abilityText, styles.largeText]}>
        {score ? score + (racialMod || 0) : '-'}
      </Text>
      <Text style={styles.abilityText}>{mod(score)}</Text>
    </View>
  );
}
