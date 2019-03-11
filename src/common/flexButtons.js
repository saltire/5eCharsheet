import React from 'react';
import { Button, View } from 'react-native';


export const FlexButtonContainer = ({ children }) => (
  <View style={{ flexDirection: 'row', marginHorizontal: -5 }}>{children}</View>
);

export const FlexButton = ({ ...props }) => (
  <View style={{ flex: 1, marginHorizontal: 5 }}>
    <Button {...props} />
  </View>
);
