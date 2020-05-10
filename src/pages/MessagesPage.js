import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as messageActions from '../redux/actions/message.actions';
import MessagesList from '../components/MessagesList';
import TextInput from '../components/common/TextInput';

const MessagesPage = ({ messages, loadMessages }) => {
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (messages.length === 0) {
      loadMessages().catch((error) => {
        alert(`Loading messages failed ${error}`);
      });
    }
  }, [loadMessages, messages.length]);

  function handleChange(event) {
    const { value } = event.target;
    setNewMessage(value);
  }

  return (
    <>
      <h2>Messages</h2>
      <MessagesList messages={messages} />
      <TextInput
        name="addMessage"
        label="New Message"
        placeholder="Add a message"
        value={newMessage}
        onChange={handleChange}
      />
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
