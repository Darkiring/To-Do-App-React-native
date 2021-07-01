import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  margin: 10px;
`;

export const ContainerFlatList = styled.View`
  background-color: ${theme.colors.background};
  margin: 10px;
  height: 85%;
`;

export const ContainerItems = styled.View`
  flex-direction: row;
  margin: 5px;
`;

export const TextItem = styled.Text`
  font-family: Inter;
  font-size: 15px;
  align-self: center;
  flex-shrink: 1;
`;

export const styles = StyleSheet.create({
  checkboxStyle: {
    borderColor: theme.colors.blue,
    borderRadius: 8,
    borderWidth: 1.3,
  },
});
