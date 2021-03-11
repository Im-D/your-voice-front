import React, { CSSProperties, ReactElement } from 'react';

import './style.scss';

interface ImageProps {
  source: string;
  className?: string;
  alt: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
}

function Image({
  className = '',
  source,
  alt,
  style = {},
  width = 100,
  height = 100,
}: ImageProps): ReactElement {
  return (
    <img
      className={`your-voice-image ${className}`}
      src={source}
      alt={alt}
      style={style}
      width={width}
      height={height}
    />
  );
}

export default React.memo(Image);
