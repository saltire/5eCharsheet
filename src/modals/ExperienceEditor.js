import React, { Component } from 'react';
import { Button, Slider, StyleSheet, Text, TextInput, View } from 'react-native';

import ButtonGroup from '../common/ButtonGroup';
import FlexButtons from '../common/FlexButtons';
import { xpLevels } from '../common/data';
import { commas } from '../common/utils';


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
    paddingTop: 20,
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
  slider: {
    height: 20,
    marginHorizontal: 20,
  },
});

export default class ExperienceEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xp: normalize(props.char.xp),
      tab: 'Add XP',
      addValue: '',
      setValue: '',
      setLevel: 1,
    };
  }

  setXP(value) {
    const xp = normalize(value);
    this.setState({ xp, addValue: '', setValue: '' });
  }

  render() {
    const { onAccept, onCancel } = this.props;
    const { xp, tab, addValue, setValue, setLevel } = this.state;

    return (
      <>
        <View style={styles.flexButtons}>
          <ButtonGroup
            buttons={['Add XP', 'Set XP', 'Set at Level']
              .map(title => ({ title, onPress: () => this.setState({ tab: title }) }))}
            selected={tab}
          />
        </View>

        <Text style={styles.current}>
          Current XP: <Text style={styles.value}>{commas(xp)}</Text>
        </Text>

        {tab === 'Add XP' && (
          <View style={[styles.form, styles.formRow]}>
            <TextInput
              style={styles.formField}
              value={`${addValue}`}
              keyboardType='numeric'
              onChangeText={text => this.setState({ addValue: text })}
              onEndEditing={() => this.setState({ addValue: normalize(addValue) })}
            />
            <Button
              title='Add'
              disabled={addValue === ''}
              onPress={() => this.setXP(xp + normalize(addValue))}
            />
          </View>
        )}

        {tab === 'Set XP' && (
          <View style={[styles.form, styles.formRow]}>
            <TextInput
              style={styles.formField}
              value={`${setValue}`}
              keyboardType='numeric'
              onChangeText={text => this.setState({ setValue: text })}
              onEndEditing={() => this.setState({ setValue: normalize(setValue) })}
            />
            <Button
              title='Set'
              disabled={setValue === ''}
              onPress={() => this.setXP(normalize(setValue))}
            />
          </View>
        )}

        {tab === 'Set at Level' && (
          <View style={styles.form}>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={20}
              minimumTrackTintColor='#c00'
              maximumTrackTintColor='#ddd'
              thumbTintColor='#c00'
              step={1}
              value={Number(setLevel)}
              onValueChange={val => this.setState({ setLevel: val })}
            />
            <View style={{ alignSelf: 'center' }}>
              <Button
                title={`Set at level ${setLevel}`}
                onPress={() => this.setXP(xpLevels[setLevel - 1])}
              />
            </View>
          </View>
        )}

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'OK', onPress: () => onAccept({ xp }) },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
