import React from 'react';
import { Button, Text, View } from 'react-native';

import { mod, signed } from '../common/utils';


export default function AbilityEditorPointBuy({ abilities, bonuses, points, styles, onChange }) {
  return (
    <>
      <View style={styles.topBar} />

      <View style={styles.container}>
        {Object.entries(abilities).map(([ability, score]) => (
          <View key={ability} style={styles.row}>
            <Text style={[styles.rowText, styles.expand]}>{ability}</Text>

            <View style={styles.adjustButton}>
              <Button
                title='◀'
                disabled={score <= 8}
                onPress={() => onChange({ ...abilities, [ability]: score - 1 })}
              />
            </View>

            <Text style={styles.score}>{score}</Text>

            <View style={styles.adjustButton}>
              <Button
                title='▶'
                disabled={score >= 15 || points < 1 || (score >= 13 && points < 2)}
                onPress={() => onChange({ ...abilities, [ability]: score + 1 })}
              />
            </View>

            <Text style={[styles.rowText, styles.mod]}>
              {signed(bonuses[ability])}
            </Text>

            <Text style={[styles.score, styles.bold]}>
              {score && (score + (bonuses[ability] || 0))}
            </Text>

            <Text style={[styles.rowText, styles.mod, styles.bold]}>
              {score ? signed(mod(score + (bonuses[ability] || 0))) : '–'}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.help}>Points remaining: {points}</Text>
    </>
  );
}
