import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Ability({ label, score, onPress }) {
  const mod = score && Math.floor(score / 2) - 5;
  const sign = score && (mod > 0 ? '+' : (mod < 0 ? '-' : ''));

  return (
    <TouchableOpacity style={styles.ability} onPress={onPress}>
      <View>
        <Text style={styles.abilityText}>{label.slice(0, 3).toUpperCase()}</Text>
        <Text style={[styles.abilityText, styles.largeText]}>{score}</Text>
        <Text style={styles.abilityText}>{sign}{mod}</Text>
      </View>
    </TouchableOpacity>
  );
}

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
