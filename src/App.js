import React, { Component } from 'react';
import { AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

import AbilityEditor from './AbilityEditor';
import AlignmentEditor from './AlignmentEditor';
import ModalContainer from './ModalContainer';
import SkillEditor from './SkillEditor';
import Sheet from './Sheet';
import { FlexButtonContainer, FlexButton } from './common/flexButtons';

import { abilities } from './common/data';


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#333',
  },
  buttons: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      char: {
        name: '',
        level: 1,
        xp: 0,
        race: '',
        subrace: '',
        class: '',
        background: '',
        alignment: '',
        abilities: abilities.reduce((abs, name) => Object.assign(abs, { [name]: null }), {}),
        skills: [],
      },
      modal: null,
    };

    this.closeModal = this.closeModal.bind(this);
    this.loadCharacter = this.loadCharacter.bind(this);
    this.saveCharacter = this.saveCharacter.bind(this);
    this.updateChar = this.updateChar.bind(this);
    this.updateAndClose = this.updateAndClose.bind(this);
  }

  async loadCharacter() {
    try {
      const savedChar = await AsyncStorage.getItem('char');
      if (savedChar) {
        this.setState({ char: JSON.parse(savedChar) });
      }
    }
    catch (err) {
      console.error('Error loading character:', err);
    }
  }

  async saveCharacter() {
    const { char } = this.state;

    try {
      await AsyncStorage.setItem('char', JSON.stringify(char));
    }
    catch (err) {
      console.error('Error saving character:', err);
    }
  }

  updateChar(update) {
    this.setState(({ char }) => ({ char: Object.assign({}, char, update || {}) }));
  }

  closeModal() {
    this.setState({ modal: null });
  }

  updateAndClose(update) {
    this.setState(({ char }) => ({
      char: Object.assign({}, char, update || {}),
      modal: null,
    }));
  }

  render() {
    const { char, modal } = this.state;

    return (
      <View style={[styles.main, { paddingTop: StatusBar.currentHeight }]}>
        <View style={styles.buttons}>
          <FlexButtonContainer>
            <FlexButton title='Load' onPress={this.loadCharacter} />
            <FlexButton title='Save' onPress={this.saveCharacter} />
          </FlexButtonContainer>
        </View>

        <Sheet
          char={char}
          onUpdate={this.updateChar}
          openEditor={modalName => this.setState({ modal: modalName })}
        />

        <ModalContainer visible={modal === 'alignment'} close={this.closeModal}>
          <AlignmentEditor
            char={char}
            onAccept={this.updateAndClose}
          />
        </ModalContainer>

        <ModalContainer visible={modal === 'abilities'} close={this.closeModal}>
          <AbilityEditor
            char={char}
            onAccept={this.updateAndClose}
            onCancel={this.closeModal}
          />
        </ModalContainer>

        <ModalContainer visible={modal === 'skills'} close={this.closeModal}>
          <SkillEditor
            char={char}
            onAccept={this.updateAndClose}
            onCancel={this.closeModal}
          />
        </ModalContainer>
      </View>
    );
  }
}
