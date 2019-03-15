import React from 'react';
import { ProgressBarAndroid, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import Ability from './Ability';
import Dropdown from './Dropdown';
import NumberInput from './NumberInput';
import { HeaderBox, TouchableHeaderBox, TextBox, TouchableTextBox } from './common/textBoxes';

import {
  getRace, getClass, getAbilityBonuses, getHitPoints, getLanguages, getLevelProgress,
  getProficientSkills, getProficiencyBonus, getSpeed,
} from './common/calc';
import { abilities, backgrounds, classes, races } from './common/data';
import { mod } from './common/utils';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
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
    fontSize: 16,
    lineHeight: 40,
  },
});

export default function Sheet({ char, onUpdate, openEditor }) {
  const race = getRace(char);
  const clss = getClass(char);
  const abilityBonuses = getAbilityBonuses(char);
  const hp = getHitPoints(char);
  const levelProgress = getLevelProgress(char);
  const proficiency = getProficiencyBonus(char);
  const allSkills = (char.skills || []).concat(getProficientSkills(char));
  const allLanguages = (char.languages || []).concat(getLanguages(char));
  const speed = getSpeed(char, race);

  return (
    <View style={styles.container}>
      <ProgressBarAndroid styleAttr='Horizontal' indeterminate={false} progress={levelProgress} />

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#999'
          value={char.name}
          onChangeText={text => onUpdate({ name: text })}
        />

        <NumberInput
          style={styles.input}
          placeholder='XP'
          placeholderTextColor='#999'
          value={char.xp}
          onChange={value => onUpdate({ xp: value })}
        />

        <TextBox>{char.level}</TextBox>
      </View>

      <View style={styles.row}>
        <Dropdown
          title='Race'
          values={races.map(r => r.label)}
          value={char.race}
          onChange={value => onUpdate({ race: value })}
        />

        {!!(race && race.subraces) && (
          <Dropdown
            title={race.subraceLabel || 'Subrace'}
            values={((race && race.subraces) || []).map(r => r.label)}
            value={char.subrace}
            onChange={value => onUpdate({ subrace: value })}
          />
        )}
      </View>

      <View style={styles.row}>
        <Dropdown
          title='Class'
          values={classes.map(c => c.label)}
          value={char.class}
          onChange={value => onUpdate({ class: value })}
        />
      </View>

      <View style={styles.row}>
        <Dropdown
          title='Background'
          values={backgrounds}
          value={char.background}
          onChange={value => onUpdate({ background: value })}
        />

        <TouchableTextBox
          placeholder='Alignment'
          onPress={() => openEditor('alignment')}
        >
          {char.alignment}
        </TouchableTextBox>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={() => openEditor('abilities')}>
        <View style={styles.row}>
          {abilities.map(ability => (
            <Ability
              key={ability}
              label={ability}
              score={char.abilities[ability]}
              abilityMod={abilityBonuses[ability]}
            />
          ))}
        </View>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableHeaderBox
          header='Inspiration'
          onPress={() => onUpdate({ inspiration: !char.inspiration })}
        >
          {char.inspiration ? '✹' : ' '}
        </TouchableHeaderBox>

        <HeaderBox header='Proficiency'>{proficiency}</HeaderBox>

        <HeaderBox header='Initiative'>
          {mod(char.abilities.Dexterity) || '–'}
        </HeaderBox>

        <HeaderBox header='Speed'>{speed || '–'}</HeaderBox>
      </View>

      <View style={styles.row}>
        <HeaderBox header='Hit Dice'>{clss && `${char.level}d${clss.hitDie}`}</HeaderBox>
        <HeaderBox header='Hit Points'>{hp}</HeaderBox>
      </View>

      <View style={styles.row}>
        <TouchableTextBox
          placeholder='Skills'
          onPress={() => openEditor('skills')}
        >
          {allSkills.sort().join(', ')}
        </TouchableTextBox>
      </View>

      <View style={styles.row}>
        <TouchableTextBox
          placeholder='Languages'
          onPress={() => openEditor('languages')}
        >
          {allLanguages.sort().join(', ')}
        </TouchableTextBox>
      </View>
    </View>
  );
}