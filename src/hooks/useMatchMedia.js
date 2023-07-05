// import { useState, useLayoutEffect } from 'react';

// export const useMatchMedia = () => {
//   const mediaQueryList = queries.map(query => matchMedia(query));

//   const getValues = mediaQueryList.map(item => item.matches);

//   const [values, setValues] = useState(getValues);

//   useLayoutEffect(() => {
//     const handler = setValues(getValues);

//       mediaQueryList.forEach(query => query.addEventListener('change', handler));
//       return () => {mediaQueryList.forEach(query =>
//         query.removeEventListener('change', handler)
//       );}
//   });

//   return ['isMobile', 'isTablet', 'isDesktop'].reduce(
//     (acc, screen, index) => ({
//       ...acc,
//       [screen]: values[index],
//     }),
//     {}
//   );
// };

import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 767px)',
  '(min-width: 768px)and (max-width: 1279px)',
  '(min-width: 1280px)',
];
export const useMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
