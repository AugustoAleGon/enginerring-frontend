import React from 'react';
import {View, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../utils';

import Leafe from '../assets/leafe.svg';
import Maple from '../assets/maple.svg';

interface GradientProps {
  children: any;
  styleGradient?: StyleProp<ViewStyle>;
}

const Gradient: React.FC<GradientProps> = ({children, styleGradient}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styleGradient}
      colors={[colors.gradientA, colors.gradientB]}>
      <View style={styles.svgContainer}>
        <Leafe />
        <Maple />
      </View>
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
  },
});

export default Gradient;
