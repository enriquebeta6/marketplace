// Dependencies
import React, { useState } from 'react';
import { useCountdown } from 'rooks';
import { formatDistanceToNow } from 'date-fns';
import Countdown from 'react-countdown';

// Style
import './Countdown.scss';

interface CountdownProps {
  title?: string;
  endTime?: Date;
}

const _endtime = new Date('June 26 2022 00:00:00 UTC');

const CountdownWrapper: React.FC<CountdownProps> = ({
  title = 'STARTS IN',
}) => {
  return (
    <section className='countdown'>
      <h3 className='countdown__title'>{title}</h3>
      <span className='countdown__count'>
        <Countdown date={_endtime} />
      </span>
      <br />
      <span className='countdown__text'>JUNE 26 AT 00:00 UTC</span>
    </section>
  );
};

export default CountdownWrapper;
