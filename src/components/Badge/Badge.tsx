// Dependencies
import React, { ReactElement } from 'react';
import classNames from 'classnames';

// Style
import './Badge.scss';

interface BadgeProps {
  text: ReactElement | string;
  variant?: 'grey' | 'green' | 'red';
}

const Badge: React.FC<BadgeProps> = ({ variant = 'grey', text }) => (
  <span
    className={classNames('badge', {
      'badge--green': variant === 'green',
      'badge--grey': variant === 'grey',
      'badge--red': variant === 'red',
    })}
  >
    {text}
  </span>
);

export default Badge;
