import React, { ReactElement } from 'react';
import { getState } from '@store/states';
import { useRecoilValue } from 'recoil';

function MainComponent(): ReactElement {
  const count = useRecoilValue(getState('getCountState'));

  return (
    <>
      count is:
      {count}
    </>
  );
}

export default MainComponent;
