import React from 'react';

interface Props {
  className?: string;
}

const User = (props: Props) => {
  return (
    <svg
      height='24'
      width='24'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <path
        d='M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 8.84281 16.0031 10.4528 14.5191 11.32C18.8225 12.4367 22 16.3473 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21C2 16.3473 5.17753 12.4367 9.4809 11.32C7.99694 10.4528 7 8.84281 7 7ZM4.06189 20H19.9381C19.446 16.0537 16.0796 13 12 13C7.92039 13 4.55399 16.0537 4.06189 20Z'
        fill='#333333'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default User;
