import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

// PropTypes
import PropTypes from 'prop-types';

const Button = styled.TouchableOpacity`
  justify-content: center;
  margin-horizontal: 10px;
  background-color: ${theme.colors.green};
  border-radius: 12px;
  padding: 14px;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 14px;
  font-family: Inter;
  color: ${theme.colors.white};
`;

export const ButtonTask = ({onPress, text}) => (
  <Button onPress={onPress} activeOpacity={0.5}>
    <Text>{text}</Text>
  </Button>
);

ButtonTask.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
