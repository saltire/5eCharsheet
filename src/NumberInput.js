import React, { Component } from 'react';
import { TextInput } from 'react-native';


function normalize(value) {
  return `${Math.max(0, parseInt(value) || 0)}`;
}

export default class NumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: normalize(props.value),
    };
  }

  render() {
    const { onChange, ...props } = this.props;
    const { value } = this.state;

    return (
      <TextInput
        {...props}
        value={value}
        keyboardType='numeric'
        onChangeText={text => this.setState({ value: text })}
        onEndEditing={() => {
          const newValue = normalize(value);
          this.setState({ value: newValue });
          onChange(newValue);
        }}
      />
    );
  }
}
