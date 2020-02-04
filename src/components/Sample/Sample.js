import React from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sampleFetch } from '../../actions/sample/sample';
import Toast from '../Toast/Toast';

import styles from './Sample.styles';

class Sample extends React.Component {
  fetchData = () => {
    this.props.sampleFetch('https://5e329d59b92d240014ea545c.mockapi.io/user');
  };

  render() {
    const { data, loading, isConnected, notification } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Toast notification={notification} />

        {!isConnected
          ? <Text>You are offline!</Text>
          : null
        }

        <Button testID="fetchButton" onPress={this.fetchData} title="Fetch" />

        {loading && <Text testID="loadTestLabel">Loading...</Text>}

        {data && (
          <View testID="dataList">
            {data.map(item => (
              <View key={item.id} style={styles.item}>
                <Image source={{ uri: item.avatar }} style={styles.avatar}/>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>
        )}
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
  notification: PropTypes.number,
};

const mapStateToProps = state => ({
  data: state.sample.data,
  loading: state.sample.loading,
  isConnected: state.network.isConnected,
  notification: state.sample.notification,
});

const bindActions = {
  sampleFetch,
};

export const PureSample = Sample;

export default connect(mapStateToProps, bindActions)(Sample);
