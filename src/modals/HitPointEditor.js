import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonGroup from '../common/ButtonGroup';
import FlexButtons from '../common/FlexButtons';
import NumberInput, { normalize } from '../common/NumberInput';
import { getMaxHitPoints } from '../common/calc';


const styles = StyleSheet.create({
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  current: {
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  value: {
    fontWeight: 'bold',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 32,
    marginVertical: 15,
  },
  formField: {
    width: 80,
    height: 32,
    borderRadius: 3,
    backgroundColor: '#eee',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default class HitPointEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'Damage',
      value: '',
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { tab, value } = this.state;
    const maxHP = getMaxHitPoints(char);
    const hp = char.hp === undefined ? maxHP : char.hp;

    const acceptButtons = {
      Damage: {
        title: 'Apply Damage',
        disabled: !normalize(value),
        onPress: () => onAccept({ hp: hp - normalize(value) }),
      },
      Heal: {
        title: 'Heal',
        disabled: !normalize(value),
        onPress: () => {
          const healedHP = hp + normalize(value);
          onAccept({ hp: healedHP < maxHP ? healedHP : undefined });
        },
      },
      Reset: { title: 'Reset to Max', onPress: () => onAccept({ hp: undefined }) },
    };

    return (
      <>
        <View style={styles.flexButtons}>
          <ButtonGroup
            buttons={['Damage', 'Heal', 'Reset']
              .map(title => ({ title, onPress: () => this.setState({ tab: title }) }))}
            selected={tab}
          />
        </View>

        <Text style={styles.current}>
          <Text>Current Hit Points: </Text>
          <Text style={styles.value}>{hp}</Text>
          <Text> / </Text>
          <Text style={styles.value}>{maxHP}</Text>
        </Text>

        <View style={styles.form}>
          {tab !== 'Reset' && (
            <NumberInput
              style={styles.formField}
              value={value}
              onChange={newValue => this.setState({ value: newValue })}
            />
          )}
        </View>

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
