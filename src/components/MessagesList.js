import React from 'react';
import PropTypes from 'prop-types';

const GetMessages = ({ messages }) => (
  <>
    {messages.map((message) => (
      <div key={message.id}>
        <p>{message.text}</p>
      </div>
    ))}
  </>
);

GetMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default GetMessages;
