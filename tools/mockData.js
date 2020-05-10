const messages = [
  {
    id: 1,
    text: 'At vero eos et accusamus',
  },
  {
    id: 2,
    text: 'Nam libero tempore',
  },
  {
    id: 3,
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
