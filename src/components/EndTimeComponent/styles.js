import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import styled from 'styled-components/native';

// PropTypes
import PropTypes from 'prop-types';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding-left: 25px;
`;

export const Button = styled.TouchableOpacity`
  padding: 14px;
  background-color: ${theme.colors.green};
  border-radius: 15px;
  width: 60%;
  align-self: center;
`;

export const TextButtonModal = styled.Text`
  font-family: Inter;
  font-size: 17px;
  color: ${theme.colors.white};
  align-self: center;
`;

export const ButtonModal = ({onPress, title}) => (
  <Button onPress={onPress}>
    <TextButtonModal>{title}</TextButtonModal>
  </Button>
);

export const styles = StyleSheet.create({});

ButtonModal.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
