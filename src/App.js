import React, { Component } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Ability from './Ability';
import Dropdown from './Dropdown';
import { races, classes, backgrounds, alignments, abilities } from './data';


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
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      char: {
        name: '',
        level: 1,
        race: '',
        class: '',
        background: '',
        alignment: '',
        abilities: abilities.reduce((abs, ab) => Object.assign(abs, { [ab]: null }), {}),
      },
      modal: null,
    };
  }

  updateChar(prop, value) {
    this.setState(({ char }) => ({ char: Object.assign({}, char, { [prop]: value }) }));
  }

  render() {
    const { char, modal } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button
            title='Create your character'
            color='red'
            onPress={() => this.setState({ modal: 'basic' })}
          >
            Create your character
          </Button>
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
            values={races}
            value={char.race}
            onUpdate={value => this.updateChar('race', value)}
          />

          <Dropdown
            title='Class'
            values={classes}
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

          <Dropdown
            title='Alignment'
            values={alignments}
            value={char.alignment}
            onUpdate={value => this.updateChar('alignment', value)}
          />
        </View>

        <TouchableOpacity onPress={() => this.setState({ modal: 'abilities' })}>
          <View style={styles.row}>
            {abilities.map(ability => (
              <Ability
                key={ability}
                label={ability}
                score={char.abilities[ability]}
              />
            ))}
          </View>
        </TouchableOpacity>

        <Modal
          visible={!!modal}
          transparent
          animationType='fade'
          onRequestClose={() => this.setState({ modal: null })}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', margin: 50 }}>
            <View style={{ backgroundColor: 'yellow' }}>
              <Text>Modal</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
