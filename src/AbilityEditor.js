import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { mod } from './Ability';
import { abilities as names } from './data';


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontSize: 20,
    lineHeight: 30,
  },
  value: {
    width: 30,
    marginHorizontal: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
  moveButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  moveButtonText: {
    textAlign: 'center',
    lineHeight: 30,
  },
  disabled: {
    opacity: 0.25,
  },
  mod: {
    width: 30,
    marginStart: 15,
    fontSize: 20,
    textAlign: 'right',
    lineHeight: 30,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});

const scores = [15, 14, 13, 12, 10, 8];

export default class AbilityEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abilities: names.reduce((abs, name, i) => Object.assign(abs,
        { [name]: props.abilities[name] || scores[i] }), {}),
    };
  }

  switch(name1, name2) {
    this.setState(({ abilities }) => ({
      abilities: Object.assign({}, abilities, {
        [name1]: abilities[name2],
        [name2]: abilities[name1],
      }),
    }));
  }

  render() {
    const { onAccept, onCancel } = this.props;
    const { abilities } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Ability Scores</Text>

        {Object.entries(abilities).map(([name, score], i) => (
          <View key={name} style={styles.row}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity
              style={[styles.moveButton, i === 5 ? styles.disabled : {}]}
              disabled={i === 5}
              activeOpacity={0.8}
              onPress={() => this.switch(name, Object.keys(abilities)[i + 1])}
            >
              <Text style={styles.moveButtonText}>▼</Text>
            </TouchableOpacity>
            <Text style={styles.value}>{score}</Text>
            <TouchableOpacity
              style={[styles.moveButton, i === 0 ? styles.disabled : {}]}
              disabled={i === 0}
              activeOpacity={0.8}
              onPress={() => this.switch(name, Object.keys(abilities)[i - 1])}
            >
              <Text style={styles.moveButtonText}>▲</Text>
            </TouchableOpacity>

            <Text style={styles.mod}>{mod(score)}</Text>
          </View>
        ))}

        <View style={styles.bottomButtons}>
          <Button title='Accept' onPress={() => onAccept(abilities)} />
          <Button title='Cancel' onPress={onCancel} />
        </View>
      </View>
    );
  }
}
