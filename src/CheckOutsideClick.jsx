// CheckOutsideClick.jsx

import React, { useEffect, useRef } from 'react';

function useOutsideClick(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}

const CheckOutsideClick = ({ children, onClickOutside }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
};

export default CheckOutsideClick;
