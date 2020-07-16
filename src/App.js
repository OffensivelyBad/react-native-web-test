import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { UIProvider, Router, Switch } from 'react-native-web-ui-components';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

const theme = {
  input: {
    focused: StyleSheet.create({
      border: {
        borderColor: 'yellow',
      },
    }),
  },
};

const App = props => (
  <Router history={history}>
    <Switch history={history}>
      <UIProvider theme={theme} amp={false}>
        <View>
          <Text>This is stuff!</Text>
        </View>
      </UIProvider>
    </Switch>
  </Router>
);

export default App;