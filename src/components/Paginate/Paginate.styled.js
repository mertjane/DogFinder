import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
`;

export const LoadBtn = styled.button`
  width: 7vw;
  height: 4vh;
  border: none;
  outline: none;
  margin-top: 8px;
  background: #6a6af5;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  font-weight: 600;
  font-size: 14px;
`;