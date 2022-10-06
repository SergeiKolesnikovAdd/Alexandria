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

export const AccordionSmall = ({ id, img, span, isShowing, ...props }) => {
  return (
    <AccordionWrapper {...props}>
      <AccordionButton isShowing={isShowing}>
        <Title isShowing={isShowing} mr="md">
          {props.title}
        </Title>
        <IconWrapper isShowing={isShowing}>
          <IconPlus isShowing={isShowing} />
          <IconMinus isShowing={isShowing} />
        </IconWrapper>
      </AccordionButton>
      <InnerContent isShowing={isShowing}>
        <TextWrapper>
          <H3Styled
            isShowing={isShowing}
            mr="mdsm"
            
          >
            {props.desc1}
          </H3Styled>
        </TextWrapper>
      </InnerContent>
    </AccordionWrapper>
  );
};
