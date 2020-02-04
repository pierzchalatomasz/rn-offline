import React from 'react';
import EasyToast from 'react-native-easy-toast';
import PropTypes from 'prop-types';

class Toast extends React.Component {
  componentDidUpdate(prevProps) {
    if (!this.props.notification || prevProps.notification === this.props.notification) {
      return;
    }

    this.toast.show('You\'re offline and the data will be downloaded after regaining connection', 3000);
  }

  render() {
    return <EasyToast position="top" ref={toast => this.toast = toast}/>;
  }
}

Toast.propTypes = {
  notification: PropTypes.number.isRequired,
};

export default Toast;
