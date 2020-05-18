import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const TextEditList = ({ items, setItems, handleSave, handleDelete, saving }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={item.id}>
          <TextInput
            name="editItem"
            value={item.text}
            onChange={(event) => {
              const updatedItems = items;
              updatedItems[i].text = event.target.value;
              setItems([...items]);
            }}
          />
          <button
            type="submit"
            onClick={handleSave.bind(this, item.id)}
            disabled={saving}
            className="btn btn-primary"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button
            type="submit"
            onClick={handleDelete.bind(this, item.id)}
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

TextEditList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ).isRequired,
  setItems: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
};

export default TextEditList;
