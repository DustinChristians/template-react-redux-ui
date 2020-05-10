import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as messageActions from '../redux/actions/message.actions';
import MessagesList from '../components/MessagesList';

const MessagesPage = ({ messages, actions }) => {
  useEffect(() => {
    if (messages.length === 0) {
      actions.loadMessages().catch((error) => {
        alert(`Loading messages failed ${error}`);
      });
    }
  }, [actions, messages.length]);

  return (
    <>
      <h2>Messages</h2>
      <MessagesList messages={messages} />
    </>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  actions: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages.map((message) => ({
      ...message,
    })),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMessages: bindActionCreators(messageActions.loadMessages, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
