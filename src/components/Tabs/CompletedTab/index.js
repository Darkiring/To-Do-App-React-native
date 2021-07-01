import React from 'react';
import {FlatList, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {theme} from '../../../utils/theme';

// Mobx
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';

// LocalStorage
import {storeTasks} from '../../../localstorage/LocalStorage';

// Styles
import {styles, ContainerItems, TextItem, ContainerFlatList} from './styles';

const renderItem = (item, index, setStatus) =>
  item.isFinished === true ? (
    <View key={index}>
      <ContainerItems>
        <BouncyCheckbox
          isChecked={item.isFinished}
          onPress={isChecked => {
            setStatus(isChecked, index);
          }}
          fillColor={theme.colors.blue}
          iconStyle={styles.checkboxStyle}
        />
        <TextItem>{item.title}</TextItem>
      </ContainerItems>
    </View>
  ) : null;

const CompletedTab = props => {
  const {TaskStore} = props;
  const tasks = toJS(TaskStore.tasks) ? toJS(TaskStore.tasks) : [];
  const setStatus = (status, index) => {
    let taskArr = tasks;
    taskArr[index].isFinished = status;
    storeTasks(taskArr);
    TaskStore.setTasks(taskArr);
  };
  return (
    <ContainerFlatList>
      <FlatList
        data={tasks}
        renderItem={({item, index}) => renderItem(item, index, setStatus)}
        keyExtractor={item => item.id}
      />
    </ContainerFlatList>
  );
};

export default inject('TaskStore')(observer(CompletedTab));
