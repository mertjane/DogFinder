import styled from "styled-components"


export const MainWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`
export const ButtonWrap = styled.div`
  width: 100%;
  height: auto;
  align-self: flex-start;
  padding: 10px 175px 20px;
`
export const BackBtn = styled.button`
  width: 110px;
  height: 5.12vh;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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
  font-size: 16px;
`

export const Wrapper = styled.section`
  width: 85%;
  height: 60vh;
  display: flex;
  background: #fdf9f9;
  padding: 15px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const Img = styled.img`
  width: 48%;
  border-radius: 12px;
`;

export const Info = styled.section`
  width: 52%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 12px;
`;

export const Breed = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  /* or 143% */
  /* Grayscale / 700 */
  color: #191919e4;
  
`;

export const Pupularity = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 20px;
  /* or 143% */
  /* Grayscale / 700 */
  color: #191919;
  display: flex;
  
  align-items: center;
`;

export const Origin = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  /* or 143% */
  color: #757575;
  
`;

export const Temperament = styled.p`
  width: 100%;
  text-align: start;
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  /* or 143% */
  /* Grayscale / 700 */
  color: #353434c0;
`;

export const Summary = styled.p`
  width: 100%;
  height: 100%;
  text-align: start;
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  /* or 143% */
  /* Grayscale / 700 */
  color: #353434c0;
  padding-top: 1rem;

  
`;