import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledSpace
} from "./elements";

export const CardComponent = ({ cardProps }) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        {cardProps.map(card =>
        <>
          <StyledTitle>
            <img src={card.img} alt="" />
            <div>
              <h1>{card.title}</h1>
              <h4>{card.subtitle}</h4>
            </div>
          </StyledTitle>
          <StyledSpace>
            <p></p>
          </StyledSpace>
          </>)}
      </StyledTextContainer>
    </StyledContainer>
  );
};