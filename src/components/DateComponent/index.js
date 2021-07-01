import React, {useState, useEffect} from 'react';
import {View, Modal, Platform} from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Date Picker Component
import DateTimePicker from '@react-native-community/datetimepicker';

// Style and styled components
import {Container, ModalContainer, ButtonModal} from './styles';

const DateComponent = ({
  onChangeDate,
  showAndroid,
  show,
  setShow,
  closeModal,
  mode,
}) => {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  useEffect(() => {
    onChangeDate(date);
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'android') {
      setShow('');
    }
    setDate(currentDate);
    onChangeDate(currentDate);
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
            mode="date"
            display="inline"
            onChange={onChange}
            minimumDate={today}
          />
          <ButtonModal onPress={hideModal} title="Save" />
        </ModalContainer>
      </Modal>
      {showAndroid && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
          minimumDate={today}
          is24Hour={false}
        />
      )}
    </Container>
  );
};

DateComponent.propTypes = {
  onChangeDate: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  showAndroid: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DateComponent;
