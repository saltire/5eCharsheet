import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EquipmentAddItem from './EquipmentAddItem';
import EquipmentStartingGear from './EquipmentStartingGear';
import FlexButtons from '../common/FlexButtons';
import { describe } from '../common/equipment-utils';
import { BulletText } from '../common/textBoxes';


const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  help: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {
    flex: 1,
  },
  removeButton: {
    flex: 0,
  },
  removeText: {
    width: 32,
    borderRadius: 3,
    backgroundColor: '#eee',
    lineHeight: 32,
    textAlign: 'center',
  },
  flexButtons: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default class EquipmentEditor extends Component {
  constructor(props) {
    super(props);

    const { char } = props;

    this.state = {
      equipment: (char.equipment || []).slice(),
      addItem: false,
      startingGear: false,
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { equipment, addItem, startingGear } = this.state;

    if (addItem) {
      return (
        <EquipmentAddItem
          char={char}
          onAccept={newItem => this.setState(prevState => (
            { equipment: prevState.equipment.concat(newItem), addItem: false }))}
          onCancel={() => this.setState({ addItem: false })}
        />
      );
    }

    if (startingGear) {
      return (
        <EquipmentStartingGear
          char={char}
          onAccept={newEquipment => this.setState({ equipment: newEquipment, startingGear: false })}
          onCancel={() => this.setState({ startingGear: false })}
        />
      );
    }

    /* eslint-disable react/no-array-index-key */
    return (
      <>
        {(equipment && equipment.length) ? (
          <FlatList
            style={styles.scrollContainer}
            data={equipment}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <BulletText style={styles.text}>
                  {describe(item)}
                </BulletText>
                <TouchableOpacity
                  style={styles.removeButton}
                  activeOpacity={0.8}
                  onPress={() => this.setState(prevState => ({
                    equipment: prevState.equipment.filter(it => it !== item),
                  }))}
                >
                  <Text style={styles.removeText}>X</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <>
            <Text style={styles.help}>
              No equipment. Your character class and background can provide some starting gear.
            </Text>

            <View style={styles.flexButtons}>
              <Button
                title='Get Starting Gear'
                disabled={!char.class && !char.background}
                onPress={() => this.setState({ startingGear: true })}
              />
            </View>
          </>
        )}

        <View style={styles.flexButtons}>
          <Button title='Add Item' onPress={() => this.setState({ addItem: true })} />
        </View>

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              { title: 'OK', onPress: () => onAccept({ equipment }) },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
