// Dependencies
import React, { useState } from 'react';
import classNames from 'classnames';
import { useDidUpdate } from 'rooks';

// Style
import './QuantityControl.scss';

interface QuantityControlProps {
  initialQuantity?: number;
  size?: 'small' | 'normal';
  onChange?(quantity: number): void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  size,
  onChange,
  initialQuantity = 0,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useDidUpdate(() => {
    onChange?.(quantity);
  }, [quantity]);

  return (
    <div
      className={classNames('quantity-control', {
        'quantity-control--small': size === 'small',
      })}
    >
      <button
        type='button'
        className='quantity-control__button'
        onClick={() => {
          const newQuantity = quantity - 1;

          if (newQuantity >= 0) {
            setQuantity(newQuantity);
          }
        }}
      >
        -
      </button>

      <span className='quantity-control__value'>{quantity}</span>

      <button
        type='button'
        className='quantity-control__button'
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
