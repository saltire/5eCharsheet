import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const styles = StyleSheet.create({
  textBox: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 40,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

const TextContent = ({ children, placeholder }) => (
  <Text style={[{ fontSize: 16 }, children ? {} : { color: '#999' }]}>
    {children || placeholder || ' '}
  </Text>
);

export const TextBox = ({ ...props }) => (
  <View style={styles.textBox}>
    <TextContent {...props} />
  </View>
);

export const TouchableTextBox = ({ disabled, onPress, ...props }) => (
  <TouchableOpacity
    style={styles.textBox}
    activeOpacity={0.8}
    disabled={disabled}
    onPress={onPress}
  >
    <TextContent {...props} />
  </TouchableOpacity>
);

export const HeaderBox = ({ header, placeholder, children }) => (
  <View style={{ flex: 1, marginHorizontal: 5, backgroundColor: '#fff' }}>
    <Text style={{ textAlign: 'center' }}>{header}</Text>
    <Text style={{ fontSize: 30, textAlign: 'center' }}>{children || placeholder || ' '}</Text>
  </View>
);

export const TouchableHeaderBox = ({ header, placeholder, disabled, children, onPress }) => (
  <TouchableOpacity
    style={{ flex: 1, marginHorizontal: 5 }}
    activeOpacity={0.8}
    disabled={disabled}
    onPress={onPress}
  >
    <View style={{ paddingHorizontal: 10, backgroundColor: '#fff' }}>
      <Text style={{ textAlign: 'center' }}>{header}</Text>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>{children || placeholder || ' '}</Text>
    </View>
  </TouchableOpacity>
);

export const BulletText = ({ bullet = '•', style = {}, children }) => (
  <View style={[{ flexDirection: 'row' }, style]}>
    <Text style={{ flex: 0, width: 32, textAlign: 'center', fontSize: 16, lineHeight: 32 }}>
      {bullet}
    </Text>
    <Text style={{ fontSize: 16, lineHeight: 32 }}>{children}</Text>
  </View>
);
