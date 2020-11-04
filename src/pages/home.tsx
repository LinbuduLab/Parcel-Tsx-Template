import React from 'react';
import styled from 'styled-components';

export const Para = styled.p<{ size?: string }>`
  font-size: ${(props) => props.size || '1em'};
  text-align: center;
  color: steelblue;
`;

const Home: React.FC = () => {
  return (
    <>
      <Para size={'1.5em'}>Your Warm Home!</Para>
    </>
  );
};

export default Home;
