import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  display: block;
  

`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin-top: -1px;  
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  font-family: sans-serif;
  text-align: center;
`;
export const StyledGrid = styled(({ ...props }) => <div {...props} />)`
  background-image: url("/img/background.png");
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-template-rows: auto auto;
  flex-wrap: nowrap | wrap | wrap-reverse;

// `;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  display: inline-block;
  width: 55%;
  margin: 30px 200px 0 120px;
  
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 75%;
  margin: 60px 190px 0 200px;
// `;






