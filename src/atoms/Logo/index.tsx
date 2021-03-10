import React, { ReactElement } from 'react';

import Logo from '@assets/Logo.png';

import './style.scss';

interface LogoProps {
  className: string;
  width: number;
  height: number;
}

export default function Logo({
  className,
  width = 60,
  height = 60,
}: LogoProps): ReactElement {
  return (
    <img
      className={`your-voice-emoji ${className}`}
      src={Logo}
      alt="logo"
      width={width}
      height={height}
    />
  );
}
