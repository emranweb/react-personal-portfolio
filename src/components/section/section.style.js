import styled from "styled-components";

const SectionStyled = styled.section`
  padding-top: ${(props) => (props.padding ? props.padding[0] : 100)}px;
  padding-bottom: ${(props) => (props.padding ? props.padding[1] : 100)}px;
  background-color: ${(props) => (props.bgcolor ? "#f8f9fa" : "")};
`;

export default SectionStyled;
