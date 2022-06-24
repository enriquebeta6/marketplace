// Dependencies
import React from 'react';
import classNames from 'classnames';

// Styles
import './Section.scss';

interface Item {
  name: string;
  value: string;
}

export interface SectionProps {
  title: string;
  items: Item[];
  variant: string;
}

const Section: React.FC<SectionProps> = ({ title, variant, items }) => (
  <section className='nft-sale-details__section'>
    <h3 className='section__title'>{title}</h3>

    <ul
      className={classNames('section__list', {
        'section__list--list': variant === 'list',
        'section__list--gallery': variant === 'gallery',
      })}
    >
      {variant === 'gallery' &&
        items.map(({ name, value }) => (
          <li className='section__item' key={name}>
            <img
              src={value}
              alt={name}
              width={38}
              height={38}
              className='section__item-image'
            />
          </li>
        ))}

      {variant === 'list' &&
        items.map(({ name, value }) => (
          <li className='section__item' key={name}>
            <span className='section__item-name'>{name}</span>

            <span className='section__item-value'>{value}</span>
          </li>
        ))}
    </ul>
  </section>
);

export default Section;
