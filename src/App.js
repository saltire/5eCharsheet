import React, { Component } from 'react';

import AbilityEditor from './AbilityEditor';
import AlignmentEditor from './AlignmentEditor';
import ModalContainer from './ModalContainer';
import SkillEditor from './SkillEditor';
import Sheet from './Sheet';

import {
  getAbilityBonuses, getProficiencyBonus, getProficientSkills, getSkillChoices,
} from './common/calc';
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
  }

  updateChar(update) {
    this.setState(({ char }) => ({ char: Object.assign({}, char, update || {}) }));
  }

  closeModal() {
    this.setState({ modal: null });
  }

  render() {
    const { char, modal } = this.state;

    const abilityBonuses = getAbilityBonuses(char);
    const profBonus = getProficiencyBonus(char);
    const proficientSkills = getProficientSkills(char);
    const skillChoices = getSkillChoices(char);

    return (
      <>
        <Sheet
          char={char}
          onUpdate={this.updateChar}
          openEditor={modalName => this.setState({ modal: modalName })}
        />

        <ModalContainer visible={modal === 'alignment'} close={this.closeModal}>
          <AlignmentEditor
            alignment={char.alignment}
            onAccept={(value) => {
              this.updateChar({ alignment: value });
              this.closeModal();
            }}
          />
        </ModalContainer>

        <ModalContainer visible={modal === 'abilities'} close={this.closeModal}>
          <AbilityEditor
            abilities={char.abilities}
            bonuses={abilityBonuses}
            onAccept={(values) => {
              this.updateChar({ abilities: values });
              this.closeModal();
            }}
            onCancel={this.closeModal}
          />
        </ModalContainer>

        <ModalContainer visible={modal === 'skills'} close={this.closeModal}>
          <SkillEditor
            abilities={char.abilities}
            skillChoices={skillChoices}
            chosenSkills={char.skills}
            otherSkills={proficientSkills}
            profBonus={profBonus}
            onAccept={(values) => {
              this.updateChar({ skills: values });
              this.closeModal();
            }}
            onCancel={this.closeModal}
          />
        </ModalContainer>
      </>
    );
  }
}
