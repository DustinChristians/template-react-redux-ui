import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import TextInput from './common/TextInput';

const EditableTextInput = ({ item, handleSave, handleDelete, onChange, saving, validation }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <TextInput
      name={`editItem${item.id}`}
      defaultValue={item.text}
      reference={register(validation)}
      validationErrors={errors}
      onChange={onChange}
    >
      <button
        type="submit"
        onClick={handleSubmit(handleSave.bind(this, item.id))}
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
        Delete
      </button>
    </TextInput>
  );
};

EditableTextInput.defaultProps = {
  validation: null,
};

EditableTextInput.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  validation: PropTypes.shape({}),
};

export default EditableTextInput;
