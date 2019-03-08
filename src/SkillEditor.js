import React from 'react';
import { SectionList, StyleSheet, Switch, Text, View } from 'react-native';

import { abilities as abilityNames, skills as skillData } from './data/misc';
import { mod } from './utils';


const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  abilityHeaderRow: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 8,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  cell: {
    justifyContent: 'center',
  },
  expand: {
    flex: 1,
  },
  skillName: {
    fontSize: 16,
  },
  skillNumber: {
    width: 30,
    fontSize: 16,
    textAlign: 'right',
  },
});

const sections = abilityNames
  .map(ability => ({
    title: ability,
    data: skillData.filter(skill => skill.ability === ability),
  }))
  .filter(section => section.data.length);

export default function SkillEditor({ abilities, proficientSkills, profBonus }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skills</Text>

      <SectionList
        style={styles.scrollContainer}
        sections={sections}
        renderSectionHeader={({ section: { title: ability } }) => (
          <View style={styles.abilityHeaderRow}>
            <Text style={styles.abilityHeader}>{ability}</Text>
            <Text style={styles.skillNumber}>{mod(abilities[ability]) || 0}</Text>
          </View>
        )}
        renderItem={({ item: skill }) => (
          <View key={skill.label} style={styles.row}>
            <View style={[styles.cell, styles.expand]}>
              <Text style={styles.skillName}>{skill.label}</Text>
            </View>
            <View style={styles.cell}>
              <Switch value={proficientSkills.includes(skill.label)} />
            </View>
            <View style={styles.cell}>
              <Text style={styles.skillNumber}>
                {(mod(abilities[skill.ability]) || 0) +
                  (proficientSkills.includes(skill.label) ? profBonus : 0)}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.label}
      />
    </View>
  );
}
