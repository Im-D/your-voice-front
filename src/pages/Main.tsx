import React, { ReactElement } from 'react';
// import { useRecoilState } from 'recoil';
import './Main.scss';
// import { MainComponent } from '@components';
// import { state } from '@store/states';

function Main(): ReactElement {
  // const [count, setCount] = useRecoilState(state('countState'));

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <div className="App">
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
