import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-end;
  .item-image {
    flex: 1 0 220px;
    max-width: 220px;
    opacity: 0.6;
    transition: all 0.4s ease;
  }
  .item-image.active {
    opacity: 1;
  }
`;

export const ContentWrapper = styled.div`
  p {
    font-size: 15px;
    font-weight: normal;
    line-height: 24px;
  }
`;

export const PersonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  h4 {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 2px;
    line-height: 1;
    position: relative;
    letter-spacing: 0.8px;
    margin-top: 10px;
  }

  img {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
    min-width: 65px;
    margin-right: 20px;
  }

  p {
    font-size: 15px;
    color: #333;
    font-weight: 400;
    display: block;
    letter-spacing: 0.8px;
  }
`;

export const IconWrapper = styled.div`
  svg {
    width: 50px;
    height: 50px;
    fill: #000;
    margin-bottom: 30px;
  }
`;
