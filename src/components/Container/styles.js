import {theme} from '../../utils/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const ModalContainer = styled.View`
  background-color: ${theme.colors.background};
  margin-top: 70%;
  justify-content: center;
  align-self: center;
  align-content: center;
  width: 50%;
  height: 15%;
  border-radius: 15px;
`;
