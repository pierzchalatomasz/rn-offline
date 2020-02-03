import React from 'react';
import { View, Button, ScrollView } from 'react-native';

import Sample from '../components/Sample/Sample';

class HomeScreen extends React.Component {
  goToDetailsScreen = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    return (
      <View>
        <ScrollView>
          <Sample />
          <Button
            title="Go to Details"
            onPress={this.goToDetailsScreen}
          />
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
