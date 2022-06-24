// Dependencies
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// Styles
import './Pixel.scss';

interface PixelProps {
  y: number;
  x: number;
  disabled?: boolean;
  variation: string;
}

const Pixel: React.FC<PixelProps> = ({ disabled, variation, x, y }) => {
  return (
    <Link
      to={`${y}/${x}`}
      className={classNames('pixel', {
        [`pixel--${variation}`]: variation,
        'pixel--disabled': disabled,
      })}
    />
  );
};

export default Pixel;
