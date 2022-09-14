import styled from "styled-components";

export const CardWrapper = styled.section`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fdf9f9;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgBOX = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
`;

export const Origin = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* or 143% */
  color: #757575;
`;
export const Breed = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
  /* or 143% */
  /* Grayscale / 700 */
  color: #191919;
  padding-bottom: 8px;
  width: 60%;
`;
