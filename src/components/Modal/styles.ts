import styled from "styled-components";
import Button from "../Button";

export const Overlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled("div")`
  min-width: 360px;
  min-height: 300px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
export const CloseButton = styled(Button)`
  border-radius: 4px;
  width: 30px;
  padding: 0;
  margin: 0 0 8px auto;
`;
