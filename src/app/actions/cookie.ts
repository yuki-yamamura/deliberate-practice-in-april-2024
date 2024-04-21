'use server';

import { cookies } from 'next/headers';

import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export const setCookie = (cookie: RequestCookie): void => {
  cookies().set(cookie.name, cookie.value);
};

export const getCookie = (cookieName: string) => {
  return cookies().get(cookieName);
};

export const deleteCookie = (cookieName: string): void => {
  cookies().delete(cookieName);
};
