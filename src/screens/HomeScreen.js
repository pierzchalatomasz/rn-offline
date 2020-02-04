import React from 'react';
import { View, Button } from 'react-native';

import Sample from '../components/Sample/Sample';

class HomeScreen extends React.Component {
  goToDetailsScreen = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Sample />
        <Button
          title="Go to Details"
          onPress={this.goToDetailsScreen}
        />
      </View>
    );
  }
}

export default HomeScreen;
