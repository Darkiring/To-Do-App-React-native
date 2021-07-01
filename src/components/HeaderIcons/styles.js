import React from 'react';
import styled from 'styled-components/native';

// PropTypes
import PropTypes from 'prop-types';

// Icons
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ButtonHeaderIcon = styled.TouchableOpacity`
  justify-content: center;
  margin-horizontal: 12px;
`;

const Icon = styled(IconSimpleLineIcons)`
  font-size: 14px;
`;

export const HeaderIcons = ({onPress, iconName}) => (
  <ButtonHeaderIcon onPress={onPress}>
    <Icon name={iconName} />
  </ButtonHeaderIcon>
);

HeaderIcons.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};
