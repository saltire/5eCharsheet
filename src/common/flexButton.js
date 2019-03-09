import React from 'react';
import { Button, View } from 'react-native';


export const FlexButtonContainer = ({ style, children }) => (
  <View style={[{ flexDirection: 'row', marginHorizontal: -5 }, style]}>{children}</View>
);

export const FlexButton = ({ ...props }) => (
  <View style={{ flex: 1, marginHorizontal: 5 }}>
    <Button {...props} />
  </View>
);
