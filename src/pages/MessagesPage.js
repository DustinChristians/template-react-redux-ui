import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as messageActions from '../redux/actions/message.actions';
import MessagesList from '../components/MessagesList';
import TextInput from '../components/common/TextInput';

const MessagesPage = ({ messages, loadMessages, saveMessage }) => {
  const [newMessage, setNewMessage] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (messages.length === 0) {
      loadMessages().catch((error) => {
        alert(`Loading messages failed ${error}`);
      });
    }
  }, [loadMessages, messages.length]);

  function handleChange(event) {
    const { value } = event.target;
    setNewMessage({ ...newMessage, text: value });
  }

  function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    saveMessage(newMessage).then(setSaving(false));
  }

  return (
    <>
      <h2>Messages</h2>
      <MessagesList messages={messages} />
      <TextInput
        name="addMessage"
        label="New Message"
        placeholder="Add a message"
        value={newMessage.text}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSave} disabled={saving} className="btn btn-primary">
        {saving ? 'Saving...' : 'Save'}
      </button>
    </>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  loadMessages: PropTypes.func.isRequired,
  saveMessage: PropTypes.func.isRequired,
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
  saveMessage: messageActions.saveMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
