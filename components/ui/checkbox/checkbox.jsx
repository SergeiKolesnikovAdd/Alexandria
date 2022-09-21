import { Text } from "components";
import { useState } from "react";
import {
  CheckboxWrapper,
  CheckboxBorder,
  CheckboxInner,
} from "./checkbox.style";

export const Checkbox = ({}) => {
  const [isActive, setActiveState] = useState(false);
  return (
    <CheckboxWrapper onClick={() => setActiveState((prev) => !prev)}>
      <CheckboxBorder>
        <CheckboxInner isActive={isActive} />
      </CheckboxBorder>
      <Text>ergergrtvtrb</Text>
    </CheckboxWrapper>
  );
};
