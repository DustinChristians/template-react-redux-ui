const messages = [
  {
    text: 'At vero eos et accusamus',
  },
  {
    text: 'Nam libero tempore',
  },
  {
    text: 'rerum necessitatibus saepe',
  },
];

const newMessage = {
  text: '',
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  messages,
  newMessage,
};
