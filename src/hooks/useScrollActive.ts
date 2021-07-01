import { useEffect } from 'react';

const useScrollActive = (selectors: string[], setActiveItem: Function) => {
  useEffect(() => {
    const reversedSelectors = selectors.reverse();

    const onWheel = () => {
      const $visibleSelector = reversedSelectors.find((selector) => {
        const $el = document.querySelector(selector);

        if (!$el) return false;

        const { top } = $el.getBoundingClientRect();

        return top < 0;
      });

      if ($visibleSelector) {
        setActiveItem($visibleSelector);
      }
    };

    window.addEventListener('touchmove', onWheel);
    window.addEventListener('wheel', onWheel);

    return () => {
      window.removeEventListener('touchmove', onWheel);
      window.removeEventListener('wheel', onWheel);
    };
  }, []);
};

export default useScrollActive;
