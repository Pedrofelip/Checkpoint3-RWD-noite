import styled from "styled-components";
import { colors } from "../../styles/Colors";
import { sizes } from "../../styles/Sizes";

export const ElementLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.span`
  font-size: ${sizes.large};
  font-weight: bold;
  color: ${colors.commom.light};
`;
