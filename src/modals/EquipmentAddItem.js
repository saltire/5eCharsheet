import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import FlexButtons from '../common/FlexButtons';
import NumberInput, { normalize } from '../common/NumberInput';


const styles = StyleSheet.create({
  subheader: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  formLabel: {
    justifyContent: 'center',
    width: 80,
    height: 32,
  },
  formLabelText: {
    fontSize: 16,
  },
  formField: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3,
    backgroundColor: '#eee',
    fontSize: 16,
  },
  flexButtons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default class EquipmentAddItem extends Component {
  constructor(props) {
    super(props);

    const { item } = props;

    this.state = {
      label: (item && item.label) || '',
      count: (item && item.count) || 1,
      notes: (item && item.notes) || '',
    };
  }

  render() {
    const { item, onAccept, onCancel } = this.props;
    const { label, count, notes } = this.state;

    return (
      <>
        <Text style={styles.subheader}>{item ? 'Edit' : 'Add'} Item</Text>

        <View style={styles.form}>
          <View style={styles.formLabel}><Text style={styles.formLabelText}>Name</Text></View>
          <TextInput
            style={styles.formField}
            value={label}
            onChangeText={text => this.setState({ label: text })}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.formLabel}><Text style={styles.formLabelText}>Quantity</Text></View>
          <NumberInput
            style={styles.formField}
            value={count}
            onChange={val => this.setState({ count: val })}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.formLabel}><Text style={styles.formLabelText}>Notes</Text></View>
          <TextInput
            style={styles.formField}
            multiline
            value={notes}
            onChangeText={text => this.setState({ notes: text })}
          />
        </View>

        <View style={styles.flexButtons}>
          <FlexButtons
            buttons={[
              {
                title: 'OK',
                disabled: !label || !normalize(count),
                onPress: () => onAccept({ label, count: normalize(count), notes }),
              },
              { title: 'Cancel', onPress: onCancel },
            ]}
          />
        </View>
      </>
    );
  }
}
