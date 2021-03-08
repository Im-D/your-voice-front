import React, { CSSProperties, ReactElement } from 'react';

import './style.scss';

type FontType = 'text1' | 'text2' | 'text3' | 'text4' | 'text5' | 'text6';

interface TextProps {
  text: string;
  fontType: FontType;
  inline?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEvent<HTMLParagraphElement | HTMLSpanElement>;
}

export default function Text({
  text = '',
  fontType = 'text1',
  inline = false,
  className = '',
  style,
  onClick,
}: TextProps): ReactElement {
  return inline ? (
    <p
      className={`your-voice-text inline ${fontType} ${className}`}
      style={style}
      onClick={onClick}
      role="presentation"
    >
      {text}
    </p>
  ) : (
    <span
      className={`your-voice-text ${fontType} ${className}`}
      style={style}
      onClick={onClick}
      role="presentation"
    >
      {text}
    </span>
  );
}
