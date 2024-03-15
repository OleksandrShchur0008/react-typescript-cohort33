import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: fit-content;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${({ disabled }) =>
    disabled ? "lightgrey" : "transparent"};

  &::placeholder {
    color: #6f6f6f;
  }

  &:hover {
    border: ${({ disabled }) =>
      disabled ? "1px solid black" : "1px solid #1f27f5"};
  }
`;

export const ErrorContainer = styled.div`
  font-size: 16px;
  color: red;
`;
