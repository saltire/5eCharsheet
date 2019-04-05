import React, { Component } from 'react';
import { AsyncStorage, Modal, StatusBar, StyleSheet, Text, View } from 'react-native';

import AbilityEditor from './modals/AbilityEditor';
import AlignmentEditor from './modals/AlignmentEditor';
import Characters from './Characters';
import EquipmentEditor from './modals/EquipmentEditor';
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
  equipment: {
    title: 'Equipment',
    component: EquipmentEditor,
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
      characters: null,
      charId: null,
      modal: null,
    };

    this.selectCharacter = this.selectCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateAndClose = this.updateAndClose.bind(this);
  }

  componentDidMount() {
    this.loadCharacters();
  }

  async loadCharacters() {
    try {
      const [[, characters], [, charId]] = await AsyncStorage.multiGet(['characters', 'charId']);
      this.setState({
        characters: characters ? JSON.parse(characters) : {},
        charId,
      });
    }
    catch (err) {
      console.error('Error loading characters:', err);
    }
  }

  async selectCharacter(charId) {
    let newCharId;
    if (charId) {
      newCharId = charId;
    }
    else {
      const newChar = blankChar();
      newCharId = newChar.id;
      await this.updateCharacter(newChar.id, newChar);
    }

    this.setState({ charId: newCharId }, async () => {
      try {
        await AsyncStorage.setItem('charId', newCharId);
      }
      catch (err) {
        console.error('Error selecting character:', err);
      }
    });
    this.closeModal();
  }

  deleteCharacter(charId) {
    if (charId) {
      this.setState(
        ({ characters, charId: currentCharId }) => {
          const newCharacters = Object.assign({}, characters);
          delete newCharacters[charId];
          return {
            characters: newCharacters,
            charId: currentCharId === charId ? null : currentCharId,
          };
        },
        async () => {
          const { characters, charId: currentCharId } = this.state;

          try {
            await AsyncStorage.multiSet(
              [['characters', JSON.stringify(characters)], ['charId', currentCharId]]);
          }
          catch (err) {
            console.error('Error deleting character:', err);
          }
        });
    }
  }

  updateCharacter(charId, update) {
    if (charId) {
      this.setState(
        ({ characters }) => {
          const newCharacters = Object.assign({}, characters || {}, {
            [charId]: Object.assign({}, characters[charId] || {}, update || {}),
          });
          return { characters: newCharacters };
        },
        async () => {
          const { characters } = this.state;

          try {
            await AsyncStorage.setItem('characters', JSON.stringify(characters));
          }
          catch (err) {
            console.error('Error updating character:', err);
          }
        });
    }
  }

  closeModal() {
    this.setState({ modal: null });
  }

  updateAndClose(update) {
    const { charId } = this.state;

    this.updateCharacter(charId, update);
    this.closeModal();
  }

  render() {
    const { characters, charId, modal } = this.state;
    const char = characters && characters[charId];

    return (
      <View style={[styles.main, { paddingTop: StatusBar.currentHeight }]}>
        <View style={styles.buttons}>
          <FlexButtons
            buttons={[
              { title: 'Characters', onPress: () => this.setState({ modal: 'characters' }) },
            ]}
          />
        </View>

        <Modal
          visible={modal === 'characters'}
          transparent
          animationType='fade'
          onRequestClose={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modal]}>
              <Text style={styles.modalHeader}>Choose Character</Text>
              <Characters
                characters={characters && Object.values(characters)}
                onSelect={this.selectCharacter}
                onDelete={this.deleteCharacter}
                onCancel={this.closeModal}
              />
            </View>
          </View>
        </Modal>

        {char && (
          <>
            <Sheet
              key={char.id}
              char={char}
              onUpdate={update => this.updateCharacter(charId, update)}
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
          </>
        )}
      </View>
    );
  }
}
