// Dependencies
import React from 'react';
import classNames from 'classnames';

// Style
import './Progress.scss';

interface ProgressProps {
  percentage: number;
  variant?: 'default' | 'bigger';
}

const Progress: React.FC<ProgressProps> = ({ percentage }) => {
  const progress = `${percentage}%`;

  return (
    <div className={classNames('progress')}>
      <div className='progress__bar'>
        <div className='progress__bar-inner' style={{ width: progress }}></div>
      </div>

      <div className='progress__text'>
        <span className='progress__title'>Progress</span>

        <span className='progress__value'>{progress}</span>
      </div>
    </div>
  );
};

export default Progress;
