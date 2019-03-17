import React from 'react';
import { Button, View } from 'react-native';


export default function FlexButtons({ buttons }) {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: -5 }}>
      {(buttons || []).map(props => (
        <View key={props.title} style={{ flex: 1, marginHorizontal: 5 }}>
          <Button {...props} />
        </View>
      ))}
    </View>
  );
}
