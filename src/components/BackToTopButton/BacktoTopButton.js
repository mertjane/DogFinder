import { useEffect, useState } from "react";
import { ToTopBtn } from "./BackToTop.styled";
import { MdKeyboardArrowUp } from "react-icons/md";

const btnStyle = {
  color: "#6a6af5",
};

const BacktoTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1800) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <ToTopBtn onClick={scrollUp}>
          <MdKeyboardArrowUp style={btnStyle} size={35} />
        </ToTopBtn>
      )}
    </>
  );
};

export default BacktoTopButton;
