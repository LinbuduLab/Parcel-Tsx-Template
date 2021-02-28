import React from 'react';
import Home from '@/pages/home';

interface IApp {
  name: string;
}

const App: React.FC<IApp> = ({ name }) => {
  return (
    <>
      <p className="favor" style={{ textAlign: 'center' }}>
        Hi! {name}
      </p>
      <Home />
    </>
  );
};

export default App;
