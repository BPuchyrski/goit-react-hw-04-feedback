import PropTypes from 'prop-types';
// const { Component } = require('react');

const Notification = ({ message }) => {
  return <p>{message}</p>;
}

// class Notification extends Component {
//   render() {
//     const { message } = this.props;
//     return <p>{message}</p>;
//   }
// }

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
