import React, { Component } from 'react';
import { Slider, StyleSheet, Text, View } from 'react-native';

import ButtonGroup from '../common/ButtonGroup';
import FlexButtons from '../common/FlexButtons';
import NumberInput, { normalize } from '../common/NumberInput';
import { xpLevels } from '../common/data';
import { commas } from '../common/utils';


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
    marginVertical: 15,
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
    flex: 1,
    height: 32,
    marginHorizontal: 20,
  },
});

export default class ExperienceEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'Add XP',
      value: '',
      level: 1,
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { tab, value, level } = this.state;

    const acceptButtons = {
      'Add XP': {
        title: 'Add',
        disabled: !normalize(value),
        onPress: () => onAccept({ xp: char.xp + normalize(value) }),
      },
      'Set XP': {
        title: 'Set',
        disabled: !normalize(value),
        onPress: () => onAccept({ xp: normalize(value) }),
      },
      'Set at Level': {
        title: `Set at Level ${level}`,
        onPress: () => onAccept({ xp: xpLevels[level - 1] }),
      },
    };

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
          Current XP: <Text style={styles.value}>{commas(char.xp)}</Text>
        </Text>

        <View style={styles.form}>
          {tab !== 'Set at Level' ? (
            <NumberInput
              style={styles.formField}
              value={value}
              onChange={newValue => this.setState({ value: newValue })}
            />
          ) : (
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={20}
              minimumTrackTintColor='#c00'
              maximumTrackTintColor='#ddd'
              thumbTintColor='#c00'
              step={1}
              value={Number(level)}
              onValueChange={val => this.setState({ level: val })}
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
