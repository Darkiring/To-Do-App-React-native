import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import styled from 'styled-components/native';

// PropTypes
import PropTypes from 'prop-types';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding-top: 25px;
`;

export const Content = styled.View`
  padding-left: 25px;
  height: 85%;
`;

export const ButtonDate = styled.TouchableOpacity`
  padding: 17px;
`;

export const ButtonCreateContainer = styled.TouchableOpacity`
  width: 93%;
  align-self: center;
`;

export const ContainerInput = styled.View`
  padding: 17px;
`;

export const TextDate = styled.Text`
  font-family: Inter;
  font-size: 12px;
  color: ${theme.colors.gray};
`;

export const InputsContainer = styled.View`
  padding-bottom: 20px;
`;

export const TextHeaderInput = styled.Text`
  font-family: Inter;
  font-size: 13px;
  font-weight: bold;
`;

export const InputBackground = styled.View`
  margin-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  width: 93%;
  background-color: ${theme.colors.lightGray};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputsTimeContainer = styled.View`
  padding-bottom: 20px;
  flex-direction: row;
`;

export const StartTimeContainer = styled.View`
  width: 45%;
  margin-right: 6px;
`;

export const EndTimeContainer = styled.View`
  width: 45%;
  margin-left: 6px;
`;

export const InputTime = styled.View`
  margin-top: 10px;
  background-color: ${theme.colors.lightGray};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
`;

export const ModalContainer = styled.View`
  background-color: ${theme.colors.background};
  margin-top: 50%;
  justify-content: center;
  align-self: center;
  width: 80%;
  height: 53%;
  border-radius: 15px;
`;

export const Button = styled.TouchableOpacity`
  padding: 14px;
  background-color: ${theme.colors.green};
  border-radius: 15px;
  width: 60%;
  align-self: center;
  margin-bottom: 20px;
`;

export const TextButtonModal = styled.Text`
  font-family: Inter;
  font-size: 17px;
  color: ${theme.colors.white};
  align-self: center;
`;

export const TextInput = styled.TextInput`
  height: 25px;
  margin: 10px;
  font-family: Inter;
  font-size: 12px;
  color: ${theme.colors.gray};
`;

export const TextError = styled.Text`
  margin: 5px;
  font-family: Inter;
  font-size: 12px;
  color: ${theme.colors.red};
`;

export const ButtonTime = ({onPress, title}) => (
  <ButtonDate onPress={onPress}>
    <TextDate>{title}</TextDate>
  </ButtonDate>
);

export const ButtonModal = ({onPress, title}) => (
  <Button onPress={onPress}>
    <TextButtonModal>{title}</TextButtonModal>
  </Button>
);

ButtonTime.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

ButtonModal.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export const styles = StyleSheet.create({
  textInput: {
    color: theme.colors.gray,
  },
  inputAndroid: {
    color: theme.colors.gray,
  },
  inputIOS: {
    color: theme.colors.gray,
  },
});
