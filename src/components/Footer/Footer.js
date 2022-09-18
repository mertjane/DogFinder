import React from "react";
import { FooterContainer, FooterContent } from "./Footer.styled";
import { BsDot } from "react-icons/bs";

const dotStyle = {
  display: "flex",
  alignSelf: "center",
  color: "black",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContent>
        © {currentYear}
        <BsDot size={20} style={dotStyle} />
        Privacy Policy
      </FooterContent>
    </FooterContainer>
  );
};

export default React.memo(Footer);
