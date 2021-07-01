import React from 'react';

// Styles
import {Container, ContainerFlatList} from './styles';

// Mobx
import {inject, observer} from 'mobx-react';

// Styled Components
import {ButtonTask} from '../../Buttons';

// Navigation function
import * as RootNavigation from '../../../navigation/RootNavigator';

// Tabs components
import CompletedTab from '../CompletedTab';
import UncompletedTab from '../UncompletedTab';

const AllTab = props => {
  const onPress = () => {
    RootNavigation.navigate('AddToDo');
  };
  return (
    <Container>
      <ContainerFlatList>
        <CompletedTab />
        <UncompletedTab />
      </ContainerFlatList>
      <ButtonTask onPress={onPress} text="Add a task" />
    </Container>
  );
};

export default inject('TaskStore')(observer(AllTab));
