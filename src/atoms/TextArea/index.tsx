import React, { ReactElement, ReactChild, ReactChildren } from 'react';

import './style.scss';

type TextAreaProps = {
  className?: string,
  name?: string,
  rows?: number,
  cols?: number,
  maxLength?: number,
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

export default function TextArea({
  className = '',
  name = '',
  rows = 5,
  cols = 33,
  maxLength = 140,
  children,
}: TextAreaProps): ReactElement {
  return (
    <textarea
      className={`your-voice-textarea ${className}`}
      name={name}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
    >
      {children}
    </textarea>
  );
}
