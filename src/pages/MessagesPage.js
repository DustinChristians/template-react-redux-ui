import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../components/common/Spinner';
import * as messageActions from '../redux/actions/message.actions';
import TextEditList from '../components/TextEditList';
import TextInput from '../components/common/TextInput';

const MessagesPage = ({ messages, loadMessages, saveMessage, deleteMessage, loading }) => {
  const alert = useAlert();
  const [editedMessages, setEditedMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (messages.length === 0 && !loading) {
      loadMessages().then((loadedMessages) => {
        setEditedMessages([loadedMessages]);
      });
    } else {
      setEditedMessages(messages);
    }
  }, [loadMessages, messages, messages.length, loading]);

  async function handleDelete(messageId) {
    const message = editedMessages.find(({ id }) => id === messageId);

    try {
      await deleteMessage(message);
      alert.success('Message deleted');
    } catch (error) {
      setSaving(false);
      alert.error(error.message);
    }
  }

  function handleSave(messageId) {
    const message = editedMessages.find(({ id }) => id === messageId);

    setSaving(true);
    saveMessage(message)
      .then(() => {
        setSaving(false);
        alert.success('Message updated');
      })
      .catch((error) => {
        setSaving(false);
        alert.error(error.message);
        setErrors({ onSave: error.message });
      });
  }

  function handleNewChange(event) {
    const { value } = event.target;

    setNewMessage({ ...newMessage, text: value });
  }

  function handleNewSave() {
    setSaving(true);
    saveMessage(newMessage)
      .then(() => {
        setSaving(false);
        alert.success('Message created');
      })
      .catch((error) => {
        setSaving(false);
        alert.error(error.message);
        setErrors({ onSave: error.message });
      });
  }

  return (
    <div className="container container-fluid">
      <h2>Messages</h2>
      {messages.length === 0 ? (
        <Spinner />
      ) : (
        <>
          {errors.onSave && (
            <div className="alert alert-danger" role="alert">
              {errors.onSave}
            </div>
          )}
          {editedMessages.length && (
            <TextEditList
              items={editedMessages}
              setItems={setEditedMessages}
              handleSave={handleSave}
              handleDelete={handleDelete}
              saving={saving}
            />
          )}
          <TextInput
            name="newMessage"
            placeholder="Add a message"
            value={newMessage.text}
            onChange={handleNewChange}
          >
            {' '}
            <button
              type="submit"
              onClick={handleNewSave}
              disabled={saving}
              className="btn btn-primary"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </TextInput>
        </>
      )}
    </div>
  );
};

MessagesPage.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  loadMessages: PropTypes.func.isRequired,
  saveMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages.map((message) => ({
      ...message,
    })),
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadMessages: messageActions.loadMessages,
  saveMessage: messageActions.saveMessage,
  deleteMessage: messageActions.deleteMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
