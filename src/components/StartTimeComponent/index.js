import React, {useState} from 'react';
import {Modal, Platform} from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Date Picker Component
import DateTimePicker from '@react-native-community/datetimepicker';

// Style and styled components
import {Container, ButtonModal} from './styles';
import {ModalContainer} from '../Container';

const StartTimeComponent = ({
  onChange,
  show,
  setShow,
  showAndroid,
  closeModal,
}) => {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'android') {
      setShow('');
    }
    setDate(currentDate);
    onChange(currentDate);
  };

  const hideModal = () => {
    closeModal('');
  };

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow('');
        }}>
        <ModalContainer>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            display="inline"
            onChange={onChangeDate}
          />
          <ButtonModal onPress={hideModal} title="Save" />
        </ModalContainer>
      </Modal>
      {showAndroid && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          display="default"
          onChange={onChangeDate}
          is24Hour={false}
        />
      )}
    </Container>
  );
};

StartTimeComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  showAndroid: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default StartTimeComponent;
