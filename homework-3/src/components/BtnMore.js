import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  outline: none;
`;

const SpanDot = styled.span`
  position: relative;
  width: 4px;
  height: 4px;
  background-color: #dce0ec;
  border-radius: 50%;
`;

const BtnMore = () => {
  return (
    <Btn type='button'>
      <SpanDot />
      <SpanDot />
      <SpanDot />
    </Btn>
  );
};

export default BtnMore;
