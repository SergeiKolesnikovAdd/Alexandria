import { Text } from "components";
import { useState } from "react";
import Link from "next/link";
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
  LinkWrapper,
  StyledText,
  H3Styled,
} from "./accordion-small.style";

export const AccordionSmall = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing((prev) => !prev);
  };

  return (
    <AccordionWrapper {...props}>
      <AccordionButton onClick={toggle} isShowing={isShowing}>
        <Title mr="md">
          {props.title}
        </Title>
        <IconWrapper isShowing={isShowing}>
          <IconPlus isShowing={isShowing} />
          <IconMinus isShowing={isShowing} />
        </IconWrapper>
      </AccordionButton>
      <InnerContent isShowing={isShowing}>
        <TextWrapper>
          <H3Styled mr="mdsm" style={{ maxWidth: "28vw", color: colors.white }}>
            {props.desc1}
          </H3Styled>
          {/* <Text style={{ width: "30vw", color: colors.white }}>
            {props.desc2}
          </Text> */}
        </TextWrapper>
        {/* <LinkWrapper>
          <Text style={{ color: colors.white, opacity: "0.4" }}>
            {props.descLink}
          </Text>
          <Link href="/" mt="md">
            <StyledText>{props.Link1}</StyledText>
          </Link>
          <Link href="/" mt="sm">
            <StyledText>{props.Link2}</StyledText>
          </Link>
          <Link href="/" mt="sm">
            <StyledText>{props.Link3}</StyledText>
          </Link>
        </LinkWrapper> */}
      </InnerContent>
    </AccordionWrapper>
  );
};
