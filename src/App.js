import React, { Component } from 'react';
import { AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

import AbilityEditor from './modals/AbilityEditor';
import AlignmentEditor from './modals/AlignmentEditor';
import FlexButtons from './common/FlexButtons';
import LanguageEditor from './modals/LanguageEditor';
import ModalContainer from './ModalContainer';
import SkillEditor from './modals/SkillEditor';
import Sheet from './Sheet';

import { blankChar } from './common/data';


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
      char: blankChar(),
      modal: null,
    };

    this.closeModal = this.closeModal.bind(this);
    this.clearCharacter = this.clearCharacter.bind(this);
    this.loadCharacter = this.loadCharacter.bind(this);
    this.saveCharacter = this.saveCharacter.bind(this);
    this.updateChar = this.updateChar.bind(this);
    this.updateAndClose = this.updateAndClose.bind(this);
  }

  componentDidMount() {
    this.loadCharacter();
  }

  clearCharacter() {
    this.setState({ char: blankChar() }, this.saveCharacter);
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
    this.setState(({ char }) => ({ char: Object.assign({}, char, update || {}) }),
      this.saveCharacter);
  }

  closeModal() {
    this.setState({ modal: null });
  }

  updateAndClose(update) {
    this.updateChar(update);
    this.closeModal();
  }

  render() {
    const { char, modal } = this.state;

    return (
      <View style={[styles.main, { paddingTop: StatusBar.currentHeight }]}>
        <View style={styles.buttons}>
          <FlexButtons
            buttons={[
              // { title: 'Load', onPress: this.loadCharacter },
              // { title: 'Save', onPress: this.saveCharacter },
              { title: 'Clear', onPress: this.clearCharacter },
            ]}
          />
        </View>

        <Sheet
          key={char.id}
          char={char}
          onUpdate={this.updateChar}
          openEditor={modalName => this.setState({ modal: modalName })}
        />

        <ModalContainer visible={modal === 'alignment'} title='Alignment' close={this.closeModal}>
          <AlignmentEditor
            char={char}
            onAccept={this.updateAndClose}
          />
        </ModalContainer>

        <ModalContainer visible={modal === 'abilities'} title='Ability Scores' close={this.closeModal}>
          <AbilityEditor
            char={char}
            onAccept={this.updateAndClose}
            onCancel={this.closeModal}
          />
        </ModalContainer>

        <ModalContainer visible={modal === 'languages'} title='Languages' close={this.closeModal}>
          <LanguageEditor
            char={char}
            onAccept={this.updateAndClose}
            onCancel={this.closeModal}
          />
        </ModalContainer>

        <ModalContainer visible={modal === 'skills'} title='Skills' close={this.closeModal}>
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
