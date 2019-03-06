import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

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
  },
  rowText: {
    height: 40,
    fontSize: 20,
    lineHeight: 40,
  },
  expand: {
    flex: 1,
  },
  score: {
    width: 40,
    height: 30,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mod: {
    width: 30,
    marginStart: 15,
    textAlign: 'right',
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

        <View style={styles.row}>
          <View style={styles.expand}>
            {Object.keys(abilities).map(name => (
              <Text key={name} style={styles.rowText}>{name}</Text>
            ))}
          </View>

          <View>
            <DraggableFlatList
              data={Object.values(abilities)}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item, move, moveEnd }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPressIn={move}
                  onPressOut={moveEnd}
                >
                  <Text style={[styles.score, { opacity: item ? 1 : 0 }]}>{item}</Text>
                </TouchableOpacity>
              )}
              onMoveEnd={({ data }) => this.setState({
                abilities: Object.keys(abilities)
                  .reduce((a, name, i) => Object.assign(a, { [name]: data[i] }), {}),
              })}
            />
          </View>

          <View>
            {Object.entries(abilities).map(([name, score]) => (
              <Text key={name} style={[styles.rowText, styles.mod]}>{mod(score)}</Text>
            ))}
          </View>
        </View>

        <View style={styles.flexButtons}>
          <FlexButton title='Accept' onPress={() => onAccept(abilities)} />
          <FlexButton title='Cancel' onPress={onCancel} />
        </View>
      </View>
    );
  }
}
