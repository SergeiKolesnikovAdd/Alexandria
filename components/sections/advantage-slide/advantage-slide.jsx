import {
  ContentWrapper,
  AdvantageWrapper,
  AdvantageItem,
  StyledCaption,
  StyledH2,
  StyledText,
  TextWrapper,
  ImgWrapper,
  StyledDiagram,
  StyledFlag,
  StyledMessage,
  StyledPen,
  H3Styled,
  SectionWrapper,
} from "./advantage-slide.style";

export const AdvantageSlide = ({ ...props }) => {
  return (
    <SectionWrapper id="advantages">
      <ContentWrapper {...props} mt="xxxlg">
        <H3Styled style={{ opacity: 0.4 }}>Преимущества</H3Styled>
        <StyledH2 mt="mdsm">
          Почему выбирают
          именно нас?
        </StyledH2>
        <AdvantageWrapper>
          <AdvantageItem mr="mdsm">
            <TextWrapper>
              <StyledText>
                Продвижение в международные
                наукометрические и предметные базы данных
              </StyledText>
              <StyledCaption>
                Составление подробного плана
                продвижения журнала в базы данных с его
                последующей реализацией.
              </StyledCaption>
            </TextWrapper>
            <ImgWrapper>
              <StyledDiagram />
            </ImgWrapper>
          </AdvantageItem>
          <AdvantageItem mr="mdsm">
            <TextWrapper>
              <StyledText>
                Консультации и полное
                сопровождение
              </StyledText>
              <StyledCaption>
                Подробные инструкции, воркшопы
                <br />
                и консультации помогут досконально
                <br />
                разобраться в процессе издательской
                <br />
                деятельности и повысят уровень
                <br />
                экспертности назначенной редакционной
                <br />
                коллегии.
              </StyledCaption>
            </TextWrapper>
            <ImgWrapper>
              <StyledMessage />
            </ImgWrapper>
          </AdvantageItem>
          <AdvantageItem mr="mdsm">
            <TextWrapper>
              <StyledText>
                Экспертное редактирование,
                перевод и подготовка научных
                рукописей
              </StyledText>
              <StyledCaption>
                Редактирование научных рукописей
                экспертами международного уровня,
                перевод и полная подготовка в публикации.
              </StyledCaption>
            </TextWrapper>
            <ImgWrapper>
              <StyledPen />
            </ImgWrapper>
          </AdvantageItem>
          <AdvantageItem>
            <TextWrapper>
              <StyledText>Различные бизнес-модели</StyledText>
              <StyledCaption>
                Подробные инструкции, воркшопы
                <br />
                и консультации помогут досконально
                <br />
                разобраться в процессе издательской
                <br />
                деятельности и повысят уровень
                <br /> экспертности назначенной редакционной коллегии.
              </StyledCaption>
            </TextWrapper>
            <ImgWrapper>
              <StyledFlag />
            </ImgWrapper>
          </AdvantageItem>
        </AdvantageWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};
