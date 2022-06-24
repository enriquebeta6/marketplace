// Dependencies
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

// Styles
import './PixelDetails.scss';

// Custom Hooks
import useMiniCartContext from '../../hooks/useMiniCartContext';
import useLand from '../../hooks/useLand';

const PixelDetails: React.FC = () => {
  const { x, y } = useParams();
  const landContract = useLand();
  const { addLand, removeLand, lands } = useMiniCartContext();
  const [isPixelAvailable, setIsPixelAvailable] = useState(false);

  useEffect(() => {
    const pixel = {
      x: parseInt(x as string, 10),
      y: parseInt(y as string, 10),
    };

    landContract.isPixelAvailable(pixel.y, pixel.x).then(setIsPixelAvailable);
  }, []);

  function isSelected(position: number) {
    const land = {
      position,
      x: parseInt(x as string, 10),
      y: parseInt(y as string, 10),
    };

    const finded = lands?.find(
      (_land) =>
        _land.x === land.x &&
        _land.y === land.y &&
        _land.position === land.position
    );

    return !!finded;
  }

  function handlePositionClick(position: number) {
    const land = {
      position,
      x: parseInt(x as string, 10),
      y: parseInt(y as string, 10),
    };

    if (!isSelected(position)) {
      addLand?.(land);

      return;
    }

    removeLand?.(land);
  }

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '500px',
          height: '497px',
        }}
      >
        <div
          style={{
            backgroundImage: 'url(/images/city_01.png)',
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '500px',
            height: '32px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_02.png)',
            position: 'absolute',
            left: '0px',
            top: '32px',
            width: '97px',
            height: '465px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(0),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(0)}
          style={{
            backgroundImage: 'url(/images/land-a.png)',
            position: 'absolute',
            left: '97px',
            top: '32px',
            width: '54px',
            height: '41px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_04.png)',
            position: 'absolute',
            left: '151px',
            top: '32px',
            width: '148px',
            height: '271px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(1),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(1)}
          style={{
            backgroundImage: 'url(/images/land-b.png)',
            position: 'absolute',
            left: '299px',
            top: '32px',
            width: '41px',
            height: '53px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_06.png)',
            position: 'absolute',
            left: '340px',
            top: '32px',
            width: '160px',
            height: '121px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_07.png)',
            position: 'absolute',
            left: '97px',
            top: '73px',
            width: '54px',
            height: '275px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(2),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(2)}
          style={{
            backgroundImage: 'url(/images/land-c.png)',
            position: 'absolute',
            left: '299px',
            top: '85px',
            width: '41px',
            height: '54px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_09.png)',
            position: 'absolute',
            left: '299px',
            top: '139px',
            width: '41px',
            height: '160px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_10.png)',
            position: 'absolute',
            left: '340px',
            top: '153px',
            width: '18px',
            height: '146px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(3),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(3)}
          style={{
            backgroundImage: 'url(/images/land-d.png)',
            position: 'absolute',
            left: '358px',
            top: '153px',
            width: '53px',
            height: '41px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_12.png)',
            position: 'absolute',
            left: '411px',
            top: '153px',
            width: '89px',
            height: '267px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_13.png)',
            position: 'absolute',
            left: '358px',
            top: '194px',
            width: '53px',
            height: '105px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_14.png)',
            position: 'absolute',
            left: '299px',
            top: '299px',
            width: '36px',
            height: '198px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(4),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(4)}
          style={{
            backgroundImage: 'url(/images/land-h.png)',
            position: 'absolute',
            left: '335px',
            top: '299px',
            width: '54px',
            height: '43px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_16.png)',
            position: 'absolute',
            left: '389px',
            top: '299px',
            width: '22px',
            height: '121px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_17.png)',
            position: 'absolute',
            left: '151px',
            top: '303px',
            width: '15px',
            height: '45px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(5),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(5)}
          style={{
            backgroundImage: 'url(/images/land-e.png)',
            position: 'absolute',
            left: '166px',
            top: '303px',
            width: '42px',
            height: '54px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_19.png)',
            position: 'absolute',
            left: '208px',
            top: '303px',
            width: '91px',
            height: '194px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(6),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(6)}
          style={{
            backgroundImage: 'url(/images/land-i.png)',
            position: 'absolute',
            left: '335px',
            top: '342px',
            width: '54px',
            height: '43px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_21.png)',
            position: 'absolute',
            left: '97px',
            top: '348px',
            width: '22px',
            height: '149px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(7),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(7)}
          style={{
            backgroundImage: 'url(/images/land-f.png)',
            position: 'absolute',
            left: '119px',
            top: '348px',
            width: '42px',
            height: '50px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_23.png)',
            position: 'absolute',
            left: '161px',
            top: '348px',
            width: '5px',
            height: '149px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(8),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(8)}
          style={{
            backgroundImage: 'url(/images/land-g.png)',
            position: 'absolute',
            left: '166px',
            top: '357px',
            width: '42px',
            height: '53px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_25.png)',
            position: 'absolute',
            left: '335px',
            top: '385px',
            width: '54px',
            height: '35px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_26.png)',
            position: 'absolute',
            left: '119px',
            top: '398px',
            width: '42px',
            height: '99px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_27.png)',
            position: 'absolute',
            left: '166px',
            top: '410px',
            width: '42px',
            height: '87px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_28.png)',
            position: 'absolute',
            left: '335px',
            top: '420px',
            width: '19px',
            height: '77px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(9),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(9)}
          style={{
            backgroundImage: 'url(/images/land-j.png)',
            position: 'absolute',
            left: '354px',
            top: '420px',
            width: '57px',
            height: '42px',
          }}
        ></div>
        <div
          className={classNames('land-position', {
            'land-position--selected': isPixelAvailable && isSelected(10),
            'land-position--disabled': !isPixelAvailable,
          })}
          onClick={() => handlePositionClick(10)}
          style={{
            backgroundImage: 'url(/images/land-k.png)',
            position: 'absolute',
            left: '411px',
            top: '420px',
            width: '53px',
            height: '42px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_31.png)',
            position: 'absolute',
            left: '464px',
            top: '420px',
            width: '36px',
            height: '77px',
          }}
        ></div>
        <div
          style={{
            backgroundImage: 'url(/images/city_32.png)',
            position: 'absolute',
            left: '354px',
            top: '462px',
            width: '110px',
            height: '35px',
          }}
        ></div>
      </div>
    </>
  );
};

export default PixelDetails;
