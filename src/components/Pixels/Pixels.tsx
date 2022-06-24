// Dependencies
import React from 'react';

// Styles
import './Pixels.scss';

// Components
import Pixel from '../Pixel/Pixel';

// Data
import pixels from '../../data/pixels';

const x: number[] = [];
const y: number[] = [];

for (let i = 0; i < 26; i++) {
  x.push(i + 1);
  y.push((i + 1) * -1);
}

const Pixels: React.FC = () => {
  return (
    <div className='pixels-container'>
      <div className='coordinates coordinates-x'>
        {x.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>

      <div className='coordinates coordinates-y'>
        {y.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>

      <div className='pixels'>
        {pixels.map((pixel) => (
          <Pixel {...pixel} key={`${pixel.y}y-${pixel.x}x`} />
        ))}
      </div>
    </div>
  );
};

export default Pixels;
