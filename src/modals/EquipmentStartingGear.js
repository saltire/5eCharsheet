import React, { Component } from 'react';
import { FlatList, Picker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import FlexButtons from '../common/FlexButtons';
import { getEquipment } from '../common/calc';
import { describe, formatEquipment, validateEquipment, outputEquipment } from '../common/equipment-utils';


const styles = StyleSheet.create({
  scrollContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  line: {
    marginBottom: 5,
  },
  choices: {
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  picker: {
    height: 32,
    marginLeft: 25,
  },
  pickerItem: {
    paddingVertical: 0,
    backgroundColor: 'blue',
  },
  bullet: {
    width: 32,
    textAlign: 'center',
  },
  placeholder: {
    color: '#999',
    fontStyle: 'italic',
  },
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

function BulletText({ bullet = '•', children }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ flex: 0, width: 32, textAlign: 'center', fontSize: 16, lineHeight: 32 }}>
        {bullet}
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 32 }}>{children}</Text>
    </View>
  );
}

export default class EquipmentEditor extends Component {
  constructor(props) {
    super(props);

    const { char } = props;

    this.state = {
      equipment: formatEquipment(getEquipment(char)),
    };
  }

  render() {
    const { onAccept, onCancel } = this.props;
    const { equipment } = this.state;

    /* eslint-disable react/no-array-index-key */
    return (
      <>
        <FlatList
          style={styles.scrollContainer}
          data={equipment}
          renderItem={({ item: line, index: l }) => (
            line.choices ? (
              <View key={l} style={styles.line}>
                <FlatList
                  style={styles.choices}
                  data={line.choices}
                  extraData={line.value}
                  renderItem={({ item: choice, index: c }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => this.setState(prevState => ({
                        equipment: prevState.equipment.map((ln, l2) => (l2 !== l ? ln : (
                          Object.assign({}, ln, { value: c })))),
                      }))}
                    >
                      <BulletText bullet={line.value === c ? '☑' : '☐'}>{choice.label}</BulletText>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.label}
                />

                {line.choices[line.value] ? line.choices[line.value].items.map((item, i) => (
                  item.options ? (
                    <Picker
                      key={i}
                      style={styles.picker}
                      itemStyle={styles.pickerItem}
                      selectedValue={item.options[item.value] || ''}
                      onValueChange={(newVal, newIndex) => this.setState(prevState => ({
                        equipment: prevState.equipment.map((ln, l2) => (l2 !== l ? ln : (
                          Object.assign({}, ln, {
                            choices: ln.choices.map((choice, c) => (c !== line.value ? choice : (
                              Object.assign({}, choice, {
                                items: choice.items.map((it, i2) => (i2 !== i ? it : (
                                  Object.assign({}, it, { value: newIndex - 1 })))),
                              })))),
                          })))),
                      }))}
                    >
                      <Picker.Item label={item.placeholder} value='' color='#999' />
                      {item.options.map(opt => <Picker.Item key={opt} label={opt} value={opt} />)}
                    </Picker>
                  ) : (
                    <BulletText key={i}>{describe(item)}</BulletText>
                  )
                )) : (
                  <BulletText bullet=''>
                    <Text style={styles.placeholder}>Select an option above</Text>
                  </BulletText>
                )}
              </View>
            ) : <View style={styles.line}><BulletText key={l}>{describe(line)}</BulletText></View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              {
                title: 'OK',
                disabled: !validateEquipment(equipment),
                onPress: () => onAccept(outputEquipment(equipment)),
              },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
