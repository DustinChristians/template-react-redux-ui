import React from 'react';
import PropTypes from 'prop-types';
import EditableTextInput from './common/UpdateDeleteTextInput';

const TextEditList = ({ items, setItems, handleSave, handleDelete, saving, validation }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={item.id}>
            <EditableTextInput
              item={item}
              handleSave={handleSave}
              handleDelete={handleDelete}
              saving={saving}
              validation={validation}
              onChange={(event) => {
                const updatedItems = items;
                updatedItems[i].text = event.target.value;
                setItems([...items]);
              }}
            />
          </div>
        );
      })}
    </>
  );
};

TextEditList.defaultProps = {
  validation: null,
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
  validation: PropTypes.shape({}),
};

export default TextEditList;
