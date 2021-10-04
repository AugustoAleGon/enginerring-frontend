import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, fontSizeByScale} from '../utils';

interface BalanceProps {
  balance: number;
  currency: string;
  earningFiat?: number;
  earningPercentage?: number;
  isMainPortfolio: boolean;
}

const Balance: React.FC<BalanceProps> = ({
  balance,
  currency,
  earningFiat,
  earningPercentage,
  isMainPortfolio,
}) => {
  return (
    <View style={styles.mainContainer}>
      {isMainPortfolio ? (
        <View style={styles.portfolioContainer}>
          <Text style={styles.portfolioText}>Portfolio Value</Text>
          <Ionicons
            name="ios-chevron-down-outline"
            style={styles.iconChevron}
            size={22}
            color={colors.fontColor}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.portfolioText}>{currency} Balance</Text>
        </View>
      )}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>${balance}</Text>
        <Text style={styles.currencyText}>{currency}</Text>
      </View>
      {isMainPortfolio && (
        <View style={styles.earningContainer}>
          <Ionicons name="ios-caret-up-sharp" size={20} color={'#34B78F'} />
          <Text style={styles.earningText}>
            ${earningFiat} ({earningPercentage}%)
          </Text>
          <Text style={styles.dayText}>Today</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 57,
    marginLeft: 28,
  },
  portfolioContainer: {
    flexDirection: 'row',
  },
  portfolioText: {
    fontSize: fontSizeByScale.body1,
    color: colors.fontColor,
    fontWeight: '600',
    lineHeight: 24,
  },
  iconChevron: {
    marginLeft: 6,
  },
  balanceContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'flex-end',
  },
  balanceText: {
    fontSize: fontSizeByScale.h1,
    lineHeight: 60,
    fontWeight: '600',
    color: colors.fontColor,
  },
  currencyText: {
    color: colors.fontColor,
    fontSize: fontSizeByScale.body1,
    lineHeight: 24,
    fontWeight: '400',
    marginBottom: 10,
    marginLeft: 8,
  },
  earningContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: '#E9E7FE',
    borderRadius: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  earningText: {
    color: '#34B78F',
    fontSize: fontSizeByScale.caption,
    lineHeight: 18,
  },
  dayText: {
    fontSize: fontSizeByScale.caption,
    fontWeight: '400',
    lineHeight: 18,
    marginLeft: 5,
  },
});

export default Balance;
