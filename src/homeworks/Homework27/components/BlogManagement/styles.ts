import styled from "@emotion/styled";

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 600px;
  min-height: 400px;
  max-height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

export const TextArea = styled.textarea`
  min-height: 100px;
  min-width: 100%;
  max-width: 100%;
  font-size: 20px;
`;