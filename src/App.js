import React, { Component } from 'react';

import AbilityEditor from './AbilityEditor';
import AlignmentEditor from './AlignmentEditor';
import ModalContainer from './ModalContainer';
import SkillEditor from './SkillEditor';
import Sheet from './Sheet';

import { abilities } from './common/data';


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
    this.updateChar = this.updateChar.bind(this);
    this.updateAndClose = this.updateAndClose.bind(this);
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
      <>
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
      </>
    );
  }
}
