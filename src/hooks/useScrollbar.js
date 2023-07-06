import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

export const useScrollbar = (root, hasScroll, options) => {
  useEffect(() => {
    let scrollbar;

    if (root.current && hasScroll) {
      scrollbar = OverlayScrollbars(root.current, options);
    }

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, [hasScroll, options, root]);
};
