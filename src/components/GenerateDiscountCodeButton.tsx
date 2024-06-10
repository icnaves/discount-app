import React from 'react';
import { useDispatch } from 'react-redux';
import { generateDiscountCode } from '../features/discount/discountSlice';

const GenerateDiscountCodeButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(generateDiscountCode());
  };

  return (
    <div className="my-4">
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Discount Code
      </button>
    </div>
  );
};

export default GenerateDiscountCodeButton;
