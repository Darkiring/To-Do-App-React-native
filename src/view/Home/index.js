import React from 'react';

// Mobx
import {inject, observer} from 'mobx-react';

// Styled Component
import {Container} from '../../components/Container';
import {ContainerTabs} from './styles';

// Tabs
import {Tabs, TabScreen} from 'react-native-paper-tabs';

// LocalStorage
import {getTasks} from '../../localstorage/LocalStorage';

// Tabs Components
import AllTab from '../../components/Tabs/AllTab';
import CompletedTab from '../../components/Tabs/CompletedTab';
import UncompletedTab from '../../components/Tabs/UncompletedTab';
import FavoritesTab from '../../components/Tabs/FavoritesTab';

// Tab theme
import {themeTab} from '../../utils/theme';

const Home = props => {
  const {TaskStore} = props;
  getTasks(value => {
    if (value) {
      TaskStore.setTasks(value);
    }
  });
  return (
    <Container>
      <Tabs
        // defaultIndex={0} // default = 0
        uppercase={false} // true/false | default=true | labels are uppercase
        // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
        // iconPosition // leading, top | default=leading
        // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
        // dark={false} // works the same as AppBar in react-native-paper
        theme={themeTab} // works the same as AppBar in react-native-paper
        mode="scrollable" // fixed, scrollable | default=fixed
        // onChangeIndex={(newIndex) => {}} // react on index change
        showLeadingSpace={false} //  (default=true) show leading space in scrollable tabs inside the header
      >
        <TabScreen label="All">
          <AllTab />
        </TabScreen>
        <TabScreen label="Completed">
          <ContainerTabs>
            <CompletedTab />
          </ContainerTabs>
        </TabScreen>
        <TabScreen label="Uncompleted">
          <ContainerTabs>
            <UncompletedTab />
          </ContainerTabs>
        </TabScreen>
        <TabScreen label="Favorite">
          <FavoritesTab />
        </TabScreen>
      </Tabs>
    </Container>
  );
};

export default inject('TaskStore')(observer(Home));
