import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSelectedOption } from '../features/discount/discountSlice';

const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.discount.selectedOption);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(event.target.value));
  };

  return (
    <div className="my-4">
      <label className="block">
        <input
          type="radio"
          value="Option A"
          checked={selectedOption === 'Option A'}
          onChange={handleChange}
          className="mr-2"
        />
        Option A
      </label>
      <label className="block">
        <input
          type="radio"
          value="Option B"
          checked={selectedOption === 'Option B'}
          onChange={handleChange}
          className="mr-2"
        />
        Option B
      </label>
      <label className="block">
        <input
          type="radio"
          value="Option C"
          checked={selectedOption === 'Option C'}
          onChange={handleChange}
          className="mr-2"
        />
        Option C
      </label>
    </div>
  );
};

export default RadioButtons;
