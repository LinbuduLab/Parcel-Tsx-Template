import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Home from '@/pages/home';

import AvatarURL from 'url:./assets/avatar.jpg';

interface IApp {
  name: string;
}

const StyledButton = styled.button`
  text-align: center;
  width: 190px;
  height: 45px;
  font-size: 20px;
  border-radius: 6px;
  background-color: steelblue;
  color: white;
  border: 0px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountPara = styled.p`
  text-align: center;
  font-size: 32px;
  color: salmon;
`;

const AvatarContainer = styled.div`
  display: flex;

  justify-content: center;
  margin-bottom: 25px;
`;

const Avatar = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 175px;
`;

const App: React.FC<IApp> = ({ name }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {}, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Hi! {name}</h1>
      <CountPara>{count}</CountPara>
      <AvatarContainer>
        <Avatar src={AvatarURL} />
      </AvatarContainer>
      <StyledButton
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Click to add count!
      </StyledButton>

      <div>
        <Home />
      </div>
    </>
  );
};

export default App;
