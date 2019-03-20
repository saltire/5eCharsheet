import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AbilityEditorClassic from './AbilityEditorClassic';
import FlexButtons from '../common/FlexButtons';
import { getAbilityBonuses } from '../common/calc';


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

    const { char } = props;

    this.state = {
      abilities: Object.assign({}, char.abilities),
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { abilities } = this.state;

    const bonuses = getAbilityBonuses(char);

    return (
      <>
        <AbilityEditorClassic
          abilities={abilities}
          bonuses={bonuses}
          styles={styles}
          onChange={newAbilities => this.setState({ abilities: newAbilities })}
        />

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
