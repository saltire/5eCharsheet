import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import FlexButtons from '../common/FlexButtons';
import { getAbilityBonuses } from '../common/calc';
import { abilities as abilityNames } from '../common/data';
import { mod, roll, signed } from '../common/utils';


const styles = StyleSheet.create({
  columns: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  rowText: {
    height: 30,
    marginVertical: 5,
    fontSize: 20,
    lineHeight: 36,
  },
  expand: {
    flex: 1,
  },
  scoreButton: {
    width: 40,
    height: 30,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
    fontSize: 25,
    textAlign: 'center',
  },
  score: {
    width: 40,
    height: 30,
    marginStart: 15,
    marginVertical: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mod: {
    width: 35,
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'bold',
  },
  help: {
    textAlign: 'center',
  },
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default class AbilityEditor extends Component {
  constructor(props) {
    super(props);

    const { char: { abilities } } = props;

    this.state = {
      abilities: Object.assign({}, abilities),
    };

    this.rollScores = this.rollScores.bind(this);
    this.useSimpleScores = this.useSimpleScores.bind(this);
  }

  setScores(scores) {
    this.setState({
      abilities: abilityNames
        .reduce((abs, name, i) => Object.assign(abs, { [name]: scores[i] }), {}),
    });
  }

  rollScores() {
    this.setScores([...Array(6)].map(() => roll(4, 6, 3)));
  }

  useSimpleScores() {
    this.setScores([15, 14, 13, 12, 10, 8]);
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { abilities } = this.state;

    const bonuses = getAbilityBonuses(char);
    const complete = Object.values(abilities).every(Boolean);

    return (
      <>
        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'Simple', onPress: this.useSimpleScores },
              { title: 'Roll', onPress: this.rollScores },
            ]}
          />
        </View>

        <View style={styles.columns}>
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
                  <Text style={[styles.scoreButton, { opacity: item ? 1 : 0 }]}>{item}</Text>
                </TouchableOpacity>
              )}
              onMoveEnd={({ data }) => this.setScores(data)}
            />
          </View>

          <View>
            {Object.keys(abilities).map(ability => (
              <Text key={ability} style={[styles.rowText, styles.mod]}>
                {signed(bonuses[ability])}
              </Text>
            ))}
          </View>

          <View>
            {Object.entries(abilities).map(([ability, score]) => (
              <Text key={ability} style={styles.score}>
                {score && (score + (bonuses[ability] || 0))}
              </Text>
            ))}
          </View>

          <View>
            {Object.entries(abilities).map(([ability, score]) => (
              <Text key={ability} style={[styles.rowText, styles.mod, styles.bold]}>
                {score ? signed(mod(score + (bonuses[ability] || 0))) : '–'}
              </Text>
            ))}
          </View>
        </View>

        <Text style={[styles.help, { opacity: complete ? 1 : 0 }]}>
          Drag scores up or down to reassign them.
        </Text>

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'OK', onPress: () => onAccept({ abilities }) },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
