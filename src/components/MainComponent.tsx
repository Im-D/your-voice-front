import React, { ReactElement } from 'react';
import { getCountState } from '@store/states';
import { useRecoilValue } from 'recoil';

function MainComponent(): ReactElement {
  const count = useRecoilValue(getCountState);

  return (
    <>
      count is:
      {' '}
      {count}
    </>
  );
}

export default MainComponent;
