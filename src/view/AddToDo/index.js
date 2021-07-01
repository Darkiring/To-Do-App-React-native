import React, {useState, useEffect} from 'react';
import {Platform, Alert, TextInput as RNTextInput, View} from 'react-native';
import moment from 'moment';

// Styles
import {
  styles,
  Container,
  TextHeaderInput,
  InputsContainer,
  InputBackground,
  InputsTimeContainer,
  InputTime,
  ContainerInput,
  StartTimeContainer,
  EndTimeContainer,
  TextDate,
  ButtonDate,
  TextInput,
  TextError,
  Content,
  ButtonCreateContainer,
} from './styles';
import {theme} from '../../utils/theme';

// Mobx
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';

// Button component
import {ButtonTask} from '../../components/Buttons';

// Date Component
import DateComponent from '../../components/DateComponent';

// Start Time Component
import StartTimeComponent from '../../components/StartTimeComponent';

// End Time Component
import EndTimeComponent from '../../components/EndTimeComponent';

// Picker component
import Picker from '../../components/Picker';

// Icon component
import {Icon} from '../../components/Icons';

// Formik and yup
import * as yup from 'yup';
import {Formik} from 'formik';

// Mock data for pickers
import {remind, repeat} from '../../utils/mockData';

// Localstorage
import {getTasks, storeTasks} from '../../localstorage/LocalStorage';
// Format Date and time
import {formatTime, formatDate, addHours} from '../../utils/helpers';

const yupSchema = yup.object().shape({
  title: yup.string().min(2).required('Please, provide your task title!'),
  remind: yup.string().required('Please, provide your reminder!'),
  repeat: yup
    .string()
    .required('Please, provide the frequency of the reminder!'),
  deadline: yup.date().required('Please provide the date of your task!'),
  startTime: yup.date().required('Please provide the start time of your task!'),
  endTime: yup.date().required('Please provide the end time of your task!'),
});

const AddToDo = props => {
  const {TaskStore} = props;
  const {tasks} = toJS(TaskStore.tasks) ? toJS(TaskStore.tasks) : {};
  const [show, setShow] = useState({state: ''});
  const [date, setDate] = useState(new Date());
  const [tasksData, setTasksData] = useState(tasks ? tasks : []);
  const currentDate = formatDate(date);
  const currentEndTime = addHours(date);

  useEffect(() => {
    getTasks(value => {
      if (value) {
        setTasksData(value);
      }
    });
  }, []);

  const saveTasks = value => {
    let taskArr = tasksData;
    if (value) {
      value.isFinished = false;
      value.startTime = formatTime(value.startTime);
      value.endTime = formatTime(value.endTime);
      taskArr.push(value);
    }
    storeTasks(taskArr);
    TaskStore.setTasks(taskArr);
    props.navigation.goBack();
  };

  const showDatepicker = value => {
    setShow({state: value});
  };

  const closeModal = value => {
    setShow({state: value});
  };

  const iconComponent = iconName => <Icon name={iconName} />;

  return (
    <Formik
      initialValues={{
        title: '',
        deadline: currentDate,
        startTime: date,
        endTime: currentEndTime,
        remind: '',
        repeat: '',
      }}
      onSubmit={saveTasks}
      validationSchema={yupSchema}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
        setFieldValue,
      }) => (
        <Container>
          <Content>
            {/* Title Input */}
            <InputsContainer>
              <TextHeaderInput>Title</TextHeaderInput>
              <InputBackground>
                {Platform.OS === 'ios' ? (
                  <TextInput
                    placeholder="Desing team meeting"
                    onChangeText={handleChange('title')}
                  />
                ) : (
                  <RNTextInput
                    style={styles.textInput}
                    placeholder="Desing team meeting"
                    placeholderTextColor={theme.colors.gray}
                    onChangeText={handleChange('title')}
                  />
                )}
              </InputBackground>
              {touched.title && errors.title && (
                <TextError>{errors.title}</TextError>
              )}
            </InputsContainer>
            {/* Deadline */}
            <InputsContainer>
              <TextHeaderInput>Deadline</TextHeaderInput>
              <InputBackground>
                <View>
                  <ButtonDate
                    onPress={() =>
                      showDatepicker(
                        Platform.OS === 'ios' ? 'deadline' : 'androidDead',
                      )
                    }>
                    <TextDate>{formatDate(values.deadline)}</TextDate>
                  </ButtonDate>
                  <DateComponent
                    onChangeDate={value => setFieldValue('deadline', value)}
                    show={show.state === 'deadline'}
                    setShow={showDatepicker}
                    showAndroid={show.state === 'androidDead'}
                    closeModal={closeModal}
                  />
                </View>
                {iconComponent('arrow-down')}
              </InputBackground>
              {touched.deadline && errors.deadline && (
                <TextError>{errors.deadline}</TextError>
              )}
            </InputsContainer>
            {/* Start Time and End Time */}
            <InputsTimeContainer>
              <StartTimeContainer>
                <TextHeaderInput>Start Time</TextHeaderInput>
                <InputTime>
                  <View>
                    <ButtonDate
                      onPress={() =>
                        showDatepicker(
                          Platform.OS === 'ios' ? 'startTime' : 'androidStart',
                        )
                      }>
                      <TextDate>{formatTime(values.startTime)}</TextDate>
                    </ButtonDate>
                    <StartTimeComponent
                      onChange={value => setFieldValue('startTime', value)}
                      show={show.state === 'startTime'}
                      setShow={showDatepicker}
                      showAndroid={show.state === 'androidStart'}
                      closeModal={closeModal}
                    />
                  </View>
                  {touched.startTime && errors.startTime && (
                    <TextError>{errors.startTime}</TextError>
                  )}
                  {iconComponent('clock')}
                </InputTime>
              </StartTimeContainer>
              <EndTimeContainer>
                <TextHeaderInput>End Time</TextHeaderInput>
                <InputTime>
                  <View>
                    <ButtonDate
                      onPress={() =>
                        showDatepicker(
                          Platform.OS === 'ios' ? 'endTime' : 'androidEnd',
                        )
                      }>
                      <TextDate>{formatTime(values.endTime)}</TextDate>
                    </ButtonDate>
                    <EndTimeComponent
                      onChange={value => setFieldValue('endTime', value)}
                      show={show.state === 'endTime'}
                      setShow={showDatepicker}
                      showAndroid={show.state === 'androidEnd'}
                      closeModal={closeModal}
                      currentEndTime={currentEndTime}
                    />
                  </View>
                  {iconComponent('clock')}
                  {touched.endTime && errors.endTime && (
                    <TextError>{errors.endTime}</TextError>
                  )}
                </InputTime>
              </EndTimeContainer>
            </InputsTimeContainer>
            {/* Remind */}
            <InputsContainer>
              <TextHeaderInput>Remind</TextHeaderInput>
              <InputBackground>
                {Platform.OS === 'ios' ? (
                  <ContainerInput>
                    <Picker
                      onValueChange={value =>
                        setFieldValue('remind', value === null ? '' : value)
                      }
                      items={remind}
                    />
                  </ContainerInput>
                ) : (
                  <Picker
                    onValueChange={value =>
                      setFieldValue('remind', value === null ? '' : value)
                    }
                    items={remind}
                  />
                )}
                {iconComponent('arrow-down')}
              </InputBackground>
              {touched.remind && errors.remind && (
                <TextError>{errors.remind}</TextError>
              )}
            </InputsContainer>
            {/* Repeat */}
            <InputsContainer>
              <TextHeaderInput>Repeat</TextHeaderInput>
              <InputBackground>
                {Platform.OS === 'ios' ? (
                  <ContainerInput>
                    <Picker
                      onValueChange={value =>
                        setFieldValue('repeat', value === null ? '' : value)
                      }
                      items={repeat}
                    />
                  </ContainerInput>
                ) : (
                  <Picker
                    onValueChange={value =>
                      setFieldValue('repeat', value === null ? '' : value)
                    }
                    items={repeat}
                  />
                )}
                {iconComponent('arrow-down')}
              </InputBackground>
              {touched.repeat && errors.repeat && (
                <TextError>{errors.repeat}</TextError>
              )}
            </InputsContainer>
          </Content>
          <ButtonCreateContainer>
            <ButtonTask onPress={handleSubmit} text="Create a Task" />
          </ButtonCreateContainer>
        </Container>
      )}
    </Formik>
  );
};

export default inject('TaskStore')(observer(AddToDo));
