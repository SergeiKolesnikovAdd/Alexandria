import { Caption, H2, Text } from "components";
import { ContentWrapper, AdvantageWrapper, AdvantageItem } from "./about-end-text-block.style";

export const AdvantageSlide = () => {
  return (
    <ContentWrapper>
      <Text></Text>
      <H2></H2>
      <AdvantageWrapper>
        <AdvantageItem>
          <Text></Text>
          <Caption></Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem>
          <Text></Text>
          <Caption></Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem>
          <Text></Text>
          <Caption></Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem>
          <Text></Text>
          <Caption></Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
      </AdvantageWrapper>
    </ContentWrapper>
  );
};
