'use client';

import { getCookie, setCookie } from '@/app/actions/cookie';

import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

const AddButton = () => {
  const cookieName = 'access-count';

  const handleClick = () => {
    void (
      getCookie(cookieName) as unknown as Promise<RequestCookie | undefined>
    ).then((cookie) => {
      if (!cookie) {
        setCookie({ name: cookieName, value: '1' });
      } else {
        const newCookie = {
          name: cookieName,
          value: (parseInt(cookie.value) + 1).toString(),
        };
        console.log({ newCookie });
        setCookie(newCookie);
      }
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      add
    </button>
  );
};

export default AddButton;
