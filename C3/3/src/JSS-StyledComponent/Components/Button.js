import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "orange")};
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  padding: 1rem;
  font-size: ${(props) => (props.fontsize2x ? "2rem" : "3rem")};
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transition: all 0.5s;
  }
`;

export const SmallButton = styled(Button)`
  background-color: green;
  font-size: 5rem;
  padding: 0.5rem;
`;
