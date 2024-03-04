import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  color: #6f6f6f;
`;

export const EmployeeInfoText = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: black;
`;
