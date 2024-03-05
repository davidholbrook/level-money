import React from 'react';
import PropTypes from 'prop-types';

function Icons({ icon }) {
  switch (icon) {
    /* eslint-disable-next-line */
    case "plus":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#383737"
          strokeWidth="2"
          className="w-6 h-6 -mt-1"
        >
          <path d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      );
    default:
      break;
  }
}

export default Icons;

Icons.propTypes = {
  icon: PropTypes.string,
};
