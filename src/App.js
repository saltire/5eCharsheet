import React, { Component } from 'react';
import { AsyncStorage, Modal, StatusBar, StyleSheet, Text, View } from 'react-native';

import AbilityEditor from './modals/AbilityEditor';
import AlignmentEditor from './modals/AlignmentEditor';
import ExperienceEditor from './modals/ExperienceEditor';
import FlexButtons from './common/FlexButtons';
import HitPointEditor from './modals/HitPointEditor';
import LanguageEditor from './modals/LanguageEditor';
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modal: {
    maxHeight: 600,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  narrowModal: {
    alignSelf: 'center',
  },
  modalHeader: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const modals = {
  abilities: {
    title: 'Ability Scores',
    component: AbilityEditor,
  },
  alignment: {
    title: 'Alignment',
    component: AlignmentEditor,
    narrow: true,
  },
  hp: {
    title: 'Hit Points',
    component: HitPointEditor,
  },
  languages: {
    title: 'Languages',
    component: LanguageEditor,
  },
  skills: {
    title: 'Skills',
    component: SkillEditor,
  },
  xp: {
    title: 'Experience',
    component: ExperienceEditor,
  },
};

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

        {Object.entries(modals).map(([id, { title, component: ModalComponent, narrow }]) => (
          <Modal
            key={id}
            visible={modal === id}
            transparent
            animationType='fade'
            onRequestClose={this.closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={[styles.modal, !!narrow && styles.narrowModal]}>
                <Text style={styles.modalHeader}>{title}</Text>

                <ModalComponent
                  char={char}
                  onAccept={this.updateAndClose}
                  onCancel={this.closeModal}
                />
              </View>
            </View>
          </Modal>
        ))}
      </View>
    );
  }
}
