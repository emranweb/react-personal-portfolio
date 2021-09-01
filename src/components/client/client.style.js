import styled from "styled-components";

const ClientStyle = styled.div`
  flex: 1 0 25%;
  text-align: center;
  max-width: 25%;
  border-left: 2px solid #eee;
  border-top: 2px solid #eee;
  padding: 40px 0px;
  &:nth-child(n + 5) {
    border-bottom: 2px solid #eee;
  }
  &:nth-child(4n + 4) {
    border-right: 2px solid #eee;
  }
`;

export default ClientStyle;
