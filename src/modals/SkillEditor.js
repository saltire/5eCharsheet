import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import FlexButtons from '../common/FlexButtons';
import Toggle from '../common/Toggle';
import { getClass, getProficiencyBonus, getProficientSkills, getSkillChoices } from '../common/calc';
import { abilities, skills } from '../common/data';
import { mod, signed } from '../common/utils';


const styles = StyleSheet.create({
  container: {
    height: 600,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  abilityHeaderRow: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginBottom: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 1,
  },
  abilityHeader: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  abilityMod: {
    fontSize: 20,
    textAlign: 'right',
  },
  abilityFooter: {
    marginBottom: 15,
  },
  cell: {
    justifyContent: 'center',
  },
  expand: {
    flex: 1,
  },
  skillName: {
    fontSize: 20,
  },
  skillNumber: {
    width: 35,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  skillPlaceholder: {
    fontSize: 20,
    textAlign: 'right',
  },
  help: {
    marginVertical: 10,
    textAlign: 'center',
  },
  flexButtons: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

const sections = abilities
  .map(ability => ({
    title: ability,
    data: skills.filter(skill => skill.ability === ability),
  }))
  .filter(section => section.data.length);

export default class SkillEditor extends Component {
  constructor(props) {
    super(props);

    const { char } = props;
    const otherSkills = getProficientSkills(char);

    this.state = {
      chosenSkills: (char.skills || []).filter(skill => !otherSkills.includes(skill)),
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { chosenSkills } = this.state;

    const skillOptions = (getClass(char) || {}).skillOptions || [];
    const profBonus = getProficiencyBonus(char);
    const otherSkills = getProficientSkills(char);
    const skillChoices = getSkillChoices(char);
    const allSkills = chosenSkills.concat(otherSkills);
    const abilitiesComplete = Object.values(char.abilities).every(Boolean);
    const choicesRemaining = Math.max(0, skillChoices - chosenSkills.length);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Skills</Text>

        <SectionList
          style={styles.scrollContainer}
          sections={sections}
          renderSectionHeader={({ section: { title: ability } }) => (
            <View style={styles.abilityHeaderRow}>
              <Text style={styles.abilityHeader}>{ability}</Text>
              <Text style={styles.abilityMod}>{signed(mod(char.abilities[ability]))}</Text>
            </View>
          )}
          renderItem={({ item: skill }) => (
            <View key={skill.label} style={styles.row}>
              <View style={[styles.cell, styles.expand]}>
                <Text style={styles.skillName}>{skill.label}</Text>
              </View>

              {char.abilities[skill.ability] && (
                <View style={styles.cell}>
                  <Toggle
                    colorOn='#c00'
                    colorOff='#666'
                    trackColor='#ddd'
                    value={allSkills.includes(skill.label)}
                    disabled={otherSkills.includes(skill.label) ||
                      (!chosenSkills.includes(skill.label) &&
                        (!choicesRemaining || !skillOptions.includes(skill.label)))}
                    onChange={newValue => this.setState((prevState) => {
                      const newSkills = new Set(prevState.chosenSkills);
                      if (newValue) {
                        newSkills.add(skill.label);
                      }
                      else {
                        newSkills.delete(skill.label);
                      }
                      return { chosenSkills: Array.from(newSkills).sort() };
                    })}
                  />
                </View>
              )}

              <View style={styles.cell}>
                {char.abilities[skill.ability] ? (
                  <Text style={styles.skillNumber}>
                    {(mod(char.abilities[skill.ability]) || 0) +
                      (allSkills.includes(skill.label) ? profBonus : 0)}
                  </Text>
                ) : <Text style={styles.skillPlaceholder}>–</Text>}
              </View>
            </View>
          )}
          renderSectionFooter={() => <View style={styles.abilityFooter} />}
          keyExtractor={skill => skill.label}
        />

        <Text style={styles.help}>
          {abilitiesComplete ? `Choices remaining: ${choicesRemaining}` :
            'Complete your ability scores to calculate skills.'}
        </Text>

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'OK', onPress: () => onAccept({ skills: chosenSkills }) },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </View>
    );
  }
}