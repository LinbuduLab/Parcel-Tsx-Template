import React from 'react';
import Home from '@/pages/home';

interface IApp {
  name: string;
}

const App: React.FC<IApp> = ({ name }) => {
  return (
    <>
      <p className="favor">Hi! {name}</p>
      <Home />
    </>
  );
};

export default App;
