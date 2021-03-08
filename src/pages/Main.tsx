import React, { ReactElement } from 'react';
// import { useRecoilState } from 'recoil';
import './Main.scss';
// import { MainComponent } from '@components';
// import { state } from '@store/states';

import { Text } from '@atoms';

function Main(): ReactElement {
  // const [count, setCount] = useRecoilState(state('countState'));

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <div className="App">
      <Text text="text1" fontType="text1" />
      <Text text="text2" fontType="text2" />
      <Text text="text3" fontType="text3" />
      <Text text="text4" fontType="text4" />
      <Text text="text5" fontType="text5" />
      <Text text="text6" fontType="text6" />

      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button
            // onClick={() => setCount((prevCount: number) => prevCount + 1)}
            type="button"
          >
            {/* <MainComponent /> */}
          </button>
        </p>
        <p>
          Edit
          {' '}
          <code>App.tsx</code>
          {' '}
          and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default Main;
