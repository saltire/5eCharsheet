import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { alignments } from './data/misc';


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default function AlignmentEditor({ alignment, onAccept }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alignment</Text>

      {Object.entries(rows).map(([key, cells]) => (
        <View key={key} style={styles.row}>
          {cells.map(value => (
            <TouchableOpacity key={value} activeOpacity={0.8} onPress={() => onAccept(value)}>
              <View style={styles.cell}>
                <Text style={value === alignment ? styles.selected : []}>{value}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}
