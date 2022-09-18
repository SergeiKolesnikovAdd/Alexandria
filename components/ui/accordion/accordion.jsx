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
} from "./accordion.style";

export const Accordion = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing((prev) => !prev);
  };

  return (
    <AccordionWrapper {...props}>
      <AccordionButton px="mdlg" onClick={toggle} isShowing={isShowing}>
        <Title isShowing={isShowing}>
          {props.title}
          <br />
          {props.title2}
        </Title>
        <IconWrapper my="mdlg" isShowing={isShowing}>
          <IconPlus isShowing={isShowing} />
          <IconMinus isShowing={isShowing} />
        </IconWrapper>
      </AccordionButton>
      <InnerContent isShowing={isShowing}>
        <TextWrapper style={{ marginRight: "25vw" }}>
          <Text mr="mdsm" style={{ width: "23vw", color: colors.white }}>
            {props.desc1}
          </Text>
          <Text style={{ width: "23vw", color: colors.white }}>
            {props.desc2}
          </Text>
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
