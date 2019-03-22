import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

import FlexButtons from '../common/FlexButtons';
import { getEquipment } from '../common/calc';


const styles = StyleSheet.create({
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

function itemDescription(item) {
  if (typeof item === 'string') {
    return item;
  }
  const [name, quantity] = Object.entries(item)[0];
  return `${name} (${quantity})`;
}

export default function EquipmentEditor({ char, onAccept, onCancel }) {
  const equipment = getEquipment(char);

  /* eslint-disable react/no-array-index-key */
  return (
    <>
      <View>
        {(equipment || []).map((item, i) => {
          if (Array.isArray(item)) {
            const options = item.map(it => [].concat(it).map(itemDescription).join(', '));
            return (
              <Picker
                key={i}
                selectedValue={options[0]}
                onValueChange={() => {}}
              >
                {options.map(opt => <Picker.Item key={opt} label={opt} value={opt} />)}
              </Picker>
            );
          }

          return <Text key={i}>{itemDescription(item)}</Text>;
        })}
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
