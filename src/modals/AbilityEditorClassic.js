import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import FlexButtons from '../common/FlexButtons';
import { abilities as abilityNames } from '../common/data';
import { mod, range, roll, signed } from '../common/utils';


export default class AbilityEditorClassic extends Component {
  constructor(props) {
    super(props);

    this.rollScores = this.rollScores.bind(this);
    this.useSimpleScores = this.useSimpleScores.bind(this);
  }

  setScores(scores) {
    const { onChange } = this.props;
    onChange(abilityNames.reduce((abs, name, i) => Object.assign(abs, { [name]: scores[i] }), {}));
  }

  rollScores() {
    this.setScores(range(6).map(() => roll(4, 6, 3)));
  }

  useSimpleScores() {
    this.setScores([15, 14, 13, 12, 10, 8]);
  }

  render() {
    const { abilities, bonuses, styles } = this.props;
    const complete = Object.values(abilities).every(Boolean);

    return (
      <>
        <View style={styles.topBar}>
          <FlexButtons
            buttons={[
              { title: 'Simple', onPress: this.useSimpleScores },
              { title: 'Roll', onPress: this.rollScores },
            ]}
          />
        </View>

        <View style={[styles.container, styles.columns]}>
          <View style={styles.expand}>
            {Object.keys(abilities).map(name => (
              <View key={name} style={styles.row}>
                <Text style={styles.rowText}>{name}</Text>
              </View>
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
                  <Text style={[styles.score, styles.scoreButton, { opacity: item ? 1 : 0 }]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              onMoveEnd={({ data }) => this.setScores(data)}
            />
          </View>

          <View>
            {Object.entries(abilities).map(([ability, score]) => (
              <View key={ability} style={styles.row}>
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
        </View>

        <Text style={[styles.help, { opacity: complete ? 1 : 0 }]}>
          Drag scores up or down to reassign them.
        </Text>
      </>
    );
  }
}
