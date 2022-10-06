import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCardContainer,
  StyledGrid
} from "./elements";

export const Main = ({ image, title, description, card, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledGrid>
        <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
        <StyledCardContainer>{card}</StyledCardContainer>
        </StyledGrid>
        
    </StyledContainer>
  );
};
