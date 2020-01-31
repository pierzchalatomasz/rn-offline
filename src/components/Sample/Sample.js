import React from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NetworkConsumer } from 'react-native-offline';

import { sampleFetch } from '../../actions/sample';

import styles from './Sample.styles';

class Sample extends React.Component {
  fetchData = () => {
    this.props.sampleFetch();
  };

  render() {
    const { data, loading, isConnected } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {!isConnected
          ? <Text>You are offline!</Text>
          : null
        }

        <Button onPress={this.fetchData} title="Fetch" />

        {loading && <Text>Loading...</Text>}

        {data && data.map(item => (
          <View key={item.id} style={styles.item}>
            <Image source={{ uri: item.avatar }} style={styles.avatar}/>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

Sample.propTypes = {
  sampleFetch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      createdAt: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
  loading: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  data: state.sample.data,
  loading: state.sample.loading,
  isConnected: state.network.isConnected,
});

const bindActions = {
  sampleFetch,
};

export default connect(mapStateToProps, bindActions)(Sample);
