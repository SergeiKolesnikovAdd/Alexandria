


import { H2, Caption } from "components";
import {
  ContentWrapper,
  ContentSection,
  Title,
  Subtitle,
} from "./gratitude.style";

export const Gratitude = () => {

  return (
    <ContentSection>
      <ContentWrapper>
        <Title>
          <H2>Благодарим за обращение в Alexandrina!</H2>
        </Title>
        <Subtitle>
          <Caption>Мы ответим на Ваш вопрос
            <br/>в течение 24 часов</Caption>
        </Subtitle>
      </ContentWrapper>
    </ContentSection>
  );
};
