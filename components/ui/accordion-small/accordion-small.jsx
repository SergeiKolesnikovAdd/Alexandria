import { colors } from "styles";

import {
  AccordionWrapper,
  AccordionButton,
  Title,
  IconWrapper,
  IconPlus,
  IconMinus,
  InnerContent,
  TextWrapper,
  H3Styled,
} from "./accordion-small.style";

export const AccordionSmall = ({
  id,
  img,
  setCurrentAccordion,
  currentAccordion,
  ...props
}) => {
  const isShowing = currentAccordion === id;
  return (
    <AccordionWrapper {...props}>
      <AccordionButton
        px="mdlg"
        onClick={() => {
          setCurrentAccordion?.(id);
        }}
        isShowing={isShowing}
      >
        <Title isShowing={isShowing} mr="md">
          {props.title}
        </Title>
        <IconWrapper my="mdlg" isShowing={isShowing}>
          <IconPlus isShowing={isShowing} />
          <IconMinus isShowing={isShowing} />
        </IconWrapper>
      </AccordionButton>
      <InnerContent isShowing={isShowing}>
        <TextWrapper>
          <H3Styled
            isShowing={isShowing}
            mr="mdsm"
            style={{ maxWidth: "28vw",}}
          >
            {props.desc1}
          </H3Styled>
        </TextWrapper>
      </InnerContent>
    </AccordionWrapper>
  );
};
