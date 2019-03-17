import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { alignments } from '../common/data';


const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  selected: {
    fontWeight: 'bold',
  },
});

const rows = {
  g: alignments.filter(a => /Good$/.test(a)),
  n: alignments.filter(a => /Neutral$/.test(a)),
  e: alignments.filter(a => /Evil$/.test(a)),
};

export default function AlignmentEditor({ char, onAccept }) {
  const { alignment } = char;

  return (
    <>
      <View style={styles.grid}>
        {Object.entries(rows).map(([key, cells]) => (
          <View key={key} style={styles.row}>
            {cells.map(value => (
              <TouchableOpacity
                key={value}
                activeOpacity={0.8}
                onPress={() => onAccept({ alignment: value })}
              >
                <View style={styles.cell}>
                  <Text style={value === alignment ? styles.selected : []}>{value}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </>
  );
}
