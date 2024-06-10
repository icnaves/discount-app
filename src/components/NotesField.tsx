import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setNotes } from '../features/discount/discountSlice';

const NotesField: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.discount.notes);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNotes(event.target.value));
  };

  return (
    <div className="my-4">
      <label className="block">
        <textarea
          value={notes}
          onChange={handleChange}
          placeholder="Enter your notes here"
          className="border p-2 w-full"
        />
      </label>
    </div>
  );
};

export default NotesField;
