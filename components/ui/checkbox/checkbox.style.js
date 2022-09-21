import styled from "@emotion/styled";

export const CheckboxWrapper = styled.div`
  display: flex;
`;

export const CheckboxBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #d17456;
  border-radius: 12px;
`;

export const CheckboxInner = styled.div`
  background-color: #000;
  width: 24px;
  height: 24px;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;
