import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

// Icons
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Icon = styled(IconSimpleLineIcons)`
  font-size: 15px;
  color: ${theme.colors.gray};
  align-self: center;
`;
