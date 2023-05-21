import { FC } from "react";
import styled from "styled-components";

type VerticalSize = "16px" | "18px" | "24px";

type VerticalSizeProps = {
  spacing: VerticalSize;
};

const VerticalSizeStyled = styled.div<VerticalSizeProps>`
  margin: ${(props) => props.spacing} ${(props) => props.spacing};
`;

const VerticalSpace: FC<VerticalSizeProps> = (props) => {
  return <VerticalSizeStyled {...props} />;
};

export default VerticalSpace;
