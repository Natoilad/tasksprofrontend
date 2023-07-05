import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

const options = {
  scrollbars: {
    scrollbars: { autoHide: 'scroll' },
    overflow: {
      x: 'hidden',
    },
  },
};
export const useScrollbar = (root, hasScroll) => {
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
  }, [hasScroll, root]);
};
