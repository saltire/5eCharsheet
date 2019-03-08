import React, { Component } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Ability from './Ability';
import AbilityEditor from './AbilityEditor';
import AlignmentEditor from './AlignmentEditor';
import Dropdown from './Dropdown';

import classes from './data/classes';
import races from './data/races';
import { backgrounds, abilities } from './data/misc';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: '#fff',
    lineHeight: 40,
  },
  text: {
    height: 40,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: '#fff',
    lineHeight: 40,
  },
  expand: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      char: {
        name: '',
        level: 1,
        race: '',
        subrace: '',
        class: '',
        background: '',
        alignment: '',
        abilities: abilities.reduce((abs, name) => Object.assign(abs, { [name]: null }), {}),
      },
      modal: null,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  getRacialAbilityMods() {
    const { char: { race, subrace } } = this.state;

    const raceData = races.find(r => r.label === race);
    const racialMods = Object.assign({}, (raceData && raceData.abilities) || {});
    const subraceData = raceData && (raceData.subraces || []).find(r => r.label === subrace);
    Object.entries((subraceData && subraceData.abilities) || {}).forEach(([ability, score]) => {
      racialMods[ability] = (racialMods[ability] || 0) + score;
    });

    return racialMods;
  }

  updateChar(prop, value) {
    this.setState(({ char }) => ({ char: Object.assign({}, char, { [prop]: value }) }));
  }

  closeModal() {
    this.setState({ modal: null });
  }

  render() {
    const { char, modal } = this.state;

    const race = races.find(r => r.label === char.race);
    const racialMods = this.getRacialAbilityMods();

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button
            title='Create your character'
            color='red'
            onPress={() => this.setState({ modal: 'basic' })}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            value={char.text}
            onChangeText={text => this.updateChar('name', text)}
          />

          <Text style={styles.text}>{char.level}</Text>
        </View>

        <View style={styles.row}>
          <Dropdown
            title='Race'
            values={races.map(r => r.label)}
            value={char.race}
            onUpdate={value => this.updateChar('race', value)}
          />

          <Dropdown
            title='Subrace'
            enabled={!!(race && race.subraces)}
            values={((race && race.subraces) || []).map(r => r.label)}
            value={char.subrace}
            onUpdate={value => this.updateChar('subrace', value)}
          />
        </View>

        <View style={styles.row}>
          <Dropdown
            title='Class'
            values={classes.map(c => c.label)}
            value={char.class}
            onUpdate={value => this.updateChar('class', value)}
          />
        </View>

        <View style={styles.row}>
          <Dropdown
            title='Background'
            values={backgrounds}
            value={char.background}
            onUpdate={value => this.updateChar('background', value)}
          />

          <TouchableOpacity
            style={styles.expand}
            activeOpacity={0.8}
            onPress={() => this.setState({ modal: 'alignment' })}
          >
            <Text style={styles.text}>{char.alignment || 'Alignment'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ modal: 'abilities' })}>
          <View style={styles.row}>
            {abilities.map(ability => (
              <Ability
                key={ability}
                label={ability}
                score={char.abilities[ability]}
                racialMod={racialMods[ability]}
              />
            ))}
          </View>
        </TouchableOpacity>

        <Modal
          visible={modal === 'alignment'}
          transparent
          animationType='fade'
          onRequestClose={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <AlignmentEditor
                alignment={char.alignment}
                onAccept={(value) => {
                  this.updateChar('alignment', value);
                  this.closeModal();
                }}
              />
            </View>
          </View>
        </Modal>

        <Modal
          visible={modal === 'abilities'}
          transparent
          animationType='fade'
          onRequestClose={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <AbilityEditor
              abilities={char.abilities}
              racialMods={racialMods}
              onAccept={(values) => {
                this.updateChar('abilities', values);
                this.closeModal();
              }}
              onCancel={this.closeModal}
            />
          </View>
        </Modal>
      </View>
    );
  }
}
