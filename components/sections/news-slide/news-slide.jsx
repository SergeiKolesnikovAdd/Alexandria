import {
  NewsWrapper,
  ContentWrapper,
  Link,
  StyledText,
  SubscriptionWrapper,
  H3Styled,
  SendButton,
  InputRow,
  Logo,
  StyledInput,
} from "./news-slide.style";
import { ButtonXSM, H2, NewsItem, Caption, } from "components";
import { arrNews } from "./constant";
import { colors } from "styles";

export const NewsSlide = ({}) => {
  return (
    <>
      <ContentWrapper>
        <H3Styled>Тенденции издательского дела.</H3Styled>
        <H2 mt="mdsm">Последние новости</H2>
        <ButtonXSM mt="md">Все новости</ButtonXSM>
        <NewsWrapper mt="xxlg">
          {arrNews.map(
            (
              { id, title1, title2, img, description, date, ...props },
              index
            ) => (
              <NewsItem
                key={id}
                id={id}
                img={img}
                description={description}
                date={date}
                title1={title1}
                title2={title2}
              ></NewsItem>
            )
          )}
          <SubscriptionWrapper>
            <StyledText>
              Подписывайся,
              <br />
              чтобы быть в курсе новостей
            </StyledText>
            <InputRow>
              {/* <StyledInput></StyledInput> */}
              {/* TODO: ВСТАВИТЬ СТИЛЛИЗОВАННЫЙ ИНПУТ */}
              <SendButton />
            </InputRow>
            <Logo />
            <Caption mt="mdsm" mb="xxsm" style={{ color: colors.white }}>
              Мы заботимся о безопасности ваших данных.
            </Caption>
            <Link href="" style={{ lineHeight: "140%" }}>
              <Caption>Подробнее</Caption>
            </Link>
            <Caption
              mt="xlg"
              style={{ color: colors.white, lineHeight: "140%" }}
            >
              Будьте в курсе актуальных новостей и получайте их первыми.
              <br />
              Подпишитесь на полезную рассылку от Alexandrina
            </Caption>
          </SubscriptionWrapper>
        </NewsWrapper>
      </ContentWrapper>
    </>
  );
};