import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';
import styled from 'styled-components/native';

export const ContainerTabs = styled.View`
  background-color: ${theme.colors.background};
  margin: 10px;
  padding: 10px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
