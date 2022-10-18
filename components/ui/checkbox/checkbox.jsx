import { Caption,  } from "components";
import Link from "next/link";
import { useState } from "react";
import { colors } from "styles";
import {
  CheckboxWrapper,
  CheckboxBorder,
  CheckboxInner,
  TextWrapper,
  StyledCaption,
} from "./checkbox.style";

export const Checkbox = ({ error, isActive, setActive,  ...props} ) => {

  return (
    <CheckboxWrapper {...props} onClick={setActive}>
      <CheckboxBorder isActive={isActive} isError={error}>
        <CheckboxInner isActive={isActive} isError={error} />
      </CheckboxBorder>
      <TextWrapper>
        <Caption isError={error}>Я даю согласие на обработку моих</Caption>


        <StyledCaption isError={error}><Link href="/politica" ><a style={{color: colors.black}}
          target="_blank">персональных данных</a></Link></StyledCaption>

      </TextWrapper>
    </CheckboxWrapper>
  );
};
