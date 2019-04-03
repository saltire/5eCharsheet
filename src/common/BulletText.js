import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  bullet: {
    flex: 0,
    width: 24,
    textAlign: 'center',
  },
  textView: {
    flex: 1,
  },
  text: {
    marginVertical: 4,
    fontSize: 16,
    lineHeight: 24,
  },
});

const BulletText = ({ bullet, style = {}, textStyle = {}, children }) => (
  <View style={[styles.view, style]}>
    <Text style={[styles.bullet, styles.text, textStyle]}>
      {bullet === undefined ? '•' : bullet}
    </Text>
    <View style={{ flex: 1 }}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  </View>
);

export default BulletText;
