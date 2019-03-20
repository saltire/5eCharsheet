import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AbilityEditorClassic from './AbilityEditorClassic';
import AbilityEditorPointBuy from './AbilityEditorPointBuy';
import ButtonGroup from '../common/ButtonGroup';
import FlexButtons from '../common/FlexButtons';
import { abilities as abilityNames } from '../common/data';
import { getAbilityBonuses } from '../common/calc';
import { sum } from '../common/utils';


function getPointsRemaining(abilities) {
  const cost = [0, 1, 2, 3, 4, 5, 7, 9];
  return 27 - sum(...Object.values(abilities)
    .map(score => cost[Math.max(0, score ? score - 8 : 0)]));
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  columns: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    height: 32,
    marginVertical: 5,
  },
  rowText: {
    height: 32,
    marginHorizontal: 5,
    fontSize: 20,
    lineHeight: 36,
  },
  expand: {
    flex: 1,
  },
  score: {
    width: 40,
    height: 32,
    fontSize: 25,
    textAlign: 'center',
  },
  scoreButton: {
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  adjustButton: {
    width: 32,
  },
  mod: {
    width: 30,
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
  topBar: {
    height: 32,
    marginHorizontal: 20,
  },
});

export default class AbilityEditor extends Component {
  constructor(props) {
    super(props);

    const { char } = props;

    this.state = {
      tab: 'Classic',
      classicAbilities: Object.assign({}, char.abilities),
      buyAbilities: abilityNames.reduce((abs, name) => Object.assign(abs, { [name]: 8 }), {}),
      points: 27,
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { tab, classicAbilities, buyAbilities, points } = this.state;

    const bonuses = getAbilityBonuses(char);

    const acceptButtons = {
      Classic: { title: 'OK', onPress: () => onAccept({ abilities: classicAbilities }) },
      'Point Buy': {
        title: 'OK',
        disabled: points > 0,
        onPress: () => onAccept({ abilities: buyAbilities }),
      },
    };

    return (
      <>
        <View style={styles.flexButtons}>
          <ButtonGroup
            buttons={['Classic', 'Point Buy']
              .map(title => ({ title, onPress: () => this.setState({ tab: title }) }))}
            selected={tab}
          />
        </View>

        {tab === 'Classic' && (
          <AbilityEditorClassic
            abilities={classicAbilities}
            bonuses={bonuses}
            styles={styles}
            onChange={newAbilities => this.setState({ classicAbilities: newAbilities })}
          />
        )}

        {tab === 'Point Buy' && (
          <AbilityEditorPointBuy
            abilities={buyAbilities}
            bonuses={bonuses}
            points={points}
            styles={styles}
            onChange={newAbilities => this.setState({
              buyAbilities: newAbilities,
              points: getPointsRemaining(newAbilities),
            })}
          />
        )}

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              acceptButtons[tab],
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
