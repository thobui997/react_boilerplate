import React from 'react';

interface Props {
  className?: string;
}

const Dot = (props: Props) => {
  return (
    <svg
      height='16'
      width='16'
      fill='none'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <rect height='5' width='5' stroke='#4F4F4F' transform='rotate(-45 4.70711 8)' x='4.70711' y='8' />
    </svg>
  );
};

export default Dot;
