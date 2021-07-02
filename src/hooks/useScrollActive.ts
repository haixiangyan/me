import { useEffect } from 'react';

const useScrollActive = (selectors: string[], setActiveItem: Function) => {
  useEffect(() => {
    const reversedSelectors = selectors.reverse();

    const onScroll = () => {
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

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
};

export default useScrollActive;
