import styled from "styled-components";
import logo from "../../assets/logo.png";

export const HeaderContainer = styled.section`
  width: 100%;
  height: 144px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F1F1F1;
`;

export const LogoIMG = styled.div`
  width: 156px;
  height: 100%;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Divider = styled.hr`
  width: 85%;
  border: none;
  height: 1px;
  /* Set the hr color */
  color: #333; /* old IE */
  background-color: #333; /* Modern Browsers */
  opacity: 0.2;
  align-self: center;
`;
