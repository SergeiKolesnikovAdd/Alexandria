import styled from "@emotion/styled";
import { getCurrentPaddingStyle } from "styles";
import { colors } from "styles";

export const HeaderWrapper = styled.div`
width: 100%;
position : fixed;
background-color: transparent;
display:flex;
justify-content: space-between;
align-items:center;
${getCurrentPaddingStyle('horizontal', 'lg')}
`;

export const HeaderMenu = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`;