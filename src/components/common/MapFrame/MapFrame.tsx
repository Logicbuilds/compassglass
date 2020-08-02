import React from 'react';

import { GOOGLE_MAP_CONFIGS } from 'application/config';

export interface MapFrameProps {
  city: 'capeTown' | 'george';
}

/**
 * Google map embed
 */
export const MapFrame: React.FC<MapFrameProps> = ({ city }) => {
  const { title, src } = GOOGLE_MAP_CONFIGS[city];
  return (
    <div className="map-frame">
      <iframe title={title} src={src} frameBorder="none"></iframe>
    </div>
  );
};

// https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters
