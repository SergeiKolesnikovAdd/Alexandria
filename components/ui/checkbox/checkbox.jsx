import { Caption,  } from "components";
import Link from "next/link";
import { useState } from "react";
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
        <Link href="../../../pages/politica.html">
          <StyledCaption isError={error}>персональных данных</StyledCaption>
        </Link>
      </TextWrapper>
    </CheckboxWrapper>
  );
};
