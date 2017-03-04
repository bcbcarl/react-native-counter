import React, { PropTypes } from 'react';
import styled from 'styled-components/native';

import { View } from 'react-native';

const Count = styled.Text`
  font-size: 100;
  font-weight: bold;
  color: black;
`;

const Counter = ({ count }) =>
  <View>
    <Count>{count}</Count>
  </View>;

Counter.propTypes = {
  count: PropTypes.number.isRequired
};

export default Counter;
