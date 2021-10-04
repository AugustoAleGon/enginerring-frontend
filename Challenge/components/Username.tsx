import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSizeByScale} from '../utils';

interface UsernameProps {
  username?: string;
}

const Username: React.FC<UsernameProps> = ({username}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="person-outline" color={'#FFFFFF'} size={24} />
      <Text style={styles.text}>@{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 32,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
  },
  text: {
    fontSize: fontSizeByScale.body1,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});

export default Username;
