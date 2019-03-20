import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import FlexButtons from '../common/FlexButtons';
import { abilities as abilityNames } from '../common/data';
import { mod, roll, signed } from '../common/utils';


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
    this.setScores([...Array(6)].map(() => roll(4, 6, 3)));
  }

  useSimpleScores() {
    this.setScores([15, 14, 13, 12, 10, 8]);
  }

  render() {
    const { abilities, bonuses, styles } = this.props;
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
      </>
    );
  }
}
