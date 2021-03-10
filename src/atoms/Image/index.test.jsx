import React from 'react';

import { render, screen } from '@testing-library/react';

import Image from './index';

function renderApp({
  className, source, alt, style, width, height,
}) {
  return render(
    <Image
      className={className}
      source={source}
      alt={alt}
      style={style}
      width={width}
      height={height}
    />,
  );
}

describe('Image', () => {
  context('Image must have src and alt attributes', () => {
    it('when exist', () => {
      renderApp({ alt: 'test', source: 'test.png' });

      const logo = screen.getByRole('img');
      expect(logo).toHaveAttribute('alt', 'test');
      expect(logo).toHaveAttribute('src', 'test.png');
    });
    it('when unexist', () => {
      renderApp({});

      const logo = screen.getByRole('img');
      expect(logo).not.toHaveAttribute('alt', 'test');
      expect(logo).not.toHaveAttribute('src', 'test.png');
    });
  });
});
