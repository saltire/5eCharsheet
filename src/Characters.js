import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import FlexButtons from './common/FlexButtons';


const styles = StyleSheet.create({
  empty: {
    marginVertical: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  line: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {
    flex: 1,
  },
  character: {
    marginVertical: 4,
    fontSize: 20,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    flex: 0,
    marginStart: 4,
  },
  buttonText: {
    width: 28,
    borderRadius: 3,
    backgroundColor: '#eee',
    lineHeight: 32,
    textAlign: 'center',
  },
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

function describe(char) {
  const desc = [char.race, char.class, char.level].filter(Boolean).join(' ');
  return desc && `, ${desc}`;
}

export default function Characters({ characters, onSelect, onDelete, onCancel }) {
  return (
    <>
      {!characters ? <Text style={styles.empty}>Loading characters...</Text> : (
        !characters.length ? <Text style={styles.empty}>No saved characters.</Text> : (
          <FlatList
            style={styles.scrollContainer}
            data={characters}
            keyExtractor={char => char.id}
            renderItem={({ item: char }) => (
              <View style={styles.line}>
                <TouchableOpacity
                  style={styles.text}
                  activeOpacity={0.8}
                  onPress={() => onSelect(char.id)}
                >
                  <Text style={styles.character}>
                    {char.name ? <Text style={styles.bold}>{char.name}</Text> : 'Unnamed'}
                    {describe(char)}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
                  onPress={() => onDelete(char.id)}
                >
                  <Text style={styles.buttonText}>
                    <MaterialIcons name='delete' size={16} />
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )
      )}

      <View style={styles.flexButtons}>
        <FlexButtons
          buttons={[
            { title: 'New Character', onPress: () => onSelect() },
            { title: 'Cancel', onPress: onCancel },
          ]}
        />
      </View>
    </>
  );
}
