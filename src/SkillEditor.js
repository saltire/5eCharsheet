import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { abilities as abilityNames, skills as skillData } from './data/misc';


const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  abilityHeader: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  skillRow: {
    flexDirection: 'row',
  },
  skillName: {
    flex: 1,
  },
  skillNumber: {
    width: 30,
  },
});

const groups = abilityNames
  .map(ability => ({
    ability,
    skills: skillData.filter(skill => skill.ability === ability),
  }))
  .filter(group => group.skills.length);

export default function SkillEditor({ abilities, proficientSkills, profBonus }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skills</Text>

      {groups.map(group => (
        <View key={group.ability}>
          <View><Text style={styles.abilityHeader}>{group.ability}</Text></View>

          {group.skills.map(skill => (
            <View key={skill.label} style={styles.skillRow}>
              <Text style={styles.skillName}>{skill.label}</Text>
              <Text style={styles.skillNumber}>{abilities[skill.ability]}</Text>
              <Text style={styles.skillNumber}>
                {proficientSkills.includes(skill.label) && '✓'}
              </Text>
              <Text style={styles.skillNumber}>
                {(abilities[skill.label] || 0) +
                  (proficientSkills.includes(skill.label) ? profBonus : 0)}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
