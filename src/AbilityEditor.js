import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { abilities as names } from './data';
import { mod, roll } from './utils';


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
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
  flexButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -5,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});

const FlexButton = ({ ...props }) => (
  <View style={styles.buttonContainer}>
    <Button {...props} />
  </View>
);

export default class AbilityEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abilities: props.abilities,
    };

    this.setSimpleScores = this.setSimpleScores.bind(this);
    this.rollScores = this.rollScores.bind(this);
  }

  setSimpleScores() {
    this.resetScores([15, 14, 13, 12, 10, 8]);
  }

  rollScores() {
    this.resetScores([...Array(6)].map(() => roll(4, 6, 3)));
  }

  resetScores(scores) {
    this.setState({
      abilities: names.reduce((abs, name, i) => Object.assign(abs, { [name]: scores[i] }), {}),
    });
  }

  move(name1, name2) {
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

        <View style={styles.flexButtons}>
          <FlexButton title='Simple' onPress={this.setSimpleScores} />
          <FlexButton title='Roll' onPress={this.rollScores} />
        </View>

        {Object.entries(abilities).map(([name, score], i) => (
          <View key={name} style={styles.row}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity
              style={[styles.moveButton, (i === 5 || !score) ? styles.disabled : {}]}
              disabled={i === 5 || !score}
              activeOpacity={0.8}
              onPress={() => this.move(name, Object.keys(abilities)[i + 1])}
            >
              <Text style={styles.moveButtonText}>▼</Text>
            </TouchableOpacity>
            <Text style={styles.value}>{score}</Text>
            <TouchableOpacity
              style={[styles.moveButton, (i === 0 || !score) ? styles.disabled : {}]}
              disabled={i === 0 || !score}
              activeOpacity={0.8}
              onPress={() => this.move(name, Object.keys(abilities)[i - 1])}
            >
              <Text style={styles.moveButtonText}>▲</Text>
            </TouchableOpacity>

            <Text style={styles.mod}>{mod(score)}</Text>
          </View>
        ))}

        <View style={styles.flexButtons}>
          <FlexButton title='Accept' onPress={() => onAccept(abilities)} />
          <FlexButton title='Cancel' onPress={onCancel} />
        </View>
      </View>
    );
  }
}
