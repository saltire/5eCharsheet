import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import EquipmentStartingGear from './EquipmentStartingGear';
import FlexButtons from '../common/FlexButtons';
import { describe } from '../common/equipment-utils';


const styles = StyleSheet.create({
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default class EquipmentEditor extends Component {
  constructor(props) {
    super(props);

    const { char } = props;

    this.state = {
      equipment: Object.assign({}, char.equipment),
      startingGear: false,
    };
  }

  render() {
    const { char, onAccept, onCancel } = this.props;
    const { equipment, startingGear } = this.state;

    /* eslint-disable react/no-array-index-key */
    return startingGear ? (
      <EquipmentStartingGear
        char={char}
        onAccept={newEquipment => this.setState({ equipment: newEquipment, startingGear: false })}
        onCancel={() => this.setState({ startingGear: false })}
      />
    ) : (
      <>
        <View>
          {(equipment && equipment.length) ? (
            <FlatList
              data={equipment}
              renderItem={({ item }) => <Text>{describe(item)}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <Button
              title='Get Starting Gear'
              onPress={() => this.setState({ startingGear: true })}
            />
          )}
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
