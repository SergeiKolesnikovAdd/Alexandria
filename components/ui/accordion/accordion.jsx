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
  StyledLinkText,
  H3Styled,
} from "./accordion.style";

export const Accordion = ({id, isShowing, ...props}) => {
  
  // const toggle = () => {
  //   setIsShowing((prev) => !prev);
  // };

  return (
    <AccordionWrapper {...props}>
      <AccordionButton isShowing={isShowing}>
        <Title isShowing={isShowing}>
          {props.title}
          <br />
          {props.title2}
        </Title>
        <IconWrapper isShowing={isShowing}>
          <IconPlus isShowing={isShowing} />
          <IconMinus isShowing={isShowing} />
        </IconWrapper>
      </AccordionButton>
      <InnerContent isShowing={isShowing}>
        <TextWrapper isShowing={isShowing}>
          <H3Styled mr="mdsm" style={{color: colors.white }}>
            {props.desc1}
          </H3Styled>
          {/* <StyledText>
            {props.desc2}
          </StyledText> */}
        </TextWrapper>
        {/* <LinkWrapper>
          <Text style={{ color: colors.white, opacity: "0.4" }}>
            {props.descLink}
          </Text>
          <Link href="/" mt="md">
            <StyledLinkText>{props.Link1}</StyledText>
          </Link>
          <Link href="/" mt="sm">
            <StyledLinkText>{props.Link2}</StyledText>
          </Link>
          <Link href="/" mt="sm">
            <StyledLinkText>{props.Link3}</StyledText>
          </Link>
        </LinkWrapper> */}
      </InnerContent>
    </AccordionWrapper>
  );
};
