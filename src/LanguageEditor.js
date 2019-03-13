import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Toggle from './Toggle';
import { FlexButtonContainer, FlexButton } from './common/flexButtons';
import { getLanguages, getLanguageChoices } from './common/calc';
import { languages } from './common/data';


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
  row: {
    flexDirection: 'row',
    marginVertical: 1,
  },
  cell: {
    justifyContent: 'center',
  },
  expand: {
    flex: 1,
  },
  languageName: {
    fontSize: 20,
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

export default class SkillEditor extends Component {
  constructor(props) {
    super(props);

    const { char } = props;
    const otherLanguages = getLanguages(char);

    this.state = {
      chosenLanguages: (char.languages || []).filter(lang => !otherLanguages.includes(lang)),
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { chosenLanguages } = this.state;

    const otherLanguages = getLanguages(char);
    const languageChoices = getLanguageChoices(char);
    const allLanguages = chosenLanguages.concat(otherLanguages);
    const choicesRemaining = Math.max(0, languageChoices - chosenLanguages.length);

    console.log({ chosenLanguages, otherLanguages, allLanguages, choicesRemaining });

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Languages</Text>

        <FlatList
          style={styles.scrollContainer}
          data={languages
            .map(language => ({ label: language, value: allLanguages.includes(language) }))}
          renderItem={({ item: language }) => (
            <View style={styles.row}>
              <View style={[styles.cell, styles.expand]}>
                <Text style={styles.languageName}>{language.label}</Text>
              </View>

              <View style={styles.cell}>
                <Toggle
                  colorOn='#c00'
                  colorOff='#666'
                  trackColor='#ddd'
                  value={language.value}
                  disabled={otherLanguages.includes(language.label) ||
                    (!chosenLanguages.includes(language.label) && !choicesRemaining)}
                  onChange={newValue => this.setState((prevState) => {
                    const newLanguages = new Set(prevState.chosenLanguages);
                    if (newValue) {
                      newLanguages.add(language.label);
                    }
                    else {
                      newLanguages.delete(language.label);
                    }
                    return { chosenLanguages: Array.from(newLanguages).sort() };
                  })}
                />
              </View>
            </View>
          )}
          keyExtractor={language => language.label}
        />

        <Text style={styles.help}>Choices remaining: {choicesRemaining}</Text>

        <View style={styles.flexButtons}>
          <FlexButtonContainer>
            <FlexButton title='OK' onPress={() => onAccept({ languages: chosenLanguages })} />
            <FlexButton title='Cancel' onPress={onCancel} />
          </FlexButtonContainer>
        </View>
      </View>
    );
  }
}
