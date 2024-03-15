import styled from "@emotion/styled";

import { colors } from "styles/colors";

export const EmployeeFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 70px;
  background-color: black;
`;

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: fit-content;
  padding: 60px;
  gap: 20px;
  background-color: white;
`;

export const EmployeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: fit-content;
  padding: 60px;
  gap: 20px;
  background-color: white;
`;

export const EmployeeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmployeeTitle = styled.h2`
  font-size: 16px;
  color: ${colors.typical};
`;

export const EmployeeInfoText = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: black;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CheckboxLabel = styled.label`
  font-size: 16px;
  color: ${colors.typical};
`;

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const ErrorContainer = styled.div`
  font-size: 16px;
  color: red;
  height: 18px;
`;
