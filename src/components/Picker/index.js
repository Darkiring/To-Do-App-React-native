import React from 'react';

// Picker component
import RNPickerSelect from 'react-native-picker-select';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import {styles} from './styles';

const Picker = ({onValueChange, items}) => (
  <RNPickerSelect
    useNativeAndroidPickerStyle={false}
    onValueChange={onValueChange}
    items={items}
    style={{
      inputAndroid: styles.inputAndroid,
      inputIOS: styles.inputIOS,
    }}
  />
);

Picker.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  items: PropTypes.oneOfType([
    {label: PropTypes.string},
    {value: PropTypes.string},
  ]),
};

export default Picker;
