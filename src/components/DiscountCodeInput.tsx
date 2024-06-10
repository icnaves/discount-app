import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setDiscountCode } from '../features/discount/discountSlice';

const DiscountCodeInput: React.FC = () => {
  const dispatch = useDispatch();
  const discountCode = useSelector((state: RootState) => state.discount.discountCode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const code = event.target.value;
    if (/^DISCOUNT2024$/.test(code)) {
      dispatch(setDiscountCode(code));
    } else {
      dispatch(setDiscountCode(''));
    }
  };

  return (
    <div className="my-4">
      <label className="block">
        <input
          type="text"
          value={discountCode}
          onChange={handleChange}
          placeholder="Enter discount code"
          className="border p-2"
        />
      </label>
    </div>
  );
};

export default DiscountCodeInput;
