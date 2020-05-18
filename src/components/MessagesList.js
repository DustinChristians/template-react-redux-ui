import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const GetMessages = ({ messages, setMessages, saving, handleSave, handleDelete }) => {
  return (
    <>
      {messages.map((message, i) => (
        <div key={message.id}>
          <TextInput
            name="editMessage"
            value={message.text}
            onChange={(event) => {
              const updatedMessages = messages;
              updatedMessages[i].text = event.target.value;
              setMessages([...messages]);
            }}
          />
          <button
            type="submit"
            onClick={handleSave.bind(this, message.id)}
            disabled={saving}
            className="btn btn-primary"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button
            type="submit"
            onClick={handleDelete.bind(this, message.id)}
            disabled={saving}
            className="btn btn-primary"
          >
            {saving ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      ))}
    </>
  );
};

GetMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ).isRequired,
  saving: PropTypes.bool.isRequired,
  setMessages: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default GetMessages;
