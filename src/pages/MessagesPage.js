import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as messageActions from '../redux/actions/message.actions';
import MessagesList from '../components/MessagesList';

const MessagesPage = ({ messages, loadMessages }) => {
  useEffect(() => {
    if (messages.length === 0) {
      loadMessages().catch((error) => {
        alert(`Loading messages failed ${error}`);
      });
    }
  }, [loadMessages, messages.length]);

  return (
    <>
      <h2>Messages</h2>
      <MessagesList messages={messages} />
    </>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  loadMessages: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages.map((message) => ({
      ...message,
    })),
  };
}

const mapDispatchToProps = {
  loadMessages: messageActions.loadMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
