'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';

const FancyButton = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;

      ref.current.setAttribute('style', 'color: red');
    }, 2000);
  });

  // this hook blocks the effect, so it causes performance issue.
  useLayoutEffect(() => {
    if (!ref.current) return;

    ref.current.setAttribute('style', 'color: green');
  });

  return (
    <button ref={ref} type="button">
      Click me
    </button>
  );
};

export default FancyButton;
