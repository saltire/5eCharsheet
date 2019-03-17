import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import FlexButtons from '../common/FlexButtons';
import Toggle from '../common/Toggle';
import { getLanguages, getLanguageChoices } from '../common/calc';
import { languages } from '../common/data';


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
  sectionHeader: {
    paddingBottom: 5,
    marginBottom: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionFooter: {
    marginBottom: 15,
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

const sections = Array.from(new Set(languages.map(lang => lang.type)))
  .map(type => ({
    title: type,
    data: languages.filter(lang => lang.type === type).map(lang => lang.label),
  }));

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

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Languages</Text>

        <SectionList
          style={styles.scrollContainer}
          sections={sections}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={({ item: language }) => (
            <View style={styles.row}>
              <View style={[styles.cell, styles.expand]}>
                <Text style={styles.languageName}>{language}</Text>
              </View>

              <View style={styles.cell}>
                <Toggle
                  colorOn='#c00'
                  colorOff='#666'
                  trackColor='#ddd'
                  value={allLanguages.includes(language)}
                  disabled={otherLanguages.includes(language) ||
                    (!chosenLanguages.includes(language) && !choicesRemaining)}
                  onChange={newValue => this.setState((prevState) => {
                    const newLanguages = new Set(prevState.chosenLanguages);
                    if (newValue) {
                      newLanguages.add(language);
                    }
                    else {
                      newLanguages.delete(language);
                    }
                    return { chosenLanguages: Array.from(newLanguages).sort() };
                  })}
                />
              </View>
            </View>
          )}
          renderSectionFooter={() => <View style={styles.sectionFooter} />}
          keyExtractor={language => language}
        />

        <Text style={styles.help}>Choices remaining: {choicesRemaining}</Text>

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'OK', onPress: () => onAccept({ languages: chosenLanguages }) },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </View>
    );
  }
}
