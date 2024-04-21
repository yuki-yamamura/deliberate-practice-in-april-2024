'use client';

import { deleteCookie } from '@/app/actions/cookie';

const ResetButton = () => {
  const cookieName = 'access-count';
  const handleClick = () => deleteCookie(cookieName);

  return (
    <button type="button" onClick={handleClick}>
      reset
    </button>
  );
};

export default ResetButton;
