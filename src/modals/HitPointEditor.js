import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import ButtonGroup from '../common/ButtonGroup';
import FlexButtons from '../common/FlexButtons';
import { getMaxHitPoints } from '../common/calc';


function normalize(value) {
  return Math.max(0, parseInt(value) || 0);
}

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
    marginVertical: 15,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formField: {
    width: 80,
    height: 32,
    marginEnd: 5,
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
      charHP: props.char.hp,
      tab: 'Damage',
      value: '',
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { charHP, tab, value } = this.state;
    const maxHP = getMaxHitPoints(char);
    const hp = charHP === undefined ? maxHP : charHP;

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
          Current Hit Points: <Text style={styles.value}>{hp === undefined ? maxHP : hp}</Text>
        </Text>

        {tab === 'Damage' && (
          <View style={[styles.form, styles.formRow]}>
            <TextInput
              style={styles.formField}
              value={`${value}`}
              keyboardType='numeric'
              onChangeText={text => this.setState({ value: text })}
              onEndEditing={() => this.setState({ value: normalize(value) })}
            />
            <Button
              title='Apply Damage'
              disabled={value === ''}
              onPress={() => this.setState({ charHP: hp - normalize(value), value: '' })}
            />
          </View>
        )}

        {tab === 'Heal' && (
          <View style={[styles.form, styles.formRow]}>
            <TextInput
              style={styles.formField}
              value={`${value}`}
              keyboardType='numeric'
              onChangeText={text => this.setState({ value: text })}
              onEndEditing={() => this.setState({ value: normalize(value) })}
            />
            <Button
              title='Heal'
              disabled={value === ''}
              onPress={() => this.setState({
                charHP: Math.min(maxHP, hp + normalize(value)),
                value: '',
              })}
            />
          </View>
        )}

        {tab === 'Reset' && (
          <View style={[styles.form, styles.formRow]}>
            <Button
              title='Reset to Max'
              onPress={() => this.setState({ charHP: undefined })}
            />
          </View>
        )}

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'OK', onPress: () => onAccept({ hp: charHP }) },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
