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
    <AccordionWrapper>
      <AccordionButton px="mdlg" onClick={toggle} isShowing={isShowing}>
        <Title isShowing={isShowing}>
          {props.title}
          <br />
          {props.title2}
        </Title>
        <IconWrapper my="mdlg" prev={isShowing}>
          <IconPlus isShowing={isShowing} />
          <IconMinus isShowing={isShowing} />
        </IconWrapper>
      </AccordionButton>
      <InnerContent isShowing={isShowing}>
        <TextWrapper>
          <Text mr="mdsm" style={{ width: "21vw", color: colors.white }}>
            {props.desc1}
          </Text>
          <Text style={{ width: "23vw", color: colors.white }}>
            {props.desc2}
          </Text>
        </TextWrapper>
        <LinkWrapper>
          <Text>{props.descLink}</Text>
          <Link href="/">
            <StyledText>{props.Link1}</StyledText>
          </Link>
          <Link href="/">
            <StyledText>{props.Link2}</StyledText>
          </Link>
          <Link href="/">
            <StyledText>{props.Link3}</StyledText>
          </Link>
        </LinkWrapper>
      </InnerContent>
    </AccordionWrapper>
  );
};
