import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Balance, Gradient, Username} from '../components';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';

const HomeView = () => {
  return (
    <View>
      <Gradient styleGradient={styles.gradient}>
        <View style={styles.topBarContainer}>
          <Username username={'ethansmith'} />
          <View style={styles.iconContainer}>
            <SimpleLine name="graduation" size={26} color={'#101820'} />
          </View>
        </View>
        <View>
          <Balance
            balance={850.64}
            currency="USD"
            earningFiat={20.23}
            earningPercentage={2.03}
            isMainPortfolio
          />
        </View>
      </Gradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 348,
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 28.13,
    paddingRight: 23,
    paddingTop: 10,
  },
  iconContainer: {
    borderRadius: 16,
    backgroundColor: '#E9E7FE',
    padding: 7,
  },
});

export default HomeView;
