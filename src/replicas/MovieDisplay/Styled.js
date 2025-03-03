import styled from "styled-components";

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: ${(props) =>
    props.isSelected ? "rgba(207, 207, 207, 0.3)" : "rgba(207, 207, 207, 0.1)"};
`;
