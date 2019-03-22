import React, { Component } from 'react';
import { FlatList, Picker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import FlexButtons from '../common/FlexButtons';
import { getEquipment } from '../common/calc';
import { weapons } from '../common/data';


const styles = StyleSheet.create({
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export function describe(item) {
  if (typeof item === 'string') {
    return item;
  }
  const { label, count = 1 } = item;
  return count > 1 ? `${label} (${count})` : label;
}

export function formatEquipment(equipment) {
  return (equipment || []).map((line) => {
    if (Array.isArray(line)) {
      return {
        options: line.map(choice => ({
          label: [].concat(choice).map(describe).join(', '),
          items: [].concat(choice).reduce((choiceItems, choiceItem) => {
            if (choiceItem.tags) {
              return choiceItems.concat([...Array(choiceItem.count || 1)].map(() => ({
                placeholder: choiceItem.label,
                options: weapons
                  .filter(w => choiceItem.tags.every(tag => w.tags.includes(tag)))
                  .map(w => w.label),
                // value: 0,
              })));
            }
            if (typeof choiceItem === 'string') {
              return choiceItems.concat({ label: choiceItem });
            }
            return choiceItems.concat(choiceItem);
          }, []),
        })),
        // value: 0,
      };
    }
    if (typeof line === 'string') {
      return { label: line };
    }
    return line;
  });
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
        <View>
          {equipment.map((line, l) => (
            line.options ? (
              <View key={l}>
                <FlatList
                  data={line.options}
                  extraData={line.value}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => this.setState(prevState => ({
                        equipment: prevState.equipment.map((ln, l2) => (l2 !== l ? ln : (
                          Object.assign({}, ln, { value: index })))),
                      }))}
                    >
                      <Text>{line.value === index ? '☑' : '☐'} {item.label}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.label}
                />

                {line.options[line.value] && line.options[line.value].items.map((item, i) => (
                  item.options ? (
                    <Picker
                      key={i}
                      selectedValue={item.options[item.value] || ''}
                      onValueChange={(newVal, newIndex) => this.setState(prevState => ({
                        equipment: prevState.equipment.map((ln, l2) => (l2 !== l ? ln : (
                          Object.assign({}, ln, {
                            options: ln.options.map((opt, o) => (o !== line.value ? opt : (
                              Object.assign({}, opt, {
                                items: opt.items.map((it, i2) => (i2 !== i ? it : (
                                  Object.assign({}, it, { value: newIndex - 1 })))),
                              })))),
                          })))),
                      }))}
                    >
                      <Picker.Item label={item.placeholder} value='' color='#999' />
                      {item.options.map(opt => <Picker.Item key={opt} label={opt} value={opt} />)}
                    </Picker>
                  ) : (
                    <Text key={i}>{describe(item)}</Text>
                  )
                ))}
              </View>
            ) : <Text key={l}>{describe(line)}</Text>
          ))}
        </View>

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'OK', onPress: () => onAccept({}) },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
