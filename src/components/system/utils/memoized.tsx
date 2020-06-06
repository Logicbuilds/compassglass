import React from 'react';

export const memoized = (ComponentFn: React.FC) => React.memo(ComponentFn);
