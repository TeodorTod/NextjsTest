import styled from "styled-components";
import { SectionContainer, SectionBigHeading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-color: #EEF1FF;
  text-align: left;
  margin-left: -120px;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  align-items: center;
h1 {
  font-size: 24px
}
h4 {
  font-size: 14px;
  line-height: 1.4rem;
  left: 100%;
  font-weight: 400;
}
}
img {
  width: 40px;
  height: 40px;
  margin-right: auto;
  top: 50%;
  left: 50%;
}
 p {
  margin-bottom: 5px;
  background-color: white;
 }

`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`

`;

export const StyledSpace = styled(({ ...props }) => <div {...props} />)`
width: 100%;
background-color: white;
padding-bottom: 20px;
`;



